let text5 = "";
let textarea5 = document.getElementById('answer5');
let button5 = document.getElementById("answer5Btn");
console.log("Here in the function5");
button5.addEventListener('click', function getText5() {
    text5 = textarea5.value;
    console.log(text5);
});
