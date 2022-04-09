
var last_position_of_x, last_position_of_y;

    canvas = document.getElementById('myCanvas');
    ctx = canvas.getContext('2d');
    ctx.beginPath();
    ctx.strokeStyle="black";
    ctx.lineWidth=4;
    ctx.rect(150,143,430,200);
    ctx.stroke();

    ctx.beginPath();
    ctx.strokeStyle="blue";
    ctx.lineWidth=5;
    ctx.arc(250,210,40,0,2*Math.PI);
    ctx.stroke();

    
    ctx.beginPath();
    ctx.strokeStyle="black";
    ctx.lineWidth=5;
    ctx.arc(350,210,40,0,2*Math.PI);
    ctx.stroke();

    ctx.beginPath();
    ctx.strokeStyle="red";
    ctx.lineWidth=5;
    ctx.arc(450,210,40,0,2*Math.PI);
    ctx.stroke();

    ctx.beginPath();
    ctx.strokeStyle="yellow";
    ctx.lineWidth=5;
    ctx.arc(300,250,40,0,2*Math.PI);
    ctx.stroke();

    ctx.beginPath();
    ctx.strokeStyle="green";
    ctx.lineWidth=5;
    ctx.arc(400,250,40,0,2*Math.PI);
    ctx.stroke();


    
    

    canvas.addEventListener("touchstart", my_touchstart);
    
    function my_touchstart(e)
    {
        
        
        console.log("have_been_touch");
        
     last_position_of_x=e.touches[0].clientX-canvas.offsetLeft;   
     last_position_of_y=e.touches[0].clientY-canvas.offsetTop;


        
    }

    

   

    canvas.addEventListener("touchmove", my_touchmove);
    function my_touchmove(e)
    {
console.log("touchmove");
         current_position_of_touches_x= e.touches[0].clientX - canvas.offsetLeft;
         current_position_of_touches_y = e.touches[0].clientY - canvas.offsetTop;

        
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;
        

        console.log("Last position of x and y coordinates = ");
        console.log("x = " + last_position_of_x + "y = " + last_position_of_y);
        ctx.moveTo(last_position_of_x, last_position_of_y);

        console.log("Current position of x and y coordinates = ");
        console.log("x  = " + current_position_of_touches_x + "y = " + current_position_of_touches_y);
        ctx.lineTo(current_position_of_touches_x, current_position_of_touches_y);
        ctx.stroke();
        

        last_position_of_x = current_position_of_touches_x; 
        last_position_of_y = current_position_of_touches_y;
    }
    function clearArea(){
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
    }

