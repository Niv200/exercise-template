//You can change ln 17 to check automatically by inserting 2 values,
//Do note that you also have to modify HTML code at index.html.
function run() {
    const input = document.getElementById("input").value;
    const input2 = document.getElementById("input2").value;
    const output = document.getElementById("output");
    let out = "";
    
    //write your code here
    function getFirst(arr, num){
        if(num === undefined || num < 1){
            return [];
        }
        let array = [];
        array = arr.slice(0, num);
        return array;
    }
    if(true){/// Change me!
        console.log(getFirst([7, 9, 0, -2]));
        console.log(getFirst([],3));
        console.log(getFirst([7, 9, 0, -2],3));
        console.log(getFirst([7, 9, 0, -2],6));
        console.log(getFirst([7, 9, 0, -2],-3));
        //Test inputs are above^^^
    }else{
        arr = JSON.parse(input);
        console.log(getFirst(arr, input2));
    }
/**/
    output.innerText = out;
}