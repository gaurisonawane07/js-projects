const buttons = document.querySelectorAll('.color-button');
const body = document.querySelector('body');

buttons.forEach(function(button) {
    console.log(button);
    button.addEventListener('click', function(e) {
        console.log(e);
        console.log(e.target);
        const color = e.target.getAttribute('data-color');
        body.style.backgroundColor = color;
    });
});
