const $root = document.querySelector("#root");

const $cardsWrapper = createCardsWrapper();
const $title = createTitle("Teste Explicaê");

const createFunctionalitiesCard = functionalitiesCard();

const arrayCards = [
    {
        src: "assets/roleta.png",
        alt: "Icone de uma roleta da sorte",
        title: "Roleta",
        link: "roleta"
    },
    {
        src: "assets/form.png",
        alt: "Icone de um formulario",
        title: "Formulário",
        link: "form"
    },
    {
        src: "assets/pessoas.png",
        alt: "Icone com 3 pessoas",
        title: "Pessoas",
        link: "pessoas"
    }
]

const generateCards = (arrayCards) => {
    arrayCards.forEach(card => {
         let $cardElement = createFunctionalitiesCard(card);  
         $cardsWrapper.insertAdjacentHTML("beforeend", $cardElement);  
    });
    return 1;
}

generateCards(arrayCards);

$root.insertAdjacentHTML("beforeend", $title);
$root.insertAdjacentElement("beforeend", $cardsWrapper);

