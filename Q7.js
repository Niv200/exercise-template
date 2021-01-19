function run() {
    const input = document.getElementById("input").value;
    const output = document.getElementById("output");
    let out = "";
    //write your code here
    //test sample [1,2,-5,7,3]
    let arr = [1,4,2,7,3];
    console.log(arr.sort());
    out = arr;
    output.innerText = out;
}
