"use strict";
//      header's text spiner
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


//   TIMER

const weddingDay = 'September 30 2023 11:00:00 GMT+04:00';

function getTimeRemaining(endtime) {
    let t = Date.parse(endtime) - Date.parse(new Date());
    let seconds = Math.floor((t / 1000) % 60);
    let minutes = Math.floor((t / 1000 / 60) % 60);
    let hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    let days = Math.floor(t / (1000 * 60 * 60 * 24));
    return {
        'total': t,
        'days': days,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds
    };
}

function initializeClock(selector, endtime) {
    let clock = document.querySelector(selector);
    let timeinterval = setInterval(function () {

        let t = getTimeRemaining(endtime);
        console.log(t);
        clock.innerHTML = `Дней: ${t.days} : часов: ${t.hours} : минут : ${t.minutes}`;
        if (t.total <= 0) {
            clearInterval(timeinterval);
        }
    }, 1000);
}

initializeClock('.second__timer', weddingDay);
