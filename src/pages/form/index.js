const $form = document.querySelector("#form");

const $formWrapper = createFormWrapper();
const $title = createTitle("Form - Arquivo Texto");
const $button = createButtonHome();
const $textAreaForm = createTextAreaForm("textareaForm", "textarea");

const inputForm = createInputForm();

const $input = inputForm("Insira um arquivo de texto:", "file", "inputForm", "inputForm");

async function handleSubmit(event) {
    event.preventDefault();
    const readTextFile = new ReadTextFile();
    const $inputElement = document.querySelector("#inputForm")
    await readTextFile.uploadFile($inputElement);
    
    const $textArea = document.querySelector(".textArea-form");
    $textArea.textContent = readTextFile.getText();
}

const form = () => {
    const $formGroup = document.createElement("form");
    $formGroup.classList.add("form-group");
    $formGroup.addEventListener("submit", (event) => handleSubmit(event));

    $formGroup.insertAdjacentHTML("beforeend", $input);

    const $button = document.createElement("button");
    $button.classList.add("form-group_button");
    $button.textContent= "Enviar";

    $formGroup.appendChild($button)

    return $formGroup;
}

$formWrapper.insertAdjacentElement("beforeend", form());

$form.insertAdjacentHTML("beforeend", $title);
$form.insertAdjacentElement("beforeend", $formWrapper);
$form.insertAdjacentHTML("beforeend", $textAreaForm);
$form.insertAdjacentHTML("beforeend", $button);
