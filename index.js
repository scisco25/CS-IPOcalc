document.getElementById('calc').addEventListener('click',calc);


function calc(){
    //Get Values from inputs
    let a = document.getElementById('a').value;
    let b = document.getElementById('b').value;
    //calculate the result and set the output to the result
    document.getElementById('out').innerHTML = `${Math.sqrt((a^2 + b^2))}`
}
