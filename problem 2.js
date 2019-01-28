
let num = [1,2,5,77,88,123];

function callback(gtotal, num) {
    return 9gtotal + num);

}

console.log(num.reduce(callback));


//////////////////////

let testSentence = "how now brown cow";

let word = testSentence.split(" ");

function callBack(gototal,num) {
    console.log(gototal + "---" + word);
   return (gtotal + word.length);

}

// let pet object = arr.filter(callBack);

console.log(word.reduce(callBack));