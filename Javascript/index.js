const main = document.querySelector('.main');
const navication = document.querySelector('.navication');
const togle = document.querySelector('.togle');

togle.onclick = function(){
    main.classList.toggle('active');
    navication.classList.toggle('active');
}