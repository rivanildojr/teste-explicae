const $roulette = document.querySelector("#roulette");

const $tablesWrapper = createTablesWrapper();
const $title = createTitle("MegaSena");
const $button = createButtonHome();

const generateTables = (quantity) => {
    for(let i = 0; i < quantity; i++) {
        let $createTable = generateTable(6, 10);
        $tablesWrapper.insertAdjacentElement("beforeend", $createTable);
    }
}

generateTables(3);

$roulette.insertAdjacentHTML("beforeend", $title);
$roulette.insertAdjacentElement("beforeend", $tablesWrapper);
$roulette.insertAdjacentHTML("beforeend", $button);
