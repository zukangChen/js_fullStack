$(function(){
    setTimeout(()=>{
        $('.load').css('display','none');
        $('.global').css('display','block')
    },1000)

    function getCurrentPage(){
        var current = 0;
        var screenClassStr = $('.screen').attr('.class');
        if(screenClassStr.indexof('.screen_')<0){
            current = 0;

        }else if(screenClassStr.indexof('.screen_x90')>=0){
            current = 1;
        }else if(screenClassStr.indexof('.screen_x180')>=0){
            current = 2;
        }else if(screenClassStr.indexof('.screen_x270')>=0){
            current = 3;
        }
        return current;
    }
    var screen = document.querySelector('screen');
    var gestrus = new AlloyFinger(screen,{
        swiper:function(evt){
            var direction = evt.direction;
            var current = getCurrentPage();
            if(direction == 'Up'){
                switch (current){
                    case 0 :$('.btn1').click();break;
                    case 1 :$('.btn2').click();break;
                    case 2 :$('.btn3').click();break;
                    case 3 :$('.screen').attr('screen ease');break;
                    default:
                }
              
            }  else if(direction == 'Down'){

            }
        }
    })
})