let min = 1;
let max = 100;
let number =  Math.floor(Math.random() * (max - min + 1)) + min;

let flag = true;
let attempts = 0;

while(flag){

    let guess =  window.prompt(`Enter a number between ${min} and ${max} ,Attempts: ${attempts}`);

    if (guess === null ){
        alert(`game cancelled. the number is ${number}`)
        flag = false;
        break;
    }

    guess = Number(guess)

    if(isNaN(guess)){
        alert(`enter a valid number`)
    } else if (guess > max || guess < min){
        alert(`enter a number in range ${min} and ${max}`);
    }else {
        attempts++;
        if(guess > number){
            alert(`The number is too high`)
        } else if (guess < number) {
            alert(`the number is too low`)
        } else {
            alert(`congrats , guessed in ${attempts} attempts`)
            flag = false;
        }
    }
}