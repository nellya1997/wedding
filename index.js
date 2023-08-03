"use strict";

const headerSpiner = function () {
    const text = document.querySelector('.spin__text');

    text.innerHTML = text.textContent.replace(/\S/g, '<span>$&</span>');

    const letters = document.querySelectorAll('p.spin__text span');

    for (let i = 0; i < letters.length; i++) {
        letters[i].style.transform = "rotate(" + i * 15 + "deg)"
    }

    /*
    //очень интересно почему не получается преследование курсора
    document.addEventListener('mousemove', function (e) {
        text.style.left = e.clientX + 'px';
        text.style.top = e.clientY + 'px';
    
        console.log(e.clientX);
        console.log(e.clientY);
    });
    */
}

headerSpiner();