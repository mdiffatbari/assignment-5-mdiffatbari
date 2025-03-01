/* ===============background color change button================ */

const specialButton = document.getElementById('bg-color-change-btn');

specialButton.addEventListener('click', function(){
    var randomColor = Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = '#' + randomColor;
});


const blogButton = document.getElementById('blog-btn');

blogButton.addEventListener('click', function(){
    window.location.href = 'blog.html';
})
