function run() {
    const input = document.getElementById("input").value;
    const output = document.getElementById("output");
    let out = "";
    /*array to look into*/
    let array = [1, 2, -2, 4, 5, 4, 7, 8, 7, 7, 71, 3, 6];
    //write your code here 
    let dupes = [];
    let notDupes = [];
    for(let i = 0; i < array.length; i++){
        if(notDupes.includes(array[i])){
            dupes.push(array[i]);
        }else{
            notDupes.push(array[i]);
        }
    }
    out = "The dupes are: " + dupes;
    /**/
    output.innerText = out;
}


