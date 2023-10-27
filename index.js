//register the button listener for the calculate button to run the calc function
document.getElementById('calc').addEventListener('click',calc);

//calculate the pythagorean theorem using inputs
function calc(){
    //Get Values from inputs for A and B
    let a = document.getElementById('a').value;
    let b = document.getElementById('b').value;
    //calculate the result using the pythagorean theorem (A^2 + B^2 = C^2) and set the output to the result
    //square A and B then square root to get C
    document.getElementById('out').innerHTML = `${Math.sqrt((a**2 + b**2))}`
}
