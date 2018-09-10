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

function download(name, anchorID, defaultLink, win64, win32, mac) {
    let dl = document.getElementById(anchorID);
    let def = defaultLink;
    let win64 = win64;
    let win32 = win32;
    let osx = mac;
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

function sublimetext() {
    let dl = document.getElementById('downloadSublime');
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

function git() {
    let dl = document.getElementById('downloadGit');
    let def = 'https://git-scm.com/downloads';
    let win64 = 'https://git-scm.com/download/win';
    let win32 = 'https://git-scm.com/download/win';
    let osx = 'https://git-scm.com/download/mac';
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

sublimetext();
git();