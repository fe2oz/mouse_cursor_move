

const ios = document.querySelector('.gif-box.ios');
const iosEtc = document.querySelector('.gif-box.iosEtc');

var agent = navigator.userAgent.toLowerCase();

if( agent.indexOf('android') > -1 ) {
    ios.style.display = 'none';
    iosEtc.style.display = 'block';
}else if( agent.indexOf("iphone") > -1 || agent.indexOf("ipad") > -1 || agent.indexOf("ipod") > -1 ) {
    ios.style.display = 'block';
    iosEtc.style.display = 'none';
}else{
    
}