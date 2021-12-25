
// Create request
let xmlhttp = new XMLHttpRequest();
xmlhttp.open("GET", "https://yesno.wtf/api/", true);

// Send request
xmlhttp.send();

xmlhttp.onreadystatechange = function () {
    if(xmlhttp.readyState === 4 && xmlhttp.status === 200) {
        let answerObj = JSON.parse(xmlhttp.response);
        let img = document.createElement("img");
        img.setAttribute("src", answerObj.image);
        document.querySelector(".answer").append(img);
    }
}

function get_joke_of_the_day() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        let joke = JSON.parse(xhttp.response)
	    if (this.readyState == 4 && this.status == 200) {
	     // Access the result here
	     document.querySelector(".joke").innerHTML = joke.contents.jokes[0].joke.text + "<br><br>&copy;" + joke.contents.copyright;
	 }
    };
    xhttp.open("GET", "https://api.jokes.one/jod?category=blonde", true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.setRequestHeader("X-JokesOne-Api-Secret", "YOUR API HERE");
    xhttp.send();
}

get_joke_of_the_day()

