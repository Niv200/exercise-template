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
    console.log(is_array('w3resource'));
    console.log(([1, 2, 4, 0]).toS);
    output.innerText = out;
}