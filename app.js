let element = document.getElementById('autoText');
let element2 = document.getElementById('autoText2');
let element3 = document.getElementById('autoText3');

let text = 'Computer Science Student';
let text2 = 'Aspiring Front End Developer';
let text3 = 'Passionate About Coding';

function typingEffect(element, text, i = 0) {
    if (i === 0) {
        element.textContent = '';
    }
    element.textContent += text[i]
    if (i === text.length - 1) {
        return;
    }
    setTimeout(() => typingEffect(element, text, i + 1), 100);
}
function time() {
    setTimeout(() => typingEffect(element, text), 0);

    setTimeout(() => typingEffect(element2, text2), 2700);

    setTimeout(() => typingEffect(element3, text3), 6000);
}
time();
