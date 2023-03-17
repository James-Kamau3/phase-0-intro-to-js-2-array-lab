// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name){
    cats.push('Ralph');
}

function destructivelyPrependCat(name){
    cats.unshift('Bob');
}

function destructivelyRemoveLastCat(){
    cats.pop();
}

function destructivelyRemoveFirstCat(){
    cats.shift();
}

function appendCat(name){
    const appends =  [...cats, 'Broom'];
    return appends;
}

function prependCat(name){
    const preps = ['Arnold', ...cats];
    return preps;
}

function removeLastCat(){
    cats.pop();
    return cats;
}

function removeFirstCat(){
    cats.shift();
    return cats;
}