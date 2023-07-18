//var media = matchMedia('screen and (max-width:991px)');
function Mobile(){return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);}

var agent = navigator.userAgent.toLowerCase(); //userAgent 값 얻기

console.log(Mobile());
if(Mobile() === true){

        

        document.querySelector('.gif-box-inner').style.background = `url('../asstes/img/test.gif') no-repeat center / cover`;

}
    

