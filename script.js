/* 
Utilizzando i dati forniti, creare un array di stringhe con i nomi dei membri del team.
MILESTONE 0:
Creare l’array di stringhe contenente i nomi dei membri del team.
MILESTONE 1:
Stampare le informazioni su DOM come card.
MILESTONE 2:
Aggiungere un evento click sulla card che aggiunge/rimuove una classe per evidenziare un componente del team.
BONUS 1:
In generale curare la parte di UI e organizzare i singoli membri in card/schede.
BONUS 2:
Inserire un form per l’aggiunta di un elemento alla lista.
Consigli del giorno: Ragioniamo come sempre a step. Prima la logica in italiano e poi traduciamo in codice.
E ricordiamoci che console.log() è nostro amico!
*/

// MILESTONE 0: Array dei membri del gruppo
const members = [
    'Tony Stark',
    'Bruce Banner',
    'Thor',
    'Steve Rogers',
    'Natasha Romanoff',
    'Clint Barton'
];

// MILESTONE 1: Membri del team stampati come card
const membersContainer = document.getElementById('team');

// Cards
for (let i = 0; i < members.length; i++) {
    const member = members[i];


    // Member
    const memberElement = document.createElement('div');

    memberElement.classList.add('col-4');
    memberElement.append(member);

    // MILESTONE 2: evento click che aggiunge/rimuove una classe
    memberElement.addEventListener('click', function(e){
        console.log(e.target);

        e.target.classList.toggle('bg-primary');
    })

    membersContainer.appendChild(memberElement);
    
}

