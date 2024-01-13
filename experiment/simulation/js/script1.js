var isstartedsimulation=false;
//instruction
const First = document.getElementById('First');
const close_btn = document.getElementById('close-btn');
const First_data = document.getElementById('First_Data');

First.addEventListener('click', () => {
    First_data.classList.toggle('visible')
});

close_btn.addEventListener('click', () => {
    First_data.classList.remove('visible')
});

  
    var left = document.getElementById("First_Data"); 
     left.style.display ="block";

//component
     const Second = document.getElementById('second');
     const Second_Data = document.getElementById('Second_Data')
     const btn_close = document.getElementById('btn_close');;

Second.addEventListener('click', () => {
 Second_Data.classList.toggle('visible')
});  

btn_close.addEventListener('click', () => {
 Second_Data.classList.remove('visible')
}); 
var left = document.getElementById("Second_Data"); 
left.style.display ="block";

// Components hide show code here
function breadboard() {
    var x = document.getElementById("board");
    x.style.visibility = "visible";

    var instance = new BoardController();

    instance.setJsPlumbInstance(jsPlumb);
    instance.initDefault();
    instance.setCircuitContainer('mid');

    //breadboard definition 
    {
        instance.addEndPoint('brown',4,1, 'board', 'row1', 'r1',  [0, 0, 0, -1, 55,   22], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row1', 'r2',  [0, 0, 0, -1, 68.5, 22], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row1', 'r4',  [0, 0, 0, -1, 95.5, 22], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row1', 'r5',  [0, 0, 0, -1, 109,  22], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row1', 'r3',  [0, 0, 0, -1, 82,   22], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row1', 'r9',  [0, 0, 0, -1, 176.5,22], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row1', 'r11', [0, 0, 0, -1, 217,  22], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row1', 'r8',  [0, 0, 0, -1, 163,  22], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row1', 'r6',  [0, 0, 0, -1, 136,  22], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row1', 'r10', [0, 0, 0, -1, 190,  22], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row1', 'r14', [0, 0, 0, -1, 257.5,22], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row1', 'r15', [0, 0, 0, -1, 271,  22], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row1', 'r7',  [0, 0, 0, -1, 149.5,22], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row1', 'r16', [0, 0, 0, -1, 298,  22], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row1', 'r12', [0, 0, 0, -1, 230.5,22], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row1', 'r19', [0, 0, 0, -1, 338.5,22], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row1', 'r20', [0, 0, 0, -1, 352,  22], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row1', 'r18', [0, 0, 0, -1, 325,  22], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row1', 'r21', [0, 0, 0, -1, 379,  22], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row1', 'r17', [0, 0, 0, -1, 311.5,22], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row1', 'r13', [0, 0, 0, -1, 244,  22], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row1', 'r22', [0, 0, 0, -1, 392.5,22], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row1', 'r23', [0, 0, 0, -1, 406,  22], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row1', 'r24', [0, 0, 0, -1, 419.5,22], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row1', 'r25', [0, 0, 0, -1, 433, 22], 'blue');

        instance.addEndPoint('brown',4,1, 'board', 'row2', 'r27', [0, 0, 0, 1, 68.5, 36], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row2', 'r26', [0, 0, 0, 1, 55, 36], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row2', 'r30', [0, 0, 0, 1, 109, 36], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row2', 'r28', [0, 0, 0, 1, 82, 36], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row2', 'r32', [0, 0, 0, 1, 149.5, 36], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row2', 'r31', [0, 0, 0, 1, 136, 36], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row2', 'r29', [0, 0, 0, 1, 95.5, 36], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row2', 'r35', [0, 0, 0, 1, 190, 36], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row2', 'r34', [0, 0, 0, 1, 176.5, 36], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row2', 'r36', [0, 0, 0, 1, 217, 36], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row2', 'r33', [0, 0, 0, 1, 163.5, 36], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row2', 'r37', [0, 0, 0, 1, 230.5, 36], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row2', 'r38', [0, 0, 0, 1, 244, 36], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row2', 'r39', [0, 0, 0, 1, 257.5, 36], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row2', 'r41', [0, 0, 0, 1, 298, 36], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row2', 'r40', [0, 0, 0, 1, 271, 36], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row2', 'r42', [0, 0, 0, 1, 311.5, 36], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row2', 'r43', [0, 0, 0, 1, 325, 36], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row2', 'r45', [0, 0, 0, 1, 352, 36], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row2', 'r44', [0, 0, 0, 1, 336.5, 36], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row2', 'r46', [0, 0, 0, 1, 379, 36], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row2', 'r47', [0, 0, 0, 1, 392.5, 36], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row2', 'r49', [0, 0, 0, 1, 419.5, 36], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row2', 'r50', [0, 0, 0, 1, 433, 36], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row2', 'r48', [0, 0, 0, 1, 406, 36], 'blue');



        instance.addEndPoint('brown',4,1, 'board', 'row3', 'r51', [0, 0, 0, -1, 474, 22], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row3', 'r52', [0, 0, 0, -1, 487.5, 22],'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row3', 'r55', [0, 0, 0, -1, 528, 22], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row3', 'r54', [0, 0, 0, -1, 514.5, 22],'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row3', 'r53', [0, 0, 0, -1, 501, 22], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row3', 'r56', [0, 0, 0, -1, 555, 22], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row3', 'r57', [0, 0, 0, -1, 568.5, 22],'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row3', 'r58', [0, 0, 0, -1, 582, 22], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row3', 'r59', [0, 0, 0, -1, 595.5, 22],'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row3', 'r61', [0, 0, 0, -1, 636, 22], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row3', 'r62', [0, 0, 0, -1, 649.5, 22],'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row3', 'r60', [0, 0, 0, -1, 609, 22], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row3', 'r63', [0, 0, 0, -1, 663, 22], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row3', 'r64', [0, 0, 0, -1, 676.5, 22],'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row3', 'r66', [0, 0, 0, -1, 717, 22], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row3', 'r67', [0, 0, 0, -1, 730.5, 22],'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row3', 'r65', [0, 0, 0, -1, 690, 22], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row3', 'r68', [0, 0, 0, -1, 744, 22], 'blue');
        instance.addEndPoint('brown',4, 1,'board', 'row3', 'r69', [0, 0, 0, -1, 757.5, 22],'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row3', 'r72', [0, 0, 0, -1, 811.5, 22],'blue');
        instance.addEndPoint('brown',4, 1,'board', 'row3', 'r71', [0, 0, 0, -1, 798, 22], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row3', 'r70', [0, 0, 0, -1, 771, 22], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row3', 'r73', [0, 0, 0, -1, 825, 22], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row3', 'r75', [0, 0, 0, -1, 852, 22], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row3', 'r74', [0, 0, 0, -1, 838.5, 22],'blue');

          instance.addEndPoint('brown',4,1, 'board', 'row4', 'r77', [0, 0, 0, 1, 487.5, 36], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row4', 'r78', [0, 0, 0, 1, 501, 36], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row4', 'r81', [0, 0, 0, 1, 555, 36], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row4', 'r76', [0, 0, 0, 0, 474, 36], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row4', 'r82', [0, 0, 0, 1, 568.5, 36], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row4', 'r79', [0, 0, 0, 1, 514.5, 36], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row4', 'r80', [0, 0, 0, 1, 528, 36], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row4', 'r84', [0, 0, 0, 1, 595.5, 36], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row4', 'r86', [0, 0, 0, 1, 636, 36], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row4', 'r85', [0, 0, 0, 1, 609, 36], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row4', 'r87', [0, 0, 0, 1, 649.5, 36], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row4', 'r89', [0, 0, 0, 1, 676.5, 36], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row4', 'r88', [0, 0, 0, 1, 663, 36], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row4', 'r91', [0, 0, 0, 1, 717, 36], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row4', 'r83', [0, 0, 0, 1, 582, 36], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row4', 'r90', [0, 0, 0, 1, 690, 36], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row4', 'r92', [0, 0, 0, 1, 730.5, 36], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row4', 'r96', [0, 0, 0, 1, 798, 36], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row4', 'r95', [0, 0, 0, 1, 771, 36], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row4', 'r94', [0, 0, 0, 1, 757.5, 36], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row4', 'r93', [0, 0, 0, 1, 744, 36], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row4', 'r97', [0, 0, 0, 1, 811.5, 36], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row4', 'r99', [0, 0, 0, 1, 836.5, 36], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row4', 'r98', [0, 0, 0, 1, 825, 36], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row4', 'r100', [0, 0, 0, 1, 852, 36], 'blue');


        instance.addEndPoint('brown',4,1, 'board', 'row5', 'r101', [0, 0, 0, -1, 55.5, 262], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row5', 'r102', [0, 0, 0, -1, 69, 262], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row5', 'r103', [0, 0, 0, -1, 82.5, 262], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row5', 'r104', [0, 0, 0, -1, 96, 262], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row5', 'r105', [0, 0, 0, -1, 109.5, 262], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row5', 'r106', [0, 0, 0, -1, 136.5, 262], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row5', 'r108', [0, 0, 0, -1, 163.5, 262], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row5', 'r110', [0, 0, 0, -1, 190.5, 262], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row5', 'r107', [0, 0, 0, -1, 150, 262], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row5', 'r109', [0, 0, 0, -1, 177, 262], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row5', 'r111', [0, 0, 0, -1, 217.5, 262], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row5', 'r112', [0, 0, 0, -1, 231, 262], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row5', 'r113', [0, 0, 0, -1, 244.5, 262], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row5', 'r115', [0, 0, 0, -1, 271.5, 262], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row5', 'r114', [0, 0, 0, -1, 258, 262], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row5', 'r117', [0, 0, 0, -1, 312, 262], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row5', 'r118', [0, 0, 0, -1, 325.5, 262],'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row5', 'r116', [0, 0, 0, -1, 298.5, 262], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row5', 'r119', [0, 0, 0, -1, 339, 262], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row5', 'r120', [0, 0, 0, -1, 352.5, 262], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row5', 'r121', [0, 0, 0, -1, 379.5, 262], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row5', 'r122', [0, 0, 0, -1, 393, 262], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row5', 'r124', [0, 0, 0, -1, 420, 262], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row5', 'r123', [0, 0, 0, -1, 406.5, 262], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row5', 'r125', [0, 0, 0, -1, 433.5, 262], 'blue');


        instance.addEndPoint('brown',4,1, 'board', 'row6', 'r127', [0, 0, 0, 1, 69, 278], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row6', 'r126', [0, 0, 0, 1, 55.5, 278], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row6', 'r129', [0, 0, 0, 1, 96, 278], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row6', 'r128', [0, 0, 0, 1, 82.5, 278], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row6', 'r130', [0, 0, 0, 1, 109.5, 278], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row6', 'r131', [0, 0, 0, 1, 136.5, 278], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row6', 'r132', [0, 0, 0, 1, 150, 278], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row6', 'r133', [0, 0, 0, 1, 163.5, 278], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row6', 'r134', [0, 0, 0, 1, 177, 278], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row6', 'r136', [0, 0, 0, 1, 217.5, 278], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row6', 'r135', [0, 0, 0, 1, 190.5, 278], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row6', 'r137', [0, 0, 0, 1, 231, 278], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row6', 'r138', [0, 0, 0, 1, 244.5, 278], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row6', 'r140', [0, 0, 0, 1, 271.5, 278], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row6', 'r142', [0, 0, 0, 1, 312, 278], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row6', 'r139', [0, 0, 0, 1, 258, 278], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row6', 'r141', [0, 0, 0, 1, 298.5, 278], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row6', 'r143', [0, 0, 0, 1, 325.5, 278], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row6', 'r145', [0, 0, 0, 1, 352.5, 278], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row6', 'r144', [0, 0, 0, 1, 339, 278], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row6', 'r147', [0, 0, 0, 1, 393, 278], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row6', 'r146', [0, 0, 0, 1, 379.5, 278], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row6', 'r148', [0, 0, 0, 1, 406.5, 278], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row6', 'r149', [0, 0, 0, 1, 420, 278], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row6', 'r150', [0, 0, 0, 1, 433.5, 278], 'blue');
 


        instance.addEndPoint('brown',4,1, 'board', 'row7', 'r151', [0, 0, 0, -1, 474, 262], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row7', 'r152', [0, 0, 0, -1, 487.5, 262], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row7', 'r155', [0, 0, 0, -1, 528, 262], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row7', 'r153', [0, 0, 0, -1, 501, 262], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row7', 'r157', [0, 0, 0, -1, 568.5, 262], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row7', 'r156', [0, 0, 0, -1, 555, 262], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row7', 'r154', [0, 0, 0, -1, 514.5, 262], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row7', 'r160', [0, 0, 0, -1, 609, 262], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row7', 'r162', [0, 0, 0, -1, 649.5, 262], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row7', 'r161', [0, 0, 0, -1, 636, 262], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row7', 'r159', [0, 0, 0, -1, 595.5, 262], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row7', 'r158', [0, 0, 0, -1, 582, 262], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row7', 'r163', [0, 0, 0, -1, 663, 262], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row7', 'r164', [0, 0, 0, -1, 676.5, 262], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row7', 'r165', [0, 0, 0, -1, 690, 262], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row7', 'r166', [0, 0, 0, -1, 717, 262], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row7', 'r168', [0, 0, 0, -1, 744, 262], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row7', 'r167', [0, 0, 0, -1, 730.5, 262], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row7', 'r169', [0, 0, 0, -1, 757.5, 262], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row7', 'r170', [0, 0, 0, -1, 771, 262], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row7', 'r171', [0, 0, 0, -1, 798, 262], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row7', 'r172', [0, 0, 0, -1, 811.5, 262], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row7', 'r174', [0, 0, 0, -1, 838.5, 262], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row7', 'r173', [0, 0, 0, -1, 825, 262], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row7', 'r175', [0, 0, 0, -1, 852, 262], 'blue');

        instance.addEndPoint('brown',4,1, 'board', 'row8', 'r176', [0, 0, 0, 0, 474, 278], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row8', 'r177', [0, 0, 0, -1, 487.5, 278], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row8', 'r180', [0, 0, 0, -1, 528, 278], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row8', 'r178', [0, 0, 0, -1, 501, 278], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row8', 'r182', [0, 0, 0, -1, 568.5, 278], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row8', 'r181', [0, 0, 0, -1, 555, 278], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row8', 'r179', [0, 0, 0, -1, 514.5, 278], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row8', 'r187', [0, 0, 0, -1, 649.5, 278], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row8', 'r183', [0, 0, 0, -1, 582, 278], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row8', 'r186', [0, 0, 0, -1, 636, 278], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row8', 'r185', [0, 0, 0, -1, 609, 278], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row8', 'r184', [0, 0, 0, -1, 595.5, 278], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row8', 'r188', [0, 0, 0, -1, 663, 278], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row8', 'r189', [0, 0, 0, -1, 676.5, 278], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row8', 'r191', [0, 0, 0, -1, 717, 278], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row8', 'r190', [0, 0, 0, -1, 690, 278], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row8', 'r192', [0, 0, 0, -1, 730.5, 278], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row8', 'r193', [0, 0, 0, -1, 744, 278], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row8', 'r194', [0, 0, 0, -1, 757.5, 278], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row8', 'r196', [0, 0, 0, -1, 798, 278], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row8', 'r195', [0, 0, 0, -1, 771, 278], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row8', 'r197', [0, 0, 0, -1, 811.5, 278], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row8', 'r198', [0, 0, 0, -1, 825, 278], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row8', 'r199', [0, 0, 0, -1, 838.5, 278], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row8', 'r200', [0, 0, 0, -1, 852, 278], 'blue');

        document.getElementById("checkbutton").disabled=false;
    }
}

function inputs() {
    var x = document.getElementById("inputs");
    x.style.visibility = "visible";

    var inputs = new BoardController();
    inputs.setJsPlumbInstance(jsPlumb);


    inputs.addEndPoint('red',6,1, 'inputs', 'input_A', 'input_A11', [0, 0, 0, 0, 597, -90], 'red');
    inputs.addEndPoint('red',6,1, 'inputs', 'input_B', 'input_B11', [0, 0, 0, 0, 657, -90], 'red');
}
function inputs1() {
    var x = document.getElementById("inputs1");
    x.style.visibility = "visible";

    var inputs = new BoardController();
    inputs.setJsPlumbInstance(jsPlumb);
 

    inputs.addEndPoint('red',6,1, 'inputs1', 'input_A1', 'input_A12', [0, 0, 0, 0, 337, -90], 'red');
    inputs.addEndPoint('red',6,1, 'inputs1', 'input_B1', 'input_B12', [0, 0, 0, 0, 397, -90], 'red');
}

function ic555() {
    var x = document.getElementById("ic555");
    x.style.visibility = "visible";

    var ic555 = new BoardController();
    ic555.setJsPlumbInstance(jsPlumb);
    ic555.setCircuitContainer('mid');

    {
       ic555.addEndPoint('green',4.2,1, 'ic555', 'ic555_8', 'ic555_81', [0, 0, 1, -1, 5, 0], 'red');
       ic555.addEndPoint('green',4.2,1, 'ic555', 'ic555_8', 'ic555_82', [0, 0, 1, -1, 5, 13.5], 'red');
       ic555.addEndPoint('green',4.2,1, 'ic555', 'ic555_8', 'ic555_83', [0, 0, 1, -1, 5, 27], 'red');
       ic555.addEndPoint('green',4.2,1, 'ic555', 'ic555_8', 'ic555_84', [0, 0, 1, -1, 5, 40.5], 'red');


       ic555.addEndPoint('green',4.2,1, 'ic555', 'ic555_7', 'ic555_71', [0, 0, 1, -1, 18.5, 0], 'red');
       ic555.addEndPoint('green',4.2,1, 'ic555', 'ic555_7', 'ic555_72', [0, 0, 1, -1, 18.5, 13.5], 'red');
       ic555.addEndPoint('green',4.2,1, 'ic555', 'ic555_7', 'ic555_73', [0, 0, 1, -1, 18.5, 27], 'red');
       ic555.addEndPoint('green',4.2, 1,'ic555', 'ic555_7', 'ic555_74', [0, 0, 1, -1, 18.5, 40.5], 'red');
 

       ic555.addEndPoint('green',4.2,1, 'ic555', 'ic555_6', 'ic555_61', [0, 0, 1, -1, 32, 0], 'red');
       ic555.addEndPoint('green',4.2,1, 'ic555', 'ic555_6', 'ic555_62', [0, 0, 1, -1, 32, 13.5], 'red');
       ic555.addEndPoint('green',4.2,1, 'ic555', 'ic555_6', 'ic555_63', [0, 0, 1, -1, 32, 27], 'red');
       ic555.addEndPoint('green',4.2,1, 'ic555', 'ic555_6', 'ic555_64', [0, 0, 1, -1, 32, 40.5], 'red');


       ic555.addEndPoint('green',4.2,1, 'ic555', 'ic555_5', 'ic555_51', [0, 0, 1, -1, 45.5, 0], 'red');
       ic555.addEndPoint('green',4.2,1, 'ic555', 'ic555_5', 'ic555_52', [0, 0, 1, -1, 45.5, 13.5], 'red');
       ic555.addEndPoint('green',4.2,1, 'ic555', 'ic555_5', 'ic555_53', [0, 0, 1, -1, 45.5, 27], 'red');
       ic555.addEndPoint('green',4.2,1, 'ic555', 'ic555_5', 'ic555_54', [0, 0, 1, -1, 45.5, 40.5], 'red');
 



       ic555.addEndPoint('green',4.2,1, 'ic555', 'ic555_1', 'ic555_11', [0, 0, 1, -1, 5, 107.5], 'red');
       ic555.addEndPoint('green',4.2,1, 'ic555', 'ic555_1', 'ic555_12', [0, 0, 1, -1, 5, 121], 'red');
       ic555.addEndPoint('green',4.2, 1,'ic555', 'ic555_1', 'ic555_13', [0, 0, 1, -1, 5, 134.5], 'red');
       ic555.addEndPoint('green',4.2,1, 'ic555', 'ic555_1', 'ic555_14', [0, 0, 1, -1, 5, 148], 'red');


       ic555.addEndPoint('green',4.2,1, 'ic555', 'ic555_2', 'ic555_21', [0, 0, 1, -1, 18.5, 107.5], 'red');
       ic555.addEndPoint('green',4.2,1, 'ic555', 'ic555_2', 'ic555_22', [0, 0, 1, -1, 18.5, 121], 'red');
       ic555.addEndPoint('green',4.2,1, 'ic555', 'ic555_2', 'ic555_23', [0, 0, 1, -1, 18.5, 134.5], 'red');
       ic555.addEndPoint('green',4.2,1, 'ic555', 'ic555_2', 'ic555_24', [0, 0, 1, -1, 18.5, 148], 'red');


       ic555.addEndPoint('green',4.2,1, 'ic555', 'ic555_3', 'ic555_31', [0, 0, 1, -1, 32, 107.5], 'red');
       ic555.addEndPoint('green',4.2,1, 'ic555', 'ic555_3', 'ic555_32', [0, 0, 1, -1, 32, 121], 'red');
       ic555.addEndPoint('green',4.2,1, 'ic555', 'ic555_3', 'ic555_33', [0, 0, 1, -1, 32, 134.5], 'red');
       ic555.addEndPoint('green',4.2,1, 'ic555', 'ic555_3', 'ic555_34', [0, 0, 1, -1, 32, 148], 'red');

       ic555.addEndPoint('green',4.2,1, 'ic555', 'ic555_4', 'ic555_41', [0, 0, 1, -1, 45.5, 107.5], 'red');
       ic555.addEndPoint('green',4.2,1, 'ic555', 'ic555_4', 'ic555_42', [0, 0, 1, -1, 45.5, 121], 'red');
       ic555.addEndPoint('green',4.2,1, 'ic555', 'ic555_4', 'ic555_43', [0, 0, 1, -1, 45.5, 134.5], 'red');
       ic555.addEndPoint('green',4.2,1, 'ic555', 'ic555_4', 'ic555_44', [0, 0, 1, -1, 45.5, 148], 'red');

  }
}



function supply() {
    var x = document.getElementById("supply");
    x.style.visibility = "visible";
    
    var supply = new BoardController();
    supply.setJsPlumbInstance(jsPlumb);
    supply.setCircuitContainer('mid');
   /* supply.makeDraggable('supply');
    draggable('supply', 'mid');*/

    supply.addEndPoint('red',9,1, 'supply', 'VCC', 'VCC', [0, 0, 0, 0, 51,    55], 'blue');
    supply.addEndPoint('black',9,1, 'supply', 'GND', 'GND', [0, 0, 0, 0, 106.5, 55], 'red');
}

function led2() {
    var x = document.getElementById("led1");
    x.style.visibility = "visible";
    var led = new BoardController();
    led.setJsPlumbInstance(jsPlumb);
    led.setCircuitContainer('mid');
    //led.makeDraggable('led1');
    //draggable('led1', 'mid');

  //  led.addEndPoint('green',4.2,1, 'led1', 'led_C1', 'led_C101', [0, 0, 0, 1, 3, 62], 'red');
   led.addEndPoint('green',4.2,1, 'led1', 'led_A1', 'led_A102', [0, 0, 1, -1, 41, 98], 'red');
   led.addEndPoint('green',4.2,1, 'led1', 'led_A1', 'led_A103', [0, 0, 1, -1, 41, 112.5], 'red');
   led.addEndPoint('green',4.2,1, 'led1', 'led_A1', 'led_A104', [0, 0, 1, -1, 41, 126], 'red');
   led.addEndPoint('green',4.2,1, 'led1', 'led_A1', 'led_A105', [0, 0, 1, -1, 41, 139.5], 'red');
    //led.addEndPoint('green',4.2,1, 'led1', 'led_A1', 'led_A101', [0, 0, 0, 1, 16.5, 62], 'red');
   led.addEndPoint('green',4.2,1, 'led1', 'led_C1', 'led_C102', [0, 0, 1, -1, 55.5, 98], 'red');
   led.addEndPoint('green',4.2,1, 'led1', 'led_C1', 'led_C103', [0, 0, 1, -1, 55.5, 112.5], 'red');
   led.addEndPoint('green',4.2,1, 'led1', 'led_C1', 'led_C104', [0, 0, 1, -1, 55.5, 126], 'red');
   led.addEndPoint('green',4.2,1, 'led1', 'led_C1', 'led_C105', [0, 0, 1, -1, 55.5, 139.5], 'red');
}

function capacitor() {
    var x = document.getElementById("cap");
    x.style.visibility = "visible";
    var cap = new BoardController();
    cap.setJsPlumbInstance(jsPlumb);
    cap.setCircuitContainer('mid');
   // cap.makeDraggable('cap');
    //draggable('cap', 'mid');

  //  led.addEndPoint('green',4.2,1, 'led1', 'led_C1', 'led_C101', [0, 0, 0, 1, 3, 62], 'red');
    cap.addEndPoint('green',4.2,1, 'cap', 'cap_C1', 'cap_C101', [0, 0, 1, -1, 27, 80], 'red');
    cap.addEndPoint('green',4.2,1, 'cap', 'cap_C1', 'cap_C102', [0, 0, 1, -1, 27, 94], 'red');
    cap.addEndPoint('green',4.2,1, 'cap', 'cap_C1', 'cap_C103', [0, 0, 1, -1, 27, 108], 'red');
    cap.addEndPoint('green',4.2,1, 'cap', 'cap_C1', 'cap_C104', [0, 0, 1, -1, 27, 120], 'red');

    cap.addEndPoint('green',4.2,1, 'cap', 'cap_A1', 'cap_A101', [0, 0, 1, -1, 0.5, 80], 'red');
    cap.addEndPoint('green',4.2,1, 'cap', 'cap_A1', 'cap_A102', [0, 0, 1, -1, 0.5, 94], 'red');
    cap.addEndPoint('green',4.2,1, 'cap', 'cap_A1', 'cap_A103', [0, 0, 1, -1, 0.5, 108], 'red');
    cap.addEndPoint('green',4.2,1, 'cap', 'cap_A1', 'cap_A104', [0, 0, 1, -1, 0.5, 120], 'red');
}

function resistor3() {
    var x = document.getElementById("resistance3");
    x.style.visibility = "visible";
    var resistance3= new BoardController();
    resistance3.setJsPlumbInstance(jsPlumb);
    resistance3.setCircuitContainer('mid');
    //resistance3.makeDraggable('resistance3');
    //draggable('resistance3', 'mid');

  //  led.addEndPoint('green',4.2,1, 'led1', 'led_C1', 'led_C101', [0, 0, 0, 1, 3, 62], 'red');
    resistance3.addEndPoint('green',4.2,1, 'resistance3', 'resistance3_C1', 'resistance3_C101', [0, 0, 1, -1, 4, -12], 'red');
    resistance3.addEndPoint('green',4.2,1, 'resistance3', 'resistance3_C1', 'resistance3_C102', [0, 0, 1, -1, 4, -26], 'red');
    resistance3.addEndPoint('green',4.2,1, 'resistance3', 'resistance3_C1', 'resistance3_C103', [0, 0, 1, -1, 4, -40], 'red');
    resistance3.addEndPoint('green',4.2,1, 'resistance3', 'resistance3_C1', 'resistance3_C104', [0, 0, 1, -1, 4, -54], 'red');

    resistance3.addEndPoint('green',4.2,1, 'resistance3', 'resistance3_A1', 'resistance3_A101', [0, 0, 1, -1, 4, 54], 'red');
    resistance3.addEndPoint('green',4.2,1, 'resistance3', 'resistance3_A1', 'resistance3_A102', [0, 0, 1, -1, 4, 67], 'red');
    resistance3.addEndPoint('green',4.2,1, 'resistance3', 'resistance3_A1', 'resistance3_A103', [0, 0, 1, -1, 4, 80], 'red');
    resistance3.addEndPoint('green',4.2,1, 'resistance3', 'resistance3_A1', 'resistance3_A104', [0, 0, 1, -1, 4, 93], 'red');

}
function resistor4() {
    var x = document.getElementById("resistance4");
    x.style.visibility = "visible";
    var resistance4= new BoardController();
    resistance4.setJsPlumbInstance(jsPlumb);
    resistance4.setCircuitContainer('mid');
    //resistance4.makeDraggable('resistance4');
    //draggable('resistance4', 'mid');

  //  led.addEndPoint('green',4.2,1, 'led1', 'led_C1', 'led_C101', [0, 0, 0, 1, 3, 62], 'red');
    resistance4.addEndPoint('green',4.2,1, 'resistance4', 'resistance4_C1', 'resistance4_C101', [0, 0, 1, -1, 4, -12], 'red');
    resistance4.addEndPoint('green',4.2,1, 'resistance4', 'resistance4_C1', 'resistance4_C102', [0, 0, 1, -1, 4, -26], 'red');
    resistance4.addEndPoint('green',4.2,1, 'resistance4', 'resistance4_C1', 'resistance4_C103', [0, 0, 1, -1, 4, -40], 'red');
    resistance4.addEndPoint('green',4.2,1, 'resistance4', 'resistance4_C1', 'resistance4_C104', [0, 0, 1, -1, 4, -54], 'red');

    resistance4.addEndPoint('green',4.2,1, 'resistance4', 'resistance4_A1', 'resistance4_A101', [0, 0, 1, -1, 4, 54], 'red');
    resistance4.addEndPoint('green',4.2,1, 'resistance4', 'resistance4_A1', 'resistance4_A102', [0, 0, 1, -1, 4, 67], 'red');
    resistance4.addEndPoint('green',4.2,1, 'resistance4', 'resistance4_A1', 'resistance4_A103', [0, 0, 1, -1, 4, 80], 'red');
    resistance4.addEndPoint('green',4.2,1, 'resistance4', 'resistance4_A1', 'resistance4_A104', [0, 0, 1, -1, 4, 93], 'red');

}
function resistor5() {
    var x = document.getElementById("resistance5");
    x.style.visibility = "visible";
    var resistance5= new BoardController();
    resistance5.setJsPlumbInstance(jsPlumb);
    resistance5.setCircuitContainer('mid');
    //resistance5.makeDraggable('resistance5');
   // draggable('resistance5', 'mid');

  //  led.addEndPoint('green',4.2,1, 'led1', 'led_C1', 'led_C101', [0, 0, 0, 1, 3, 62], 'red');
    resistance5.addEndPoint('green',4.2,1, 'resistance5', 'resistance5_C1', 'resistance5_C102', [0, 0, 1, -1, 4, -12], 'red');
    resistance5.addEndPoint('green',4.2,1, 'resistance5', 'resistance5_C1', 'resistance5_C102', [0, 0, 1, -1, 4, -26], 'red');
    resistance5.addEndPoint('green',4.2,1, 'resistance5', 'resistance5_C1', 'resistance5_C102', [0, 0, 1, -1, 4, -40], 'red');
    resistance5.addEndPoint('green',4.2,1, 'resistance5', 'resistance5_C1', 'resistance5_C102', [0, 0, 1, -1, 4, -54], 'red');

    resistance5.addEndPoint('green',4.2,1, 'resistance5', 'resistance5_A1', 'resistance5_A102', [0, 0, 1, -1, 4, 54], 'red');
    resistance5.addEndPoint('green',4.2,1, 'resistance5', 'resistance5_A1', 'resistance5_A102', [0, 0, 1, -1, 4, 67], 'red');
    resistance5.addEndPoint('green',4.2,1, 'resistance5', 'resistance5_A1', 'resistance5_A102', [0, 0, 1, -1, 4, 80], 'red');
    resistance5.addEndPoint('green',4.2,1, 'resistance5', 'resistance5_A1', 'resistance5_A102', [0, 0, 1, -1, 4, 94], 'red');

}

function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it



         function change()                               //function for IMAGE OF A CHANGE ON CLCIKING ON IMAGE//
           {
          var img=document.getElementById("switch1").src;
            if(img.indexOf('toggleoff1')!= -1)
            {
                document.getElementById("switch1").src="images/toggleon.png";
                document.getElementById("cell2").style="background-color: yellow;text-align:center;font-weight: bolder; color:black";
                document.getElementById("cell1").style="background-color: white;text-align:center;font-weight: bolder; color:red";

            }
         if(isstartedsimulation){
              afterSimulation();
            } 
             }
            function change1(){
            var img1=document.getElementById("switch2").src;
            if(img1.indexOf('toggleoff1')!= -1)
            {
                document.getElementById("switch2").src="images/toggleon.png";
                 document.getElementById("cell1").style="background-color: yellow;text-align:center;font-weight: bolder; color:black";
         document.getElementById("cell2").style="background-color: white;text-align:center;font-weight: bolder; color:red";

            }
                
             if(isstartedsimulation){
              afterSimulation();
             } 
           }
           function change2()
           {
          
                document.getElementById("switch1").src="images/toggleoff1.png";
                document.getElementById("switch2").src="images/toggleoff1.png";
         document.getElementById("cell2").style="background-color: white;text-align:center;font-weight: bolder; color:red";
         document.getElementById("cell1").style="background-color: white;text-align:center;font-weight: bolder; color:red";



             }           
           function afterSimulation()
          {
 
        var img1=document.getElementById("switch1").src;
        var img2=document.getElementById("switch2").src;


      if (img1.indexOf('toggleon')!= -1 && img2.indexOf('toggleoff1')!= -1){
           
        document.getElementById("led3").src="images/led1.png";

       if(img1.indexOf('toggleoff1')!= -1&&img2.indexOf('toggleoff1')!= -1){
    document.getElementById("led3").src="images/led1.png";
        
      }
      }
      else if(img1.indexOf('toggleoff1')!= -1 && img2.indexOf('toggleon')!= -1){
    document.getElementById("led3").src="images/led.png";
           
     if(img1.indexOf('toggleoff1')!= -1&&img2.indexOf('toggleoff1')!= -1){
    document.getElementById("led3").src="images/led.png";
        
      }
      }
      }

 function start_simulation()
        { 
          isstartedsimulation = true;
          document.getElementById("switch1").onclick = function() {change()};
    //     document.getElementById("switch2").onclick = function() {change1()};
      
          document.getElementById("led2").src="images/led1.png";
           document.getElementById("led3").src="images/led.png";
               

         }

         
    window.onload = function() {
    var reloading = sessionStorage.getItem("reloading");
    if (reloading) {
        sessionStorage.removeItem("reloading");
       document.getElementById("cell1").value="0";
document.getElementById("cell2").value="1";

document.getElementById("startbutton").disabled=true;

document.getElementById("second").disabled=false;
document.getElementById("second").style.cursor="pointer"; 

  //document.getElementById("switch1").onclick=function(){change3()};

                        document.getElementById("checkbutton").disabled=false;
                          
                        //document.getElementById("resetbutton").disabled=false;
 
  document.getElementById("led3").src="images/led.png";
       breadboard();
       inputs();
       inputs1();

       ic555();
      led2();
      capacitor();
      
       supply();
       resistor3();
       
       resistor4();
       resistor5();
    }
}

function resetCircuit() {
    if(confirm("Do you want to reset?")){
        
    sessionStorage.setItem("reloading", "true");
    document.location.reload();
}
}
       
	
       function reset1()                    //RESET ALL THE VALUES FILLED IN TABLE//
          {
                alert("Do you want to reset the table?");
                  
                document.getElementById("cell2").value='';

               document.getElementById("cell1").value='';
    
         }



        function check1()                     //CHECK IF THE TABLE FILLED IS RIGHT OR NOT//
            {
               var a=document.getElementById("cell1").value;
               
                var b=document.getElementById("cell2").value;
              
        if(a=="0" && b=="1")
         {
         	alert("Right data. Now proceed to simulation.");
           document.getElementById("second").disabled=false;
           document.getElementById("second").style.cursor="pointer";  
         }
         else if(a=="" && b==""  )
         {
         	alert("Please fill the truth table.");
         }
          else if(a=="" || b==""  )
         {
          alert("Please fill the truth table completely.");
         }
         else
         {
         	alert("Wrong data.Please fill it again.");
         }
                     
                }
                