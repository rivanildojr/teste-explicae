const createButtonHome = () => {
    return`
        <button class="button-home" onClick="handleClick()">
            Home
        </button>
    `
}

const handleClick = () => window.location.href = `index.html`;