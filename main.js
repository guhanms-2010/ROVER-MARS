canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
nasa_mars_image_array=["MARS 1.jpg","MARS 2.jpg","MARS 3.jpg", "MARS 4.jpg"];

random_number=Math.floor(Math.random()*4);




rover_width=100;
rover_height=90;
background_image=nasa_mars_image_array[random_number ];
rover_image="rover.png";
rover_x=10;
rover_y=10;
function add(){

    background_imgtag=new Image();
    background_imgtag.onload=uploadbackground;
    background_imgtag.src=background_image;

    //rover
    rover_imgtag=new Image();
   rover_imgtag.onload=uploadrover;
    rover_imgtag.src=rover_image;
}

function uploadbackground(){

ctx.drawImage(background_imgtag,0,0,canvas.width,canvas.height);


}
function uploadrover(){

    ctx.drawImage(rover_imgtag,rover_x,rover_y,rover_width,rover_height);
    
    
    }

    window.addEventListener("keydown",my_Keydown);
    function my_Keydown(e){
     keyPressed=e.keyCode;
     if(keyPressed=="38"){
         up();
     }
     if(keyPressed=="40"){
        down();
    }
    if(keyPressed=="37"){
       left();
    }
    if(keyPressed=="39"){
        right();
    }
    }

    function up(){
        if(rover_y>=0){
        rover_y=rover_y-10;
        console.log("when up arrow is presssssed x= " + rover_x+"y=");
        uploadbackground();
        uploadrover();

        }

    }
    function down(){
        if(rover_y<=500){
        rover_y=rover_y+10;
        console.log("when down arrow is presssssed x= " + rover_x+"y=");
        uploadbackground();
        uploadrover();

        }

    }
    function left(){
        if(rover_x>=0){
        rover_x=rover_x-10;
        console.log("when left arrow is presssssed x= " + rover_x+"y=");
        uploadbackground();
        uploadrover();

        }

    }
    function right(){
        if(rover_x<=700){
        rover_x=rover_x+10;
        console.log("when right arrow is presssssed x= " + rover_x+"y=");
        uploadbackground();
        uploadrover();

        }

    }