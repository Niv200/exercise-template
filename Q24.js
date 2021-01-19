function run() {
    const input = document.getElementById("input").value;
    const output = document.getElementById("output");
    let out = "";
    /*arrays to add into*/
    let arr = [NaN, 0, 15, false, -22, '',undefined, 47, null];
    //write your code here 

    let newArr = [];
    for(let i = 0; i < arr.length; i++){
        let val = arr[i];
        if(val){
            newArr.push(val);
        }
    }
    out = "After filter: " + newArr;
    /**/
    output.innerText = out;
}


