function run() {
    const input = document.getElementById("input").value;
    const output = document.getElementById("output");
    let out = "";
    let arr = JSON.parse(input);
/**/

    //write your code here
    for(let i = 0; i < arr.length; i++){
        let num = arr[i];
        for(let j = 0; j < arr.length - 1; j++){
            if(num > arr[j]){
                console.log(j);
            }
        }
    }
/**/
    console.log(is_array('w3resource'));
    console.log(([1, 2, 4, 0]).toS);
    output.innerText = out;
}