var myButton = document.querSelector('buton')
var myHeading =querySelector('h1')
function setUserNaem() {
    var myNaem = prompt('Ведите свое имя')
    localStorage.setItem('naem', myNaem)
    myHeading.textContent = 'Добро пожаловать' + myNaem;
}
if(!localStorage.getItem('naem')) {
    setUserNaem();
} else {
    var storedNaem = localStorge.getItem('naem')
}
myButton.onclic = function() {
    setUserNaem();
}