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
            "number": 0, 
            "title": "Locked", 
            "purpose": "",
            "link": "#",
            "image": "http://noblemansion.online/assets/Lock.png",
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

function loadLessons() {
    let url = "http://noblemansion.online/data/lessons.json"
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            let lesson_dict = JSON.parse(this.responseText)
            for (let key in lesson_dict) {
                if (lesson_dict.hasOwnProperty(key))
                    data.push(lesson_dict[key])
            }

            populateLessons()
          
        }
    };

    xhttp.open("GET", url, true);
    xhttp.send();
}

loadLessons()