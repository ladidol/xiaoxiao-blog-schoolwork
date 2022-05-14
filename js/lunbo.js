window.onload = function(){
    var current_index = 0 ;
    var pic_div = document.getElementById("banner_pic").getElementsByTagName("div");
    var timer = window.setInterval(change,2780);


    function change(){
        ++current_index;
        for(var i = 0 ; i < pic_div.length ; i++ ){
            if(i == current_index){
                pic_div[i].className="current";
            }else{
                pic_div[i].className="pic";
            }
            //重头再来
            if(current_index==pic_div.length){
                current_index=0;
                i=-1;
            }
        }
    }
}

