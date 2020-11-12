const createTablePeople = (data) => {
    return`
        <table class="table-people">
            <thead class="table-people_thead">
                <tr>
                    <th class="table-people_column">Gênero</th>
                    <th class="table-people_column">Nome</th>
                    <th class="table-people_column">Localização</th>
                    <th class="table-people_column">Email</th>
                    <th class="table-people_column">Telefone Fixo</th>
                    <th class="table-people_column">Telefone Celular</th>
                    <th class="table-people_column">Foto</th>
                    <th class="table-people_column">Nacionalidade</th>
                </tr>
            <thead>
            <tbody class="table-people_tbody">
                 <tr class="table-people_line">
                    <td class="table-people_column">${data.gender}</td>
                    <td class="table-people_column">${data.name.title}. ${data.name.first} ${data.name.last}</td>
                    <td class="table-people_column">${data.location.city}</td>
                    <td class="table-people_column">${data.email}</td>
                    <td class="table-people_column">${data.phone}</td>
                    <td class="table-people_column">${data.cell}</td>
                    <td class="table-people_column"><img src='${data.picture.thumbnail}' class="image"></td>
                    <td class="table-people_column">${data.nat}</td>
                </tr>
            </tbody>
        </table>
    `
}