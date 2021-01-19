function run() {
    const input = document.getElementById("input").value;
    const output = document.getElementById("output");
    let out = "";
/**/
    
    //write your code here
    function getFirst(arr, num){
        if(num === undefined || num < 1){
            return [];
        }
        let array = [];
        array = arr.slice(0, num);
        return array;
    }
    console.log(getFirst([7, 9, 0, -2]));
    console.log(getFirst([],3));
    console.log(getFirst([7, 9, 0, -2],3));
    console.log(getFirst([7, 9, 0, -2],6));
    console.log(getFirst([7, 9, 0, -2],-3));
    //Test inputs are above^^^
    //Couldnt manage to add 2 inputs sorry :/
/**/
    output.innerText = out;
}