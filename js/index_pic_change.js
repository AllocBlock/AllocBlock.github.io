function ChangePics(num){
        	var cir_1 = document.getElementById("div_circle_1");
        	var cir_2 = document.getElementById("div_circle_2");
        	var cir_3 = document.getElementById("div_circle_3");
        	var pic = document.getElementById("roll_pics");
        	var hplink = document.getElementById("roll_pic_dlink");
        	pic.setAttribute("opacity", 0);
        	pic.setAttribute("transition", "opacity .1s linear 0s");
        	//设置按钮
        	cir_1.style.opacity = 0.5;
        	cir_2.style.opacity = 0.5;
        	cir_3.style.opacity = 0.5;
        	if(num == 1) cir_1.style.opacity = 1;
        	else if(num == 2) cir_2.style.opacity = 1;
        	else if(num == 3) cir_3.style.opacity = 1;
        	//改变图片
        	if(num == 1) pic.src = "images/index/anc_hammer.png";
        	else if(num == 2) pic.src = "images/index/anc_valve.png";
        	else if(num == 3) pic.src = "images/index/anc_halflife.png";
        	//改变超链接
        	if(num == 1) hplink.href = "pages/hammer_intro.html";
        	else if(num == 2) hplink.href = "pages/valve_intro.html";
        	else if(num == 3) hplink.href = "pages/halflife_intro.html";
        }