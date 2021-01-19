function run() {
    const input = document.getElementById("input").value;
    const input2 = document.getElementById("input2").value;
    const output = document.getElementById("output");
    let from = JSON.parse(input);
    let to = JSON.parse(input2);
//write your code here
    let years = [];
    let range = to - from;
    for(let i = 0; i <= range; i++){
        let year = from + i;
        if(year % 4 === 0){
            if(year % 100 === 0){
                if(year % 400 === 0){
                    years.push(year);
                }
            }else{
                years.push(year);
            }
        }
    }


/**/
    output.innerText = years;
}