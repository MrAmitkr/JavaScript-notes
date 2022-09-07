//Lesson 68_async ---------------------------

/* 
async function loadFile(){
    
    let fileLoaded = true;

    if(fileLoaded){
        return "File loaded";

    }
    else{
       throw "File NOT loaded";
    }
}

promise.then(value => console.log(value))
    .catch(error => console.log(error));
 */

// another way of writing the code

function loadFile(){
    
    let fileLoaded = true;

    if(fileLoaded){
        return Promise.resolve("File loaded");

    }
    else{
       throw Promise.reject("File NOT loaded");
    }
}

loadFile.then(value => console.log(value))
    .catch(error => console.log(error));
