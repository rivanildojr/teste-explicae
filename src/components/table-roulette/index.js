const modifiedNumberIntPosToString = (number) => {
    if(number < 10) {
        return `0${String(number)}`
    }
    return String(number);
}

const generateTable = (line, column) => {
    let count = 1;
    const $table = document.createElement("table");
    $table.classList.add("table-roulette");
    const $tableBody = document.createElement("tbody");
    $tableBody.classList.add("table-roulette_body");

    const arrayRandon = generateArrayRandonAscending();
     
    for(let i = 0; i < line; i++) {
        const $tr = document.createElement("tr");
        $tr.classList.add("table-roulette_line");
        for(let j = 0; j < column; j++) {
            let $td = document.createElement("td");
            if(arrayRandon.includes(count)){
                let numberToString = modifiedNumberIntPosToString(count);
                $td.classList.add("table-roulette_column");
                $td.classList.add("-include");
                $td.innerText = numberToString;
            } else {
                let numberToString = modifiedNumberIntPosToString(count);
                $td.classList.add("table-roulette_column");
                $td.innerText = numberToString; 
            }
            $tr.appendChild($td);
            count++;
        }
        $tableBody.appendChild($tr);
    }

    $table.appendChild($tableBody);
    return $table;
}