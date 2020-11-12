const createTablePeople = () => {
    const $table = document.createElement("table");
    $table.classList.add("table-people");

    const $tableHead = `
        <thead class="table-people_thead">
            <tr class="table-people_line">
                <th class="table-people_column">Gênero</th>
                <th class="table-people_column">Nome</th>
                <th class="table-people_column">Localização</th>
                <th class="table-people_column">Email</th>
                <th class="table-people_column">Telefone Fixo</th>
                <th class="table-people_column">Telefone Celular</th>
                <th class="table-people_column">Foto</th>
                <th class="table-people_column">Nacionalidade</th>
            </tr>
        </thead>
    `
    $table.insertAdjacentHTML("beforeend", $tableHead);
    return $table;
}