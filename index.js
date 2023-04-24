var cursor = document.querySelectorAll('.cursor');
var section = document.querySelectorAll('.section');

for(var i=0; i<section.length; i++){
    section[i].addEventListener('mouseover', function(){
        var item = this;
        for(var i=0; i<section.length; i++){
            if(item != section[i]){
                cursor[i].classList.remove('test');
            }else if(item.classList.contains('test') === true){
                cursor[i].classList.remove('test');
            }else{
                cursor[i].classList.add('test');
            }
        }
    });
    section[i].addEventListener('mouseout', function(){
        for(var i=0; i<cursor.length; i++){
            cursor[i].classList.remove('test');
        }
    });
}

window.addEventListener('mousemove', function(e){
    var this_cursor = document.querySelector('.test');
    
    this_cursor.style.left = `${e.clientX}px`;
    this_cursor.style.top = `${e.clientY}px`;
})
