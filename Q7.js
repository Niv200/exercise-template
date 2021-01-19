function run() {
    const input = document.getElementById("input").value;
    const output = document.getElementById("output");
    let out = "";
    let arr = JSON.parse(input);
/**/

    //write your code here
    //test sample [1,2,-5,7,3]
    for(let i = 0; i < arr.length; i++){
        console.log(arr[i]);  //
    }

    // for(let i = 0; i < arr.length; i++){
    //     let num = arr[i];
    //     let largest = num;
    //     let array = [];
    //     for(let j = 0; j < arr.length - 1; j++){
    //         if(num > arr[j]){
    //             console.log(j);
    //         }
    //     }
    //     console.log(array);
    // }
/**/
    output.innerText = out;
}