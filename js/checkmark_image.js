function drawCheckmarkImage(ctx){
	var index = 0;
	if(typeof(g_timer1) == "undefined"){
//		console.log('^^^^^');
	} else {
		window.clearInterval(g_timer1);
	}
	//Create a timer
	g_timer1 = setInterval(renderLoop, 7);
	
	function renderLoop() {
	    if (index > 370) {
	    	ctx.fillStyle = "white";
	        ctx.fillRect(0, 0, 164, 142); 
	    	window.clearInterval(g_timer1);
	    	index = 0;
	    } else {
	    	index += 3;
		    draw(index);
	    }
	}

	function draw(x) {
		if(x<70){
	        var img=new Image();
	        img.src="./image/checkmark2.png";
	    	ctx.fillStyle = "white";
	        ctx.fillRect(0, 0, 167, 144); 
	        ctx.drawImage(img, 52, 16, 90, 92);
	        ctx.fillStyle = "white";
	    	ctx.fillRect(70+x, 10, 70-x, 100);
		} else {
            ctx.lineWidth = 80;
            x=(x-70)/150;
        	if(x<=1){
        		img=new Image();
                img.src="./image/checkmark1.png";
                ctx.drawImage(img, 0, 0, 167, 144); 
        		ctx.beginPath();
        		ctx.strokeStyle = "white";
        		ctx.arc(94, 66, 60, Math.PI*2-Math.PI*0.1, Math.PI-Math.PI*0.1, true);
        		ctx.stroke();
        		ctx.beginPath();
        		ctx.strokeStyle = "white";
        		ctx.arc(94, 66, 60, -Math.PI*0.1, (1-x)*Math.PI-Math.PI*0.1, false);
        		ctx.stroke();
        		img.src="./image/checkmark2.png";
        		ctx.drawImage(img, 52, 16, 90, 92);
        	} else {
        		img=new Image();
                img.src="./image/checkmark1.png";
                ctx.drawImage(img, 0, 0, 167, 144); 
        		ctx.beginPath();
        		ctx.strokeStyle = "white";
        		ctx.arc(96, 67, 60, Math.PI*(3-x)-Math.PI*0.1, Math.PI-Math.PI*0.1, true);
        		ctx.stroke();
        		img.src="./image/checkmark2.png";
        		ctx.drawImage(img, 52, 16, 90, 92);
        	}
		}
	}
}

