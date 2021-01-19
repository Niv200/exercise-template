let sum = 0;

function run() {
    const input = document.getElementById("input").value;
    const output = document.getElementById("output");
    let out = "";
/**/
    let num = JSON.parse(input);
    sum = sum + num;
    out = "Added";
/**/
    output.innerText = out;
}

function count(){
    const output2 = document.getElementById("output2");
    let out = "";
/**/
    out = "sum: " + sum;

/**/
    output.innerText = out;
}