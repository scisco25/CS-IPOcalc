document.getElementById('calc').addEventListener('click',calc);


function calc(){
    let a = document.getElementById('a').value;
    let b = document.getElementById('b').value;
    document.getElementById('out').innerHTML = `${Math.sqrt((a^2 + b^2))}`
}