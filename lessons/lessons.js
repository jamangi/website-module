let data = []

function sort() {
    data.sort(function(a, b){
        let num1 = a.number, num2 = b.number
        if (num1 === 0)
            return 1
        if (num2 === 0)
            return -1

        if (num1 < num2)
            return -1
        if (num1 > num2)
            return 1
        return 0
    })
}

function dummydata(){
    let start = data.length
    let finish = 10

    for (start; start < finish; start++)
        data.push({
            "number": "locked", 
            "title": "", 
            "purpose": "",
            "link": "#",
            "image": "https://noblemansion.online/assets/Lock.png",
            })
}

function populateLessons() {
    let lessons = document.getElementById("lessons")

    dummydata()
    sort()

    for (let lesson of data){
        let a = document.createElement('a')
        let div = document.createElement('div')
        let img = document.createElement('img')

        div.append(img)
        a.append(div)
        lessons.append(a)

        
        a.setAttribute("href", lesson.link)
        div.setAttribute("class", "lesson")
        div.setAttribute("data-number", lesson.number)
        div.setAttribute("data-title", lesson.title)
        div.setAttribute("data-purpose", lesson.purpose)
        div.setAttribute("data-image", lesson.image)
        div.setAttribute("data-link", lesson.link)
        img.setAttribute("src", lesson.image)

    }
}

function activateLessonSelect() {
    let lessons = document.getElementsByClassName("lesson")
    for (let lesson of lessons){
        lesson.addEventListener("mouseenter", populateLessonSelect)
        lesson.addEventListener("mouseleave", emptyLessonSelect)
    }
}

function populateLessonSelect() {
    let number = document.getElementById("lesson-number")
    let title = document.getElementById("lesson-title")
    let purpose = document.getElementById("lesson-purpose")

    number.innerHTML = "Lesson " + this.getAttribute("data-number")
    title.innerHTML = this.getAttribute("data-title")
    purpose.innerHTML = this.getAttribute("data-purpose")
}

function emptyLessonSelect() {
    let number = document.getElementById("lesson-number")
    let title = document.getElementById("lesson-title")
    let purpose = document.getElementById("lesson-purpose")

    number.innerHTML = ""
    title.innerHTML = ""
    purpose.innerHTML = ""
}

function loadLessons() {
    let url = "https://noblemansion.online/data/lessons.json"
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            let lesson_dict = JSON.parse(this.responseText)
            for (let key in lesson_dict) {
                if (lesson_dict.hasOwnProperty(key))
                    data.push(lesson_dict[key])
            }

            populateLessons()
            activateLessonSelect()
          
        }
    };

    xhttp.open("GET", url, true);
    xhttp.send();
}

loadLessons()
