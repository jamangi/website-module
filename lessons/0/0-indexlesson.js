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

function toggleDemo() {
    let button = document.getElementById('js')
    button.addEventListener('click', function() {
        let img = document.getElementById('img-frame-img')
        let src = img.getAttribute('src')
        let srcArray = src.split('.')
        let suffix = srcArray.pop()
        let nosuffix = src.replace('.'+suffix, '')

        if (suffix === 'gif'){
            img.setAttribute('src', nosuffix + '.png')
            pause()
        }
        else{
            img.setAttribute('src', nosuffix + '.gif')
            unpause()
        }
    })
}

function pause() {
    let animations = document.getElementsByClassName('ani')
    for (let ele of animations) 
        ele.className = 'ball ani paused'
}

function unpause() {
    let animations = document.getElementsByClassName('ani')
    for (let ele of animations) 
        ele.className = 'ball ani'
}


sublimetext();
git();
toggleDemo();