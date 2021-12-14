var objImage = null;
function init() {
        objImage = document.getElementById("tri_img");
        
    }
 
    function getKeyAndMove(e) {
        var key_code = e.which || e.keyCode;
        switch (key_code) {
            case 37: //left arrow key
                moveLeft();
                break;
            case 38: //Up arrow key
                moveUp();
                break;
            case 39: //right arrow key
                moveRight();
                break;
            case 40: //down arrow key
                moveDown();
                break;
                case 83: //down arrow key
                setting();
                break;
        }
    }
  
    function getKeyAndMove(e) {
        var key_code = e.which || e.keyCode;
        switch (key_code) {
            case 37: //left arrow key
                moveLeft();
                break;
            case 38: //Up arrow key
                moveUp();
                break;
            case 39: //right arrow key
                moveRight();
                break;
            case 40: //down arrow key
                moveDown();
                break;
                
        }
    }
    function moveLeft() {
        objImage.style.left = parseInt(objImage.style.left) - 5 + "px";
        
    }
    function moveUp() {
        objImage.style.top = parseInt(objImage.style.top) - 5 + "px";
        

    }
    function moveRight() {
        objImage.style.left = parseInt(objImage.style.left) + 5 + "px";
       
    }
    function moveDown() {
        objImage.style.top = parseInt(objImage.style.top) + 5 + "px";
        
    }
    window.onload = init;
  
    function start()
       {
        document.getElementById("st_main").disabled= true;
        document.getElementById("alidade_img").style.display = "inline";
        document.getElementById("stand_img").style.display = "inline";
        setTimeout(function(){document.getElementById("staff_maina").style.display = "inline";}, 1500);
        setTimeout(function(){swal("Please click on the staff placed at point A");}, 2000);
        document.getElementById("t").style.visibility = "visible";
        setTimeout(function(){document.getElementById("v11").style.visibility = "visible"; }, 1500);
        setTimeout(function(){document.getElementById("v11").style.backgroundColor = "blanchedalmond"; }, 1500);
        setTimeout(function(){document.getElementById("v13").style.visibility = "visible"; }, 2000);
        setTimeout(function(){document.getElementById("v13").style.backgroundColor = "blanchedalmond"; }, 2000);
        if(document.getElementById("v11").style.visibility === "visible")
        {
            document.getElementById("staff_maina").disabled= flase;
        }
        else{
            document.getElementById("staff_maina").disabled= true;
            }
       }
       function viewa()
       {
        document.getElementById("cross_viewa").style.display = "inline";
        setTimeout(function(){document.getElementById("v12").style.visibility = "visible"; }, 2000);
        setTimeout(function(){document.getElementById("v12").style.backgroundColor = "blanchedalmond"; },2000);
        setTimeout(function(){ document.getElementById("next_main").style.display="inline"; }, 3500);
        setTimeout(function(){ swal("Please click on the NEXT Button to move the staff at point B");}, 3500);
       }
       function viewb()
       {
        document.getElementById("cross_viewa").style.display = "none";
        document.getElementById("cross_viewb").style.display = "inline";
        setTimeout(function(){document.getElementById("v22").style.visibility = "visible"; }, 2000);
        setTimeout(function(){document.getElementById("v22").style.backgroundColor = "blanchedalmond"; },2000);
        setTimeout(function(){document.getElementById("v23").style.visibility = "visible"; }, 3000);
        setTimeout(function(){document.getElementById("v23").style.backgroundColor = "blanchedalmond"; },3000);
        setTimeout(function(){document.getElementById("v21").style.visibility = "visible"; }, 3500);
        setTimeout(function(){document.getElementById("v21").style.backgroundColor = "blanchedalmond"; },3500);
        setTimeout(function(){ swal("Please click on the NEXT Button to move the staff at point C");  document.getElementById("next_main").disabled = false;
    },4500);
      
       }
       function viewc()
       {
       

        if(document.getElementById("v31").style.visibility === "visible")
        {
            setTimeout(function(){document.getElementById("v42").style.visibility = "visible"; }, 1000);
            setTimeout(function(){document.getElementById("v42").style.backgroundColor = "blanchedalmond"; },1000);
            setTimeout(function(){document.getElementById("v43").style.visibility = "visible"; }, 1500);
            setTimeout(function(){document.getElementById("v43").style.backgroundColor = "blanchedalmond"; },1500);
            setTimeout(function(){document.getElementById("v41").style.visibility = "visible"; }, 2000);
            setTimeout(function(){document.getElementById("v41").style.backgroundColor = "blanchedalmond"; },2000);
            setTimeout(function(){ swal("Please click on the NEXT Button to move the staff at point D");  document.getElementById("next_main").disabled = false;
    },2500);
        }
        else{
            setTimeout(function(){ swal("As TBM 3 distance is far away fom the autolevel. Need to take change point");}, 1000);
            setTimeout(function(){ swal("Click on the staff again ");}, 3000);
            setTimeout(function(){ document.getElementById("staff_mainc").style.display = "none";}, 1500);
            setTimeout(function(){ document.getElementById("staff_mainc2").style.display = "inline";}, 1500);
            setTimeout(function(){ document.getElementById("bench3").style.display = "none";}, 1500);
            setTimeout(function(){ document.getElementById("bench32").style.display = "inline";}, 1500);
            document.getElementById("cross_viewc").style.display = "inline";
        }
       }
       function viewc2()
       {
       
            if(document.getElementById("autolevel_main2").style.display ==="inline" &&  document.getElementById("tri_img_main2").style.display === "inline")
            {
                setTimeout(function(){document.getElementById("v31").style.visibility = "visible"; }, 1000);
                setTimeout(function(){document.getElementById("v31").style.backgroundColor = "blanchedalmond"; },1000);
                setTimeout(function(){ document.getElementById("staff_mainc2").style.display = "none";}, 1500);
                setTimeout(function(){ document.getElementById("bench32").style.display = "none";}, 1500);
                setTimeout(function(){ document.getElementById("staff_mainc").style.display = "inline";}, 1500);
                setTimeout(function(){ document.getElementById("bench3").style.display = "inline";}, 1500);
                setTimeout(function(){ swal("Click on the staff again to take I.S. readings ");}, 2500);
            }
            else{
                setTimeout(function(){document.getElementById("v32").style.visibility = "visible"; }, 1000);
                setTimeout(function(){document.getElementById("v32").style.backgroundColor = "blanchedalmond"; },1000);
                setTimeout(function(){document.getElementById("v33").style.visibility = "visible"; }, 2000);
                setTimeout(function(){document.getElementById("v33").style.backgroundColor = "blanchedalmond"; },2000);
                setTimeout(function(){swal("Now click on the autolevel machine to move it to another place"); document.getElementById("tri_img_main").style.pointerEvents ="auto"; document.getElementById("autolevel_main").style.pointerEvents ="auto";}, 3000);
            }
}
       function viewd()
       {
      
        document.getElementById("cross_viewd").style.display = "inline";
        setTimeout(function(){document.getElementById("v52").style.visibility = "visible"; }, 1000);
        setTimeout(function(){document.getElementById("v52").style.backgroundColor = "blanchedalmond"; },1000);
        setTimeout(function(){document.getElementById("v53").style.visibility = "visible"; }, 1500);
        setTimeout(function(){document.getElementById("v53").style.backgroundColor = "blanchedalmond"; },1500);
        setTimeout(function(){document.getElementById("v51").style.visibility = "visible"; }, 2000);
        setTimeout(function(){document.getElementById("v51").style.backgroundColor = "blanchedalmond"; },2000);
        setTimeout(function(){ swal("Click on the FINISH Button to close the simulation ");}, 3000);
        setTimeout(function(){document.getElementById("finish").style.display = "inline"; }, 4500);
       }
       
       function save()
       {
        if(document.getElementById("staff_maina").style.display === "inline" )
        {
            document.getElementById("cross_viewa").style.display = "none";
        }
        else
        if(document.getElementById("staff_mainb").style.display === "inline" )
        {
            document.getElementById("cross_viewb").style.display = "none";
            document.getElementById("next_main").disabled = false;
            swal("Please click on the NEXT Button to move the staff at point C");
        }
        else 
        if(document.getElementById("staff_mainc").style.display === "inline" )
        {
            document.getElementById("cross_viewc").style.display = "none";
            document.getElementById("next_main").disabled = false;
            swal("Please click on the NEXT Button to move the staff at point D");
        }
        else
        if(document.getElementById("staff_maind").style.display === "inline" )
        {
            document.getElementById("cross_viewb").style.display = "none";
            document.getElementById("view_readings").style.display =  "inline";
            swal("Please take a look at the alidade view section for readings");
        }
        else
        {
            swal("Please click on the staff first");
        }
        document.getElementById("next_main").style.display = "inline";
      
        }
      function n(){

        if(document.getElementById("staff_maina").style.display === "inline")
        {
        
            document.getElementById("staff_maina").style.display = "none";
            document.getElementById("staff_mainb").style.display = "inline";
            setTimeout(function(){swal("Please click on the staff placed at point B");}, 1000);
            document.getElementById("next_main").disabled = true;
            document.getElementById("cross_viewa").style.display = "none";
        }
        else
        if(document.getElementById("staff_mainb").style.display === 'inline')
        {
            document.getElementById("staff_maina").style.display = "none";
            document.getElementById("staff_mainb").style.display = "none";
            document.getElementById("staff_mainc").style.display = "inline";
            setTimeout(function(){  swal("Please click on the staff placed at point C");}, 1000);
            document.getElementById("next_main").disabled = true;
           
        }
        else
        if(document.getElementById("staff_mainc").style.display === "inline")
        {
        
            setTimeout(function(){  swal("Please click on the staff placed at point D");}, 1000);
            document.getElementById("staff_maina").style.display = "none";
            document.getElementById("staff_mainb").style.display = "none";
            document.getElementById("staff_mainc").style.display = "none";
            document.getElementById("staff_maind").style.display = "inline";
            document.getElementById("next_main").disabled = true;
            
        }
        
       }
      function view()
      {
            document.getElementById("t").style.display = "inline";
            document.getElementById("alidade_img").style.display = "none";
            document.getElementById("save").disabled = true;
            document.getElementById("finish").style.display = "inline";
      }

     function shift()
     {
        document.getElementById("tri_img_main").style.display = "none";
        document.getElementById("autolevel_main").style.display = "none";
        document.getElementById("tri_img_main2").style.display = "inline";
        document.getElementById("autolevel_main2").style.display = "inline";
        
        setTimeout(function(){  swal("Click on the staff again to take B.S. readings");}, 1000);
     }