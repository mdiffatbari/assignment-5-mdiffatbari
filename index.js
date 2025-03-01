/* ===============background color change button================ */

const specialButton = document.getElementById('bg-color-change-btn');

specialButton.addEventListener('click', function(){
    var randomColor = Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = '#' + randomColor;
});

/* ================blog button===================== */
const blogButton = document.getElementById('blog-btn');

blogButton.addEventListener('click', function(){
    window.location.href = 'blog.html';
});

/* =============live date=================== */
document.getElementById("current-date").textContent = new Date().toDateString();