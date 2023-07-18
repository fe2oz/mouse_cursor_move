

const ios = document.querySelector('.gif-box.ios');

var agent = navigator.userAgent.toLowerCase();

if( agent.indexOf('android') > -1 ) {
    ios.style.display = 'none';
}else if( agent.indexOf("iphone") > -1 || agent.indexOf("ipad") > -1 || agent.indexOf("ipod") > -1 ) {
    ios.style.display = 'block';
}else{
    ios.style.display = 'none';
}