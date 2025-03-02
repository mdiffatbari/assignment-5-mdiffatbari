let menuCount = document.getElementById('menu-count').innerText;
let convertedMenuCount = parseFloat(menuCount);

let taskCount = document.getElementById('task-count').innerText;
let convertedTaskCount = parseFloat(taskCount);

const completeButtons = document.querySelectorAll(".box-btn button");


 
 for (let i = 0; i < completeButtons.length; i++){
    completeButtons[i].addEventListener('click', function(){

    alert("Board Updated Successfully");

    convertedMenuCount++;
    document.getElementById('menu-count').innerText = convertedMenuCount;

    convertedTaskCount--;
    document.getElementById('task-count').innerText = convertedTaskCount;

    completeButtons[i].disabled = true;
    completeButtons[i].style.backgroundColor = "#CED6FE";

    })
 };