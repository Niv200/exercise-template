
    function lookUp(obj , arg){
        if(obj.hasOwnProperty(arg)){
            return obj[arg];
        }
        return 0;
    }

    function run() {
        const input = document.getElementById("input").value;
        const output = document.getElementById("output");
        let out = "";
        /*array with values*/
        let library = [ 
            { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254},
            { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264},
            { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245}
            ];
        //write your code here 
        let arr = [];
        for(let i = 0; i < library.length; i++){
            //arr.push(lookUp(library[i], 'title'));
            arr.push(lookUp(library[i], 'author'));
            //Change here to look at the other search
        }
        out = arr;
        /**/
        output.innerText = out;
    }
    
    
    