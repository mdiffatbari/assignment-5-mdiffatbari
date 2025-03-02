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
    let hours = now.getHours();
    let minutes = now.getMinutes().toString().padStart(2, '0');
    let amPm = hours >= 12 ? 'PM' : 'AM';

    hours = hours % 12 || 12;

    let timeNow = `${hours}:${minutes} ${amPm}`;

    let p = document.createElement("p");
    let taskTitle = completeButtons[i].closest(".body-bottom-items-box").querySelector(".box-head").innerText;
    p.innerText = `'You have completed the task' ${taskTitle} at ${timeNow}`;
    historyArea.appendChild(p);


    clickCount++;
    if (clickCount === completeButtons.length) {
      alert("Congrats!!! You have completed all the task");
    }

  })
};