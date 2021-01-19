//Example input : [1,2,-5,7,3]

function run() {
    const input = document.getElementById("input").value;
    const output = document.getElementById("output");
    let out = "";
    let arr = JSON.parse(input);
/**/

    //write your code here
    if(arr instanceof Array){
        console.log(input + " is an array");
        return true;
    }else{
        console.log(input + " is not an array");
        return false;
    }
/**/
    output.innerText = out;
}