

//preloader and delaying function
var delayInMilliseconds = 1500; //1.5 second
console.log("TESTTESTTEST");

setTimeout(function () {
        if (document.readyState !== "complete") {
document.getElementById("main_page").style.visibility = "hidden";
document.getElementById("main_page").style.display = "none";
document.getElementById("loader-wrapper").style.visibility = "visible";
document.getElementById("ruby_loader").style.visibility = "visible";
        } else {
document.getElementById("loader-wrapper").style.display = "none";
document.getElementById("ruby_loader").style.display = "none";
document.getElementById("main_page").style.visibility = "visible";
document.getElementById("main_page").style.display = "block";
        }
    }, delayInMilliseconds);





