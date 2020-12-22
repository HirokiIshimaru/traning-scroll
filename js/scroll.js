'use strict';

{
    window.addEventListener('scroll',()=>{
        
       let scroll = window.pageYOffset;
       let title = document.getElementById('title');
        let text = document.getElementsByTagName('p')[0];
        console.log('scroll');
       if (scroll>=300){
            title.style.backgroundColor="red";
       } else if(scroll>=200) {
            title.style.backgroundColor = "#222222";
            text.textContent="こんにちわ";
       } else {
            title.style.backgroundColor = "yellow";
            text.textContent="お腹すいた";
       }
    });
}