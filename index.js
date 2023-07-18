var media = matchMedia('screen and (max-width:991px)');

function Mobile(){return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);}

var agent = navigator.userAgent.toLowerCase();

if(Mobile()){
    if( agent.indexOf('android') > -1 ) {
        
    }else if( agent.indexOf("iphone") > -1 || agent.indexOf("ipad") > -1 || agent.indexOf("ipod") > -1 ) {
        if(media.matches){
            document.querySelector('.gif-box-inner').style.background = `url(../asstes/img/test.gif) no-repeat center / cover`;
        }
    }else{
        
    }
}
