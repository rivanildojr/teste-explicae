const $people = document.querySelector("#people");

const $tableWrapper = createTablesWrapper();
const $title = createTitle("Pessoas Randômicas");
const $button = createButtonHome();

function USER_GET(results) {
  return {
    url: `https://randomuser.me/api/?results=${results}`,
    options: {
      method: "GET",
    },
  };
}

const {url, options} = USER_GET(5);

const getUser = async () => {
    const dataResponse = await fetch(url, options);
    const dataJson = await dataResponse.json();
    if(dataResponse.ok) return dataJson;
    throw Error(dataJson.message)
}

const generateTable = async () => {
    try {
        const data = await getUser();       
        const $tablePeople = createTablePeople();
        const $peopleItem = createPeopleItem(data.results);
        $tablePeople.insertAdjacentElement("beforeend", $peopleItem);
        $tableWrapper.insertAdjacentElement("beforeend", $tablePeople);
    } catch {
        alert("Falha no carregamento. Tente mais tarde!")
    }    
}

generateTable();

$people.insertAdjacentHTML("beforeend", $title);
$people.insertAdjacentElement("beforeend", $tableWrapper);
$people.insertAdjacentHTML("beforeend", $button);
