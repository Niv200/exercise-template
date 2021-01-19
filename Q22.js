//input box is not in use.
function run() {
    const input = document.getElementById("input").value;
    const output = document.getElementById("output");
    let out = "";
    /*Arrays to combine without dupes*/
    let arr1 = [1, 2, 3];
    let arr2 =  [100, 2, 1, 10];
    //write your code here 
    for(let i = 0; i < arr2.length; i++){
        if(!arr1.includes(arr2[i])){
            arr1.push(arr2[i]);
        }
    }
    out = "Merged array: " + arr1;
    /**/
    output.innerText = out;
}


