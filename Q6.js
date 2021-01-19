function run() {
    const input = document.getElementById("input").value;
    const output = document.getElementById("output");
    let out = "";
/////write your code here
//I had to reverse engineer the answer however I managed to understand it :)
    let num = input.toString();
    let rslt = [];
    rslt[0] = num[0];
    for(let i = 1; i < num.length; i++){
        if((input[i - 1] % 2 === 0) && (num[i] % 2 === 0)){
            if(input[i] !== undefined){
                rslt.push('-', num[i]);
            }
        }else{
            rslt.push(num[i]);
        }
    }
    console.log(rslt.join(''));
///////////////////////////////

    output.innerText = out;
}