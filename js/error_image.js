function drawErrorImage(ctx){
	var index = 0;
	if(typeof(g_timer1) == "undefined"){
//		console.log('^^^^^');
	} else {
		window.clearInterval(g_timer1);
	}
	//Create a timer
	g_timer1 = setInterval(renderLoop, 4);
	
	function renderLoop() {
	    if (index > 426) {
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
	    if(x<60){
	    	ctx.fillStyle = "white";
	        ctx.fillRect(0, 0, 164, 142); 
	        var img=new Image();
	        img.src="./image/error_symbol2.png";
	        
	        ctx.drawImage(img, 62, 36, 70, 71);
	        
	        ctx.fillStyle = "white";
	    	ctx.fillRect(70, 40+x, 120, 125-x); 
	    } else {
	    	// Create a white background
	        ctx.fillStyle = "white";
	        ctx.fillRect(0, 0, 164, 142); 
	    	if(x<125){
	    		img=new Image();
	    		img.src="./image/error_symbol1.png";
	            ctx.drawImage(img, 67, 36, 68, 63);
	        	ctx.fillStyle = "white";
	        	ctx.fillRect(70, 40+x-63, 120, 125-x); 
	        	
	    		img.src="./image/error_symbol2.png";
	    		ctx.drawImage(img, 62, 36, 70, 71);
	    	} else {
	            ctx.lineWidth = 56;
	            x=(x-125)/150;
	        	if(x<=1){
	        		img=new Image();
	                img.src="./image/error_symbol3.png";
	                ctx.drawImage(img, 0, 0, 164, 142); 
	        		ctx.beginPath();
	        		ctx.strokeStyle = "white";
	        		ctx.arc(94, 66, 60, Math.PI*2-Math.PI*0.1, Math.PI-Math.PI*0.1, true);
	        		ctx.stroke();
	        		ctx.beginPath();
	        		ctx.strokeStyle = "white";
	        		ctx.arc(94, 66, 60, -Math.PI*0.1, (1-x)*Math.PI-Math.PI*0.1, false);
	        		ctx.stroke();
	        		img.src="./image/error_symbol1.png";
	        		ctx.drawImage(img, 67, 36, 68, 63);
	                img.src="./image/error_symbol2.png";
	                ctx.drawImage(img, 62, 36, 70, 71);
	        	} else {
	        		img=new Image();
	                img.src="./image/error_symbol3.png";
	                ctx.drawImage(img, 0, 0, 164, 142); 
	        		ctx.beginPath();
	        		ctx.strokeStyle = "white";
	        		ctx.arc(94, 66, 60, Math.PI*(3-x)-Math.PI*0.1, Math.PI-Math.PI*0.1, true);
	        		ctx.stroke();
	        		img.src="./image/error_symbol1.png";
	        		ctx.drawImage(img, 67, 36, 68, 63);
	                img.src="./image/error_symbol2.png";
	                ctx.drawImage(img, 62, 36, 70, 71);
	        	}
	    	}
	    }
	}
	
}

