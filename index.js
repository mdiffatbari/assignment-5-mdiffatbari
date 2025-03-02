/* ===============background color change button================ */

const specialButton = document.getElementById('bg-color-change-btn');

specialButton.addEventListener('click', function(){
    var randomColor = Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = '#' + randomColor;
});


const blogButton = document.getElementById('blog-btn');

blogButton.addEventListener('click', function(){
    window.location.href = 'blog.html';
});

/* ===============cart action================ */

/* const completerButton = document.getElementById("complete-btn");
const historyArea = document.getElementById("history");
const boxHeading = document.getElementsByClassName("box-head");

completerButton.addEventListener("click", function(){
    button.disabled = true;
});




document.addEventListener("DOMContentLoaded", function () {
    var taskCountElement = document.querySelector(".body-top-items-left h1");
    var taskCount = parseInt(taskCountElement.innerText);
    var menuCount = document.getElementById('menu-count').innerText;
    var convertedMenuCount = parseInt(menuCount);
    var completeButtons = document.querySelectorAll(".box-btn button");
    var historyContainer = document.getElementById("history");
    var clearHistoryButton = document.querySelector(".clear-button button");

    // Function to format date as "Jul 28 2025"
    function getFormattedDate() {
        var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        var now = new Date();
        var month = months[now.getMonth()];
        var day = now.getDate();
        var year = now.getFullYear();
        return month + " " + day + " " + year;
    }

    // Set current date in the calendar section
    var dateElement = document.querySelector(".body-top-items-right h4");
    if (dateElement) {
        dateElement.innerText = getFormattedDate();
    }

    for (var i = 0; i < completeButtons.length; i++) {
        completeButtons[i].addEventListener("click", function () {
            if (!this.disabled) {
                alert("Task Completed Successfully!");

                convertedMenuCount++;
                menuCount.innerText = convertedMenuCount;

                // Reduce task count and update UI
                taskCount--;
                taskCountElement.innerText = taskCount;

                // Disable the button
                this.disabled = true;
                this.style.backgroundColor = "#ccc";
                this.innerText = "Completed";

                // Add task to history log
                var taskTitle = this.closest(".body-bottom-items-box").querySelector(".box-head").innerText;
                var now = new Date();
                var timeNow = now.getHours().toString().padStart(2, '0') + ":" + now.getMinutes().toString().padStart(2, '0');

                var logItem = document.createElement("p");
                logItem.innerText = "You have completed the task " + taskTitle + " completed at " + timeNow;
                historyContainer.appendChild(logItem);

                // Check if all tasks are completed
                var remainingButtons = document.querySelectorAll(".box-btn button:not(:disabled)").length;
                if (remainingButtons === 0) {
                    setTimeout(function () {
                        alert("All tasks are completed!");
                    },);
                }
            }
        });
    }

    // Clear History Button Functionality
    clearHistoryButton.addEventListener("click", function () {
        historyContainer.innerHTML = ""; // Clears the activity log
        alert("Activity log cleared!");
    });
});
 */