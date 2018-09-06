let lesson = {
    number: '',
    title: '',
    purpose: ''
};

function fetchLesson() {
    let url = "https://noblemansion.online/api/lessons/" + lesson_num;
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            lesson = JSON.parse(this.responseText)

            populateLessonSelect();
          
        }
    };

    xhttp.open("GET", url, true);
    xhttp.send();
}

function populateLessonSelect() {
    let number = document.getElementById("lesson-number");
    let title = document.getElementById("lesson-title");
    let purpose = document.getElementById("lesson-purpose");

    number.innerHTML = "Lesson " + lesson.number;
    title.innerHTML = lesson.title;
    purpose.innerHTML = lesson.purpose;
}

fetchLesson();