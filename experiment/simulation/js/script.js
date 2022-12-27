var connections = [];

var deletecon=0;
 var jsPlumbInstance = null;
 
function BoardController() {
   
    var endPoints = [];

    this.setJsPlumbInstance = function (instance) {
        jsPlumbInstance = instance;
    };

    this.setCircuitContainer = function (drawingContainer) {
        jsPlumbInstance.Defaults.Container = drawingContainer;
    };

    this.initDefault = function () {

        jsPlumbInstance.importDefaults({
            Connector: ["Bezier", { curviness: 20 }],
            PaintStyle: { strokeStyle: 'blue', lineWidth: 3 },
            EndpointStyle: { radius: 4, fillStyle: 'blue' },
            HoverPaintStyle: { strokeStyle: "#728C00" },
             ConnectionsDetachable   : true
        });

        jsPlumbInstance.bind("beforeDrop", function (params) {
            var sourceEndPoint = params.connection.endpoints[0];
            var targetEndPoint = params.dropEndpoint;
            if (!targetEndPoint || !sourceEndPoint) {
                return false;
            }
            var sourceEndPointgroup = sourceEndPoint.getParameter('groupName');
            var targetEndPointgroup = targetEndPoint.getParameter('groupName');

            if (sourceEndPointgroup == targetEndPointgroup) {
                alert("Already connected internally");
                return false;
            } else {
                return true;
            }
        });

        jsPlumbInstance.bind("dblclick", function (conn) {
            jsPlumb.detach(conn);
            deletecon++;
            return false;
        });
     

        jsPlumbInstance.bind("jsPlumbConnection", function (conn) {
            var source = conn.connection.endpoints[0].getParameter('endPointName')
            connections[source] = conn.connection;

        });
    };

    this.addEndPoint = function (stroke,radius,maxConnection, divID, groupName, endPointName, anchorArray,color) {
        var endpointOptions = {
            isSource: true,
            isTarget: true,
            anchor: anchorArray,
            maxConnections: maxConnection,
            parameters: {
                "divID": divID,
                "endPointName": endPointName,
                "groupName": groupName,
                "type": 'output',
                "acceptType": 'input'
            },
            paintStyle: { radius: radius, fillStyle: color },
connectorStyle:{strokeStyle: stroke,lineWidth:3}
        };

        jsPlumbInstance.addEndpoint(divID, endpointOptions);

        setEndpoint(endPointName, endpointOptions);
    };

    var setEndpoint = function (endPointName, endpointOptions) {
        endPoints[endPointName] = {
            "endPointName": endpointOptions.parameters.endPointName,
            "groupName": endpointOptions.parameters.groupName,
            "divID": endpointOptions.parameters.divID
        };

    };

    this.makeDraggable = function (selector) {
        jsPlumbInstance.draggable(selector, {
            stop: function () {
                var x = $(selector).position().left;
                jsPlumbInstance.repaint(selector);
            }
        });
    };


}


function draggable(item, container) {
    var dragItem = document.querySelector("#" + item);
    var container = document.querySelector("#" + container);

    var active = false;
    var currentX;
    var currentY;
    var initialX;
    var initialY;
    var xOffset = 0;
    var yOffset = 0;

    container.addEventListener("touchstart", dragStart, false);
    container.addEventListener("touchend", dragEnd, false);
    container.addEventListener("touchmove", drag, false);

    container.addEventListener("mousedown", dragStart, false);
    container.addEventListener("mouseup", dragEnd, false);
    container.addEventListener("mousemove", drag, false);

    function dragStart(e) {
        if (e.type === "touchstart") {
            initialX = e.touches[0].clientX - xOffset;
            initialY = e.touches[0].clientY - yOffset;
        } else {
            initialX = e.clientX - xOffset;
            initialY = e.clientY - yOffset;
        }

        if (e.target === dragItem) {
            active = true;
        }
    }

    function dragEnd(e) {
        initialX = currentX;
        initialY = currentY;

        active = false;
    }

    function drag(e) {
        if (active) {

            e.preventDefault();

            if (e.type === "touchmove") {
                currentX = e.touches[0].clientX - initialX;
                currentY = e.touches[0].clientY - initialY;
            } else {
                currentX = e.clientX - initialX;
                currentY = e.clientY - initialY;
            }

            xOffset = currentX;
            yOffset = currentY;

            setTranslate(currentX, currentY, dragItem);
        }
    }

    function setTranslate(xPos, yPos, el) {
        el.style.transform = "translate3d(" + xPos + "px, " + yPos + "px, 0)";
    }
} 

