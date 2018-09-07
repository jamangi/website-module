let lesson_num = 1;
let frame = document.getElementById('img-frame');

let instructions = document.getElementsByClassName('instruction-text');
for (let instruct of instructions) {
    instruct.addEventListener('mouseenter', populateFrame);
    instruct.addEventListener('mouseleave', emptyFrame);
}

function populateFrame() {
    let img = document.createElement('img');
    img.setAttribute('src', this.getAttribute('data-img'));
    img.setAttribute('id', 'img-frame-img');
    frame.append(img);
}

function emptyFrame() {
    let img = document.getElementById('img-frame-img');
    frame.removeChild(img);
}