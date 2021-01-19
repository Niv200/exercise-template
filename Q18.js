function run() {
    const input = document.getElementById("input").value;
    const output = document.getElementById("output");
    let out = "";
    let num = JSON.parse(input);
    /*array to look into*/
    var items = [1, 2, 3, 4, 5, 7, 8, 9];
    //write your code here 
    out = searchFor(items, num);
    /**/
    output.innerText = out;
}


//own function
function searchFor(arr, arg){
    let index = -1; //return -1 incase not found.
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === arg){
            return i;
        }
    }
    return index;
}