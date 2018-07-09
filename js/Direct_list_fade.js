window.onscroll= function(){
                var distance_to_top = document.documentElement.scrollTop || document.body.scrollTop; //距离顶部的距离
                var linklist;
                if(distance_to_top >= 100){
                    linklist = document.getElementById("list_normal");
                	if (linklist != null) linklist.setAttribute("id", "list_fixed");
                }
                else{
                	linklist = document.getElementById("list_fixed");
                	if (linklist != null) linklist.setAttribute("id", "list_normal")
                }
            }