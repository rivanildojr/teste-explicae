const createPeopleItem = (data) => {
    const $tableBody = document.createElement("tbody");
    $tableBody.classList.add("table-people_tbody");

    data.forEach(person => {
        const $tr = document.createElement("tr");
        $tr.classList.add("table-people_line");
        const $columnTable = `
            <td class="table-people_column">${person.gender}</td>
            <td class="table-people_column">${person.name.title}. ${person.name.first} ${person.name.last}</td>
            <td class="table-people_column">${person.location.city}</td>
            <td class="table-people_column">${person.email}</td>
            <td class="table-people_column">${person.phone}</td>
            <td class="table-people_column">${person.cell}</td>
            <td class="table-people_column"><img src='${person.picture.thumbnail}' class="image"></td>
            <td class="table-people_column">${person.nat}</td>
        `
        $tr.insertAdjacentHTML("beforeend", $columnTable);
        $tableBody.insertAdjacentElement("beforeend", $tr);
    })
    return $tableBody;
}

