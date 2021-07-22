const card = {
    nome: "Soldato dell'Oscuro Desiderio",
    costo: ["4", "R", "U"],
    costoConvertito: 6,
    tipo: {
        primoTipo: "Creatura",
        archetipo: "Soldato",
    },
    espansione: 7,
    effetti: [
        {
            costo: ["B", "R"],
            effetto: "Infliggi 700 danni al nemico",
        },
        {
            costo: ["U", "T"],
            effetto: "Riduci il costo della prossima abilità utilizzata di 1 mana",
        }
    ],
    testoColore: "Un antico soldato che, dopo secoli, continua a seguire gli ordini del suo padrone...",
    illustratore: "John Smith",
    idCarta: {
        numero: 7,
        totale: 420,
    },
    forza: 13,
    costituzione: 11,
    bordo: "Dorato",
}

const cardDisplay = document.getElementById("carta");

let costo = "";

for(let i = 0; i < card.costo.length; i++){
    costo += `${card.costo[i]} `;
}


let tipo = `${card.tipo.primoTipo}`;

if(card.tipo.archetipo.length){
    tipo += ` - ${card.tipo.archetipo}`;
}

let listaEffetti = "";

if(!card.effetti.length){
    listaEffetti = "Questa carta non ha effetti.";
}else{
    for (let i = 0; i < card.effetti.length; i++){
        let costoEffetto = "";
        for(let j = 0; j < card.effetti[i].costo.length; j++){
            costoEffetto += `${card.effetti[i].costo[j]} `;
        }
        listaEffetti += `<li> <strong>Costo: </strong>${costoEffetto}</li> <li><strong>Effetto: </strong>${card.effetti[i].effetto} </li> <br> `
    }
}

let message = "";

message +=
 `<li><strong>Nome: </strong> ${card.nome}</li>
 <li><strong>Costo di Lancio: </strong>${costo}</li>
 <li><strong>Costo Convertito: </strong>${card.costoConvertito}</li>
 <li><strong>Tipo: </strong>${tipo}</li>
 <li><strong>Espansione: </strong>${card.espansione}</li>
 <li><strong>Abilità: </strong><ul>${listaEffetti}</ul></li>
 <li><strong>Testo di Colore: </strong><em>${card.testoColore}</em></li>
 <li><strong>Illustratore: </strong>${card.illustratore}</li>
 <li><strong>ID Carta: </strong>${card.idCarta.numero}/${card.idCarta.totale}</li>
 <li><strong>Forza: </strong>${card.forza}</li>
 <li><strong>Costituzione: </strong>${card.costituzione}</li>
 <li><strong>Colore del Bordo: </strong>${card.bordo}</li>
 </ul>`

 cardDisplay.innerHTML = message;