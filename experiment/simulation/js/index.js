var connections = [];

function reload(event) {
    window.location.reload()
}

function BoardController() {
    var jsPlumbInstance = null;
    var endPoints = [];

    this.setJsPlumbInstance = function (instance) {
        jsPlumbInstance = instance;
    };

    this.setCircuitContainer = function (drawingContainer) {
        jsPlumbInstance.Defaults.Container = drawingContainer;
    };

    this.initDefault = function () {

        jsPlumbInstance.importDefaults({
            Connector: ["Bezier", { curviness: 30 }],
            PaintStyle: { strokeStyle: '#87321b', lineWidth: 4 },
            EndpointStyle: { radius: 3, fillStyle: 'blue' },
            HoverPaintStyle: { strokeStyle: "#26c947" }
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
            return false;
        });

        jsPlumbInstance.bind("jsPlumbConnection", function (conn) {
            var source = conn.connection.endpoints[0].getParameter('endPointName')
            connections[source] = conn.connection;

        });
    };

    this.addEndPoint = function (radius, divID, groupName, endPointName, anchorArray, color, stroke) {
        var Stroke;
        if (typeof (stroke) == 'undefined') {
            Stroke = '#87321b';
        }
        else {
            Stroke = stroke;
        }
        var endpointOptions = {
            isSource: true,
            isTarget: true,
            anchor: anchorArray,
            maxConnections: 1,
            parameters: {
                "divID": divID,
                "endPointName": endPointName,
                "groupName": groupName,
                "type": 'output',
                "acceptType": 'input'
            },
            paintStyle: { radius: radius, fillStyle: color },
            connectorStyle: { strokeStyle: Stroke, lineWidth: 4 }
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

}


var con;

function checkCircuit() {
    con = false;
    var g = new Graph(29);


    var groups = ['row1', 'row2', 'row3', 'row4', 'row5', 'row6', 'row7', 'row8', 'VCC', 'GND', 'trfm_A', 'trfm_B', 'trfm_C', 'trfm_D', 'dn1', 'dp1', 'dn2', 'dp2', 'c1_A', 'c1_B', 'vregin', 'vreg_gnd', 'vregout', 'r1_A', 'r1_B', 'ledp', 'ledn', 'cro_A', 'cro_B']

    console.log(groups.length)

    for (var i = 0; i < groups.length; i++) { //inserting groups vertexes
        g.addVertex(groups[i]);
    }

    for (key in connections) { // adding edges
        g.addEdge(connections[key].endpoints[0].getParameter('groupName'), connections[key].endpoints[1].getParameter('groupName'));
    }

    if (
        g.isConnected("VCC", "trfm_A")
        && g.isConnected("GND", "trfm_B")
        && (g.isConnected("trfm_C", "row1") || g.isConnected("trfm_C", "row2") || g.isConnected("trfm_C", "row3") || g.isConnected("trfm_C", "row4")) 
        && (g.isConnected("trfm_D", "row5") || g.isConnected("trfm_D", "row6") || g.isConnected("trfm_D", "row7") || g.isConnected("trfm_D", "row8")) 
        && (g.isConnected("row1", "dn1") || g.isConnected("row2", "dn1") || g.isConnected("row3", "dn1") || g.isConnected("row4", "dn1")) 
        && (g.isConnected("row5", "dp2") || g.isConnected("row6", "dp2") || g.isConnected("row7", "dp2") || g.isConnected("row8", "dp2")) 
        && g.isConnected("dn2", "c1_A") && g.isConnected("dp1", "c1_B") && g.isConnected("c1_A", "vregin") && g.isConnected("c1_B", "vreg_gnd") 
        && g.isConnected("vregout", "r1_A")  && g.isConnected("r1_B", "ledp") && g.isConnected("ledn", "vreg_gnd")
        && (g.isConnected("vreg_gnd", "row5") || g.isConnected("vreg_gnd", "row6") || g.isConnected("vreg_gnd", "row7") || g.isConnected("vreg_gnd", "row8")) 
        || (g.isConnected("c1_B", "row5") || g.isConnected("c1_B", "row6") || g.isConnected("c1_B", "row7") || g.isConnected("c1_B", "row8")) 
        && g.isConnected("cro_A", "c1_A") && g.isConnected("cro_B", "r1_A")

    ) {

        alert("Right Connections")
        con = true;
        var x = document.getElementById('mydiv');
        x.style.visibility = 'visible';
        x.style.display = "block";
        // var y = document.getElementById('mydiv2');
        // y.style.visibility = 'visible';
        // y.style.display = "block";


        rightTab = document.getElementById('right_tab');
        rightTab.style.display = 'none';

        tab = document.getElementById('obsTable');
        tab.style.display = 'block';

        document.getElementById('led').style.backgroundImage = "url('images/led1.png')";

    } else {
        alert("Wrong Connections")
    }
    console.log("executed")
}







