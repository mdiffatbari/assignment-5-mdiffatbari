let menuCount = document.getElementById('menu-count').innerText;
let convertedMenuCount = parseFloat(menuCount);

let taskCount = document.getElementById('task-count').innerText;
let convertedTaskCount = parseFloat(taskCount);


const completeButtons = document.querySelectorAll(".box-btn button");

const historyArea = document.getElementById("history");


let clickCount = 0;

for (let i = 0; i < completeButtons.length; i++) {
  completeButtons[i].addEventListener('click', function () {

    alert("Board Updated Successfully");

    convertedMenuCount++;
    document.getElementById('menu-count').innerText = convertedMenuCount;

    convertedTaskCount--;
    document.getElementById('task-count').innerText = convertedTaskCount;

    completeButtons[i].disabled = true;
    completeButtons[i].style.backgroundColor = "#CED6FE";
    completeButtons[i].style.cursor = "not-allowed";



    let now = new Date();
    let hours = now.getHours() % 12 || 12;
    let minutes = String(now.getMinutes()).padStart(2, '0');
    let seconds = String(now.getSeconds()).padStart(2, '0');
    let amPm = now.getHours() >= 12 ? 'PM' : 'AM';

    let timeNow = `${hours}:${minutes}:${seconds} ${amPm}`;

    let p = document.createElement("p");
    let taskTitle = completeButtons[i].closest(".body-bottom-items-box").querySelector(".box-head").innerText;
    p.innerText = `You have completed the task ${taskTitle} at ${timeNow}`;
    historyArea.appendChild(p);


    clickCount++;
    if (clickCount === completeButtons.length) {
      alert("Congrats!!! You have completed all the task");
    }

  })
};

const clearButton = document.getElementById("clear-btn");
clearButton.addEventListener("click", function(){
  document.getElementById("history").innerHTML = " ";
})