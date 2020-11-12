const createInputForm = () => {
    return (label, type, name, id) => `
        <div>
            <label for='${name}' class="form-group_label">${label}</label>
            <input type='${type}' id='${id}' name='${name}' class="form-group_input"/>
        </div>
    `
}