//var g = new Graph(56);
//console.log("###noofedges->"+(g.numberofedges-deletecon));
var theorem1=false;
  

function checkCircuit() {
   
    var g = new Graph(40);

  
  
    var groups = ['row4','row6','row7','row8','row2','row3','input_A', 'input_B','input_A1', 'input_B1','led_A1','led_C1','resistance3_A1' ,'resistance3_C1','resistance4_A1','resistance4_C1','resistance5_C1','resistance5_A1','cap_C1','cap_A1'  ,'VCC', 'GND', 'ic555_5', 'ic555_6', 'ic555_7', 'ic555_8', 'ic555_1', 'ic555_3', 'ic555_2', 'ic555_4', 'row1', 'row5'];
    
    console.log(groups.length)
    for (var i = 0; i < groups.length; i++) { //inserting groups vertexes
        g.addVertex(groups[i]);
    }

    for (key in connections) {  // adding edges
        g.addEdge(connections[key].endpoints[0].getParameter('groupName'), connections[key].endpoints[1].getParameter('groupName'));
    }
     console.log("###noofedges->"+(g.numberofedges-deletecon));


if(g.isConnected("ic555_8","VCC"))
{console.log("ic 8 connected to vcc");
document.getElementById("checkbutton").disabled=false;
if(g.isConnected("ic555_1","GND"))
{console.log("ic 1 connected to gnd");
if(g.isConnected("GND","ic555_6"))
{console.log("ic 6 connected to gnd");
if(g.isConnected("GND","led_C1"))
{console.log("ic 6 connected to gnd");


 if((g.isConnected("VCC","resistance3_A1")&&g.isConnected("ic555_4","resistance3_C1"))||(g.isConnected("ic555_4","resistance3_A1")&&g.isConnected("VCC","resistance3_C1"))
    &&(g.isConnected("resistance4_C1","ic555_2")&&g.isConnected("resistance4_A1","VCC"))||(g.isConnected("resistance4_A1","ic555_2")&&g.isConnected("resistance4_C1","VCC"))
    &&(g.isConnected("resistance5_C1","ic555_3")&&g.isConnected("resistance5_A1","led_A1"))||(g.isConnected("resistance5_A1","ic555_3")&&g.isConnected("resistance5_C1","led_A1"))
    &&(g.isConnected("input_A1","ic555_2")&&g.isConnected("input_B1","GND"))||(g.isConnected("input_A1","GND")&&g.isConnected("input_B1","ic555_2"))
    &&(g.isConnected("input_A","ic555_4")&&g.isConnected("input_B","GND"))||(g.isConnected("input_A","GND")&&g.isConnected("input_B1","ic555_4"))
    
    &&((g.isConnected("cap_C1","ic555_5")&&g.isConnected("cap_A1","GND"))||(g.isConnected("cap_A1","ic555_5")&&g.isConnected("cap_C1","GND"))))

{alert("Right Connections. Now Click on start simulation button.");
document.getElementById("startbutton").disabled=false;
document.getElementById("resetbutton").disabled=false;
document.getElementById("checkbutton").disabled=true;
isstartedsimulation=true;
}


else{document.getElementById("resetbutton").disabled=false;alert("Wrong Connections.Please Check Again.");}
}
else{document.getElementById("resetbutton").disabled=false;alert(" Connect ground of led properly.");}
}
else{document.getElementById("resetbutton").disabled=false;alert(" Connect pin-6 of IC properly.");}

}
else{document.getElementById("resetbutton").disabled=false;alert("Connect pin-1 of IC properly. ");}
}
else{document.getElementById("resetbutton").disabled=false;alert(" Connect pin-8 of IC properly.");}

console.log("executed")
}






























