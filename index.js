// Code your solutions in this file


const writeCards = (name, event) => {
    const array = []
    for (let i = 0; i < name.length; i++) {
        array.push(`Thank you, ${name[i]}, for the wonderful ${event} gift!`);
    }
    return array;
}



const countDown = (starting) => {
    for (let index = starting; index >= 0; index--) {
        console.log(index);
    }
}

writeCards(["Guadalupe", "Ollie", "Aki"], "surprise");
countDown(11);
