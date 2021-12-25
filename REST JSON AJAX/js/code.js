
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