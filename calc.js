function findInner(e) {         //function to find value pressed and store in an array
    let numb = e.target.innerText;
    if (numb == "=") {
        perfOp(arr1)
    }
    else if (numb == "clr") {       //changes calculator when cleared is pushed
        arr1.length = 0;
        arr2.length = 0;
        let dispWin = document.querySelector("#display");
        dispWin.innerText = 0;

    }
    else if (numb == "+" || numb == "x" || numb == "-" || numb == "/") {    //changes calculator when operation is pushed
        arr1.push(numb);
        let dispWin = document.querySelector("#display");
        dispWin.innerText = 0;
    }
    else {
        var index = arr1.findIndex(x => x == "+" || x == "x" || x == "-" || x == "/") //checks to see if operation has been choosen
        if (index == -1) {      //performs first array display
            arr1.push(numb);
            numbDisp(arr1)
        }
        else {                  //updates display after being reset to 0
            arr1.push(numb);
            arr2.push(numb);
            numbDisp(arr2);
        }
    }

}


function numbDisp(array) {       //updates display to show numbers entered 
    let disp = array.join("");
    let dispNum = parseInt(disp);
    let dispWin = document.querySelector("#display")
    dispWin.innerText = dispNum;
}

function perfOp(array) {        //function that takes array of pushed buttons and attempts to perform operatiion
    var index = array.findIndex(x => x == "+" || x == "x" || x == "-" || x == "/")
    let perfArr1 = array.slice(0, index)
    let perfArr2 = array.slice(index + 1)
    let perfStr1 = perfArr1.join("");
    let perfStr2 = perfArr2.join("");
    let perfNum1 = parseInt(perfStr1);
    let perfNum2 = parseInt(perfStr2);
    let code = checkOperation(array[index]);
    if (code == 1) {
         disp = perfNum1 + perfNum2;
    }
    else if (code == 2) {
         disp = perfNum1 * perfNum2;
    }
    else if (code ==3 ){
         disp = perfNum1 - perfNum2;
    }
    else{
         disp = Math.round((perfNum1/perfNum2)*10)/20
    }
    let dispWin = document.querySelector("#display")
    dispWin.innerText = disp;
    arr2.length = 0;
    continueOp(disp);
}

function checkOperation(string) {      //function to return number for operation 
    let code = string.charCodeAt(0);
    if (code == 43) {
        return 1;
    }
    else if (code == 120) {
        return 2;
    }
    else if (code == 45) {
        return 3;
    }
    else {
        return 4;
    }
}

function continueOp(numb){      //function that uses previous result and stores into new arr1 to continue multiple 
    arr1.length = 0;
    let str = numb.toString();
    let arr = str.split("");
    for (i=0; i<arr.length; i++){
        arr1.push(arr[i]);
    }
    
}


const arr1 = [];
const arr2 = [];
const btn = document.getElementsByClassName("buttons")

for (i = 0; i < btn.length; i++) {
    btn[i].addEventListener("click", findInner)
}



