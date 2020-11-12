const getRandon = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const generateArrayRandon = () => {
    let sixDozen = new Set();

    while(sixDozen.size < 6) {
        let number = getRandon(1, 60);
        sixDozen.add(number);
    }

    return [...sixDozen];
}

const sortAscending = (arrayNumber) => {
    return arrayNumber.sort((a, b) => a - b);
}

const generateArrayRandonAscending = () => {
    let arrayNumber = generateArrayRandon();
    return sortAscending(arrayNumber);
}