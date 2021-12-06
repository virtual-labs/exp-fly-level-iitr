

var myWindow;
function esc2(){
    myWindow.close();
}
var objImage = null;
var objImage2 = null;
var objImage3 = null;
var objImage4 = null;
var objImage5 = null;
var objImage6 = null;
    function init() {
        objImage = document.getElementById("tri_img2");
        objImage.style.position = "absolute";
        objImage.style.left = "0px";
        objImage.style.top = "0px";
        objImage2 = document.getElementById("autolevel2");
        objImage2.style.position = "absolute";
        objImage2.style.left = "0px";
        objImage2.style.top = "0px";
        objImage3 = document.getElementById("screw1");
        objImage4 = document.getElementById("screw2");
        objImage5 = document.getElementById("screw3");
        objImage6 = document.getElementById("bluedot");
        objImage6.style.left = "0px";
        objImage6.style.top = "0px";
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
            case 76: //l alphabet key
                movel();
                break;
            case 82: //r alphabet key
                mover();
                break;
            case 85: //u alphabet key
                moveu();
                break;
            case 65: //a alphabet key
                left_rotate();
                 break;
            case 66: //b alphabet key
                 right_rotate();
                  break;
            case 67: //c alphabet key
                  up_rotate();
                   break;
            case 68: //d alphabet key
                moved();
                break;
            case 69: //e alphabet key
                  down_rotate();
                   break;
            case 70: //f alphabet key
                  up_dot();
                   break;
            case 71: //g alphabet key
                   down_dot();
                    break;
           
        }
    }
  
    function moveLeft() {
        objImage.style.left = parseInt(objImage.style.left) - 1 + "px";
        
    }
    function moveUp() {
        objImage.style.top = parseInt(objImage.style.top) - 0 + "px";
        

    }
    function moveRight() {
        objImage.style.left = parseInt(objImage.style.left) + 1 + "px";
       
    }
    function moveDown() {
        objImage.style.top = parseInt(objImage.style.top) + 0 + "px";
        
    }
    function movel() {
        
        objImage2.style.left = parseInt(objImage2.style.left) - 1 + "px";
          
    if(document.getElementById("autolevel2").style.left === "126px" && document.getElementById("autolevel2").style.top === "-189px")
    {
        
        document.getElementById("level_setting").style.display = "inline";
        document.getElementById("tri_img2").style.display = "none";
        document.getElementById("autolevel2").style.display = "none";
        document.getElementById("setup_autotri").style.display = "inline";
        
        swal("Click on LEVEL SETUP Button");
    }
    else
    if(document.getElementById("autolevel2").style.left === "126px" && document.getElementById("autolevel2").style.top === "-188px")
    {
        document.getElementById("level_setting").style.display = "inline";
        document.getElementById("tri_img2").style.display = "none";
        document.getElementById("autolevel2").style.display = "none";
        document.getElementById("setup_autotri").style.display = "inline";
        
      swal("Click on LEVEL SETUP Button");
    }
    else
    if(document.getElementById("autolevel2").style.left === "127px" && document.getElementById("autolevel2").style.top === "-190px")
    {
        document.getElementById("level_setting").style.display = "inline";
        document.getElementById("tri_img2").style.display = "none";
        document.getElementById("autolevel2").style.display = "none";
        document.getElementById("setup_autotri").style.display = "inline";
        
      swal("Click on LEVEL SETUP Button");
    }
    if(document.getElementById("autolevel2").style.left === "127px" && document.getElementById("autolevel2").style.top === "-189px")
    {
        document.getElementById("level_setting").style.display = "inline";
        document.getElementById("tri_img2").style.display = "none";
        document.getElementById("autolevel2").style.display = "none";
        document.getElementById("setup_autotri").style.display = "inline";
      
      swal("Click on LEVEL SETUP Button");
    }  
    }
    function mover() {
        
        objImage2.style.left = parseInt(objImage2.style.left) + 1 + "px";
       
    if(document.getElementById("autolevel2").style.left === "126px" && document.getElementById("autolevel2").style.top === "-189px")
    {
        
        document.getElementById("level_setting").style.display = "inline";
        document.getElementById("tri_img2").style.display = "none";
        document.getElementById("autolevel2").style.display = "none";
        document.getElementById("setup_autotri").style.display = "inline";
        
        swal("Click on LEVEL SETUP Button");
    }
    else
    if(document.getElementById("autolevel2").style.left === "126px" && document.getElementById("autolevel2").style.top === "-188px")
    {
        document.getElementById("level_setting").style.display = "inline";
        document.getElementById("tri_img2").style.display = "none";
        document.getElementById("autolevel2").style.display = "none";
        document.getElementById("setup_autotri").style.display = "inline";
      
      swal("Click on LEVEL SETUP Button");
    }
    else
    if(document.getElementById("autolevel2").style.left === "127px" && document.getElementById("autolevel2").style.top === "-190px")
    {
        document.getElementById("level_setting").style.display = "inline";
        document.getElementById("tri_img2").style.display = "none";
        document.getElementById("autolevel2").style.display = "none";
        document.getElementById("setup_autotri").style.display = "inline";
       
      swal("Click on LEVEL SETUP Button");
    }
    if(document.getElementById("autolevel2").style.left === "127px" && document.getElementById("autolevel2").style.top === "-189px")
    {
        document.getElementById("level_setting").style.display = "inline";
        document.getElementById("tri_img2").style.display = "none";
        document.getElementById("autolevel2").style.display = "none";
        document.getElementById("setup_autotri").style.display = "inline";
       
      swal("Click on LEVEL SETUP Button");
    }  
        
    }
    function moveu() {
        
        objImage2.style.top = parseInt(objImage2.style.top) - 1 + "px";
        
    if(document.getElementById("autolevel2").style.left === "126px" && document.getElementById("autolevel2").style.top === "-189px")
    {
        document.getElementById("level_setting").style.display = "inline";
        document.getElementById("tri_img2").style.display = "none";
        document.getElementById("autolevel2").style.display = "none";
        document.getElementById("setup_autotri").style.display = "inline";
      

        swal("Click on LEVEL SETUP Button");
    }
    else
    if(document.getElementById("autolevel2").style.left === "126px" && document.getElementById("autolevel2").style.top === "-188px")
    {
        document.getElementById("level_setting").style.display = "inline";
        document.getElementById("tri_img2").style.display = "none";
        document.getElementById("autolevel2").style.display = "none";
        document.getElementById("setup_autotri").style.display = "inline";
        
      swal("Click on LEVEL SETUP Button");
    }
    else
    if(document.getElementById("autolevel2").style.left === "127px" && document.getElementById("autolevel2").style.top === "-190px")
    {
        document.getElementById("level_setting").style.display = "inline";
        document.getElementById("tri_img2").style.display = "none";
        document.getElementById("autolevel2").style.display = "none";
        document.getElementById("setup_autotri").style.display = "inline";
        
      swal("Click on LEVEL SETUP Button");
    }
    if(document.getElementById("autolevel2").style.left === "127px" && document.getElementById("autolevel2").style.top === "-189px")
    {
        document.getElementById("level_setting").style.display = "inline";
        document.getElementById("tri_img2").style.display = "none";
        document.getElementById("autolevel2").style.display = "none";
        document.getElementById("setup_autotri").style.display = "inline";
      
      swal("Click on LEVEL SETUP Button");
    }  
    
    }
    function moved() {
        
       
    if(document.getElementById("autolevel2").style.left === "126px" && document.getElementById("autolevel2").style.top === "-189px")
    {
        
        document.getElementById("level_setting").style.display = "inline";
        document.getElementById("tri_img2").style.display = "none";
        document.getElementById("autolevel2").style.display = "none";
        document.getElementById("setup_autotri").style.display = "inline";
        
        swal("Click on LEVEL SETUP Button");
    }
    else
    if(document.getElementById("autolevel2").style.left === "126px" && document.getElementById("autolevel2").style.top === "-188px")
    {
        document.getElementById("level_setting").style.display = "inline";
        document.getElementById("tri_img2").style.display = "none";
        document.getElementById("autolevel2").style.display = "none";
        document.getElementById("setup_autotri").style.display = "inline";
        
      swal("Click on LEVEL SETUP Button");
    }
    else
    if(document.getElementById("autolevel2").style.left === "127px" && document.getElementById("autolevel2").style.top === "-190px")
    {
        document.getElementById("level_setting").style.display = "inline";
        document.getElementById("tri_img2").style.display = "none";
        document.getElementById("autolevel2").style.display = "none";
        document.getElementById("setup_autotri").style.display = "inline";
        
      swal("Click on LEVEL SETUP Button");
    }
    if(document.getElementById("autolevel2").style.left === "127px" && document.getElementById("autolevel2").style.top === "-189px")
    {
        document.getElementById("level_setting").style.display = "inline";
        document.getElementById("tri_img2").style.display = "none";
        document.getElementById("autolevel2").style.display = "none";
        document.getElementById("setup_autotri").style.display = "inline";
       
      swal("Click on LEVEL SETUP Button");
    }     objImage2.style.top= parseInt(objImage2.style.top) + 1 + "px";
        
    }
    var j=150;
    
    function left_rotate() {
       
        objImage4.style.transform="rotateZ(" + j + "deg)";
        objImage5.style.transform="rotateZ(" + j + "deg)";
        objImage6.style.left = parseInt(objImage6.style.left) - 1 + "px";
        j=j-1;
        if(document.getElementById("bluedot").style.left === "-1px" && document.getElementById("bluedot").style.top === "7px")
                {
                   
                        document.getElementById("setup").style.display = "none";
                        
                        document.getElementById("setup_dot").style.display = "inline";
                        document.getElementById("next_setting").style.display = "inline";
                        swal("Click on NEXt Button");
                }
    }
    var i=50;
    var a=-500;
    function right_rotate() {
     
        objImage4.style.transform="rotateZ(" + a + "deg)";
        objImage5.style.transform="rotateZ(" + a + "deg)";
        objImage6.style.left = parseInt(objImage6.style.left) + 1 + "px";
        i=i-1;
        a=a+1;
        if(document.getElementById("bluedot").style.left === "-1px" && document.getElementById("bluedot").style.top === "7px")
                {
                    document.getElementById("setup").style.display = "none";
                  
                    document.getElementById("setup_dot").style.display = "inline";  
                    document.getElementById("next_setting").style.display = "inline";
                    swal("Click on NEXt Button");
                }
    }
    function up_rotate() {
        
        objImage2.style.transform=" perspective(400px)scaleZ(2)rotateX(40deg)";
        
    }

    function setup()
    {   if(document.getElementById("setup").style.display === "none")
        {
            document.getElementById("setup").style.display = "inline";
            document.getElementById("cap").style.display = "inline";
            document.getElementById("level_setting").disabled=true;
        }
        else
        {
            document.getElementById("setup").style.display = "none";
            document.getElementById("cap").style.display = "none";
        }
    }
    var f=150;
    function up_dot(){
        objImage3.style.transform="rotateZ(" + f + "deg)";
        objImage6.style.top = parseInt(objImage6.style.top) - 1 + "px";
        f=f-1;
        if(document.getElementById("bluedot").style.left === "-1px" && document.getElementById("bluedot").style.top === "7px")
                {
                    document.getElementById("setup").style.display = "none";
                    document.getElementById("setup_dot").style.display = "inline";
                    document.getElementById("next_setting").style.display = "inline";
                    swal("Click on NEXt Button");
                }
    }
    g=-500;
    function down_dot(){
        objImage3.style.transform="rotateZ(" + a + "deg)";
        objImage6.style.top = parseInt(objImage6.style.top) + 1 + "px";
        a=a+1;
        if(document.getElementById("bluedot").style.left === "-1px" && document.getElementById("bluedot").style.top === "7px")
        {
                document.getElementById("setup").style.display = "none";
                document.getElementById("setup_dot").style.display = "inline";
                document.getElementById("next_setting").style.display = "inline";
                swal("Click on NEXt Button");
        }
    }
    window.onload = init;
  
    function msg1()
    {
 
        swal("Click on LEVEL SETUP Button");

    }
  function msg2()
    {

        swal("Click on NEXT Button");
        
    }
