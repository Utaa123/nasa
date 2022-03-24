document.getElementById("submit").addEventListener("click", function(event){
  event.preventDefault()
});

function newDate() {
  
  year = document.querySelector("#year").value;
  month = document.querySelector("#month").value;
  day = document.querySelector("#day").value;



    var xmlhttp = new XMLHttpRequest();
    var url = "https://api.nasa.gov/planetary/apod?api_key=I8qTjfltgcUgjADeuWQGooeUOWrGDquSh39hpfK9&date=" + year + "-" + month + "-" + day;
    
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var myArr = JSON.parse(this.responseText);
            myFunction(myArr);
        }
    };
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
    
    function myFunction(arr) {
      console.log(arr.title);
      console.log(arr.date);
      console.log(arr.hdurl);
      console.log(arr.explanation);
    
      document.querySelector("#title").innerHTML = arr.title;
      document.querySelector("#date").innerHTML = arr.date;
      document.querySelector("#explain").innerHTML = arr.explanation;
      document.querySelector("#image").src = arr.hdurl;
    }

}