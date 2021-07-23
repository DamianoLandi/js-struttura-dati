const cardFunction = (card) =>{

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

    let functionMessage = "<ul>";

    functionMessage +=
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
    </ul>`;
    
    return functionMessage;
};

const cardList = [
    {
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
    },

    {
        nome: "Shirakami Fubuki",
        costo: ["2", "B", "R"],
        costoConvertito: 4,
        tipo: {
            primoTipo: "Creatura",
            archetipo: "Kitsune",
        },
        espansione: 1,
        effetti: [],
        testoColore: "Una volpe bianca in grado di mutare forma",
        illustratore: "Joseph Joestar",
        idCarta: {
            numero: 46,
            totale: 216,
        },
        forza: 7,
        costituzione: 11,
        bordo: "Argentato",
    },

    {
        nome: "Golem di Ghiaccio",
        costo: ["7", "G", "R"],
        costoConvertito: 9,
        tipo: {
            primoTipo: "Roccia",
            archetipo: "Golem",
        },
        espansione: 3,
        effetti: [
            {
                costo: ["G", "W"],
                effetto: "Aumenta di 2 punti la forza di questa carta per 3 turni",
            },
        ],
        testoColore: "Una statua di ghiaccio mossa da un potere ignoto",
        illustratore: "Houshou Marine",
        idCarta: {
            numero: 31,
            totale: 395,
        },
        forza: 8,
        costituzione: 12,
        bordo: "Nero",
    }  
]; 

const cardDisplay = document.getElementById("carta");

let message = ""

for (let h = 0; h < cardList.length;h++){
    message += cardFunction(cardList[h]);
}
cardDisplay.innerHTML = message;



const search = document.getElementById("search");

const textInput = document.getElementById("type");

const selectInput = document.getElementById("select");

search.addEventListener("click",() => {
    if (selectInput.value === "all"){
        cardDisplay.innerHTML = message;
    }else{
        let filteredMessage ="";
        switch (selectInput.value){
            case "nome":
            case "costo":
            case "testoColore":
            case "illustratore":
            case "bordo":
                for (let k = 0; k < cardList.length;k++) {
                    if (cardList[k][selectInput.value].includes(textInput.value)){
                        filteredMessage += cardFunction(cardList[k]);
                    }
                }
                break;
        };
        switch (selectInput.value){
            case "costoConvertito":
            case "espansione":
            case "forza":
            case "costituzione":
                for (let k = 0; k < cardList.length;k++) {
                    if (cardList[k][selectInput.value] == textInput.value){
                        filteredMessage += cardFunction(cardList[k]);
                    }
                }      
        }






        cardDisplay.innerHTML = filteredMessage;
    }
})