let div = document.div('container')

const movie () async => {
    let res = await fetch('http://localhost:3000/films')
    let req = await res.json();
    console.log('Response', response);
    console.error('Response', response);
}
movie()

element.forEach () => {
    let title = document.createElement('li')
    let runtime = document.createElement('div')
    let showtime = document.createElement('span')
    let avaliableTickets = document.createElement('span')
    let button = docuemnt.createElement('button')
}

document.appendChild('li')
document.appendChild('div')
document.appendChild('span')
document.appendChild('span')


let ticketButton = document.appendChild('button') => {
    document.innerText = "Buy Tickets"
    document.element.button = --avaliableTickets
    if avaliableTickets <= 0; return 'Tickets are sold out'
}


const title2 = document.getElementById("title");
const runtime2 = document.getElementById("runtime");
const showtime2 = document.getElementById("showtime");
const avaliableTickets2 = document.getElementById('ticket-num')


const removingLi = document.removeChild('li')
