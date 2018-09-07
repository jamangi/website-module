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
    frame.className = 'on'
}

function emptyFrame() {
    let img = document.getElementById('img-frame-img');
    frame.className = 'off'
    frame.removeChild(img);
}

function sublimetext() {
    let dl = document.getElementById('download');
    let def = 'https://www.sublimetext.com/3';
    let win64 = 'https://download.sublimetext.com/Sublime%20Text%20Build%203176%20x64%20Setup.exe';
    let win32 = 'https://download.sublimetext.com/Sublime%20Text%20Build%203176%20Setup.exe';
    let osx = 'https://download.sublimetext.com/Sublime%20Text%20Build%203176.dmg';
    let href;
    switch (BrowserDetect.OS) {
        case "Windows":
            if (BrowserDetect.bit === 'x64') 
                 href = win64;
            else href = win32;
            break;
        case "Mac":
                href = osx;
            break;
        default:
                href = def;
            break;
    }
    dl.setAttribute('href', href);
}