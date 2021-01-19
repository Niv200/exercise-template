function run() {
    const input = document.getElementById("input").value;
    const output = document.getElementById("output");
    let out = "";
/**/

    //write your code here
    function getFirst(arr, num){
        if(num === undefined){
            num = 1;
        }
        let array = [];
        if(arr === undefined || arr === null || num < 0){
            return array;
        }
        array = array.slice(0, num);
        return array;
    }

    console.log(getFirst([7, 9, 0, -2], 3));
console.log(getFirst([],3));
console.log(getFirst([7, 9, 0, -2],3));
console.log(getFirst([7, 9, 0, -2],6));
console.log(getFirst([7, 9, 0, -2],-3));
/**/
    output.innerText = out;
}