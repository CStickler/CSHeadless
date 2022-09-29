let clickCount = 0;

document.getElementById('btn').addEventListener('click', function(){
    clickCount += 1;
    count.innerText = clickCount;
});

let count = document.getElementById('count');
