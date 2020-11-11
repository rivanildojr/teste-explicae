const functionalitiesCard = () => {
    return ({src, alt, title, link}) => `
        <article class="card" onClick="handleClick('${link}')">
            <img
                src='${src}'
                alt='${alt}'
                class='card_icon'
            >
            <h3 class='card_title'>${title}</h3>
        </article>
    `
}

const handleClick = (link) => window.location.href = `${link}.html`;