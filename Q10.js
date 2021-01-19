//Change ln. 11 to false inorder to insert a table manually into input box.
function run() {
    const input = document.getElementById("input").value;
    const output = document.getElementById("output");
    let out = "";
    let arr = JSON.parse(input);
/**/
    //input code to test
    let table = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];
    //write your code here
    if(true){ //Change this to false to check via inserting a table manually.
        table = arr;  
    }
    for(let i = 0; i < table.length; i++){
        let string = "row " + i + ": ";
        for(let j = 0; j < table[i].length; j++){
            if(j > 0){
                string = string + ", " + table[i][j]; 
            }else{
                string = string + table[i][j]; 
            }
        }
        console.log(string);
    }
/**/
    output.innerText = out;
}