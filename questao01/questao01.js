let eventos = [];

document.querySelector("form").addEventListener("submit", function(event) {
    //obtendo os valores do formulario
    let nome = document.querySelector("#nome").value;
    let data = document.querySelector("#data").value;

    //objeto com os valores do evento
    let evento ={
        nome,
        data,
    };

    eventos.push(evento);
    //ordenando por data
    eventos.sort((a, b)=> a.data - b.data);

    document.querySelector("#eventos").innerHTML = eventos.map(evento=> `
        <li>
            <strong>${evento.nome}</strong>
            <br>
            ${evento.data}
        </li>` ).join("");

    //cancela o envio do formulário
    event.preventDefault();
});