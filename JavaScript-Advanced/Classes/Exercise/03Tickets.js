function tickets(arr, str) {
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }

    const ticketsData = [];

    for (let i = 0; i < arr.length; i++) {
        const [destination, price, status] = arr[i].split('|');
        let ticket = new Ticket(destination, Number(price), status);
        ticketsData.push(ticket);
    }

console.log(ticketsData);

}
tickets(['Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
        'Boston|126.20|departed'],
        'destination')

        // ['Philadelphia|94.20|available',
        // 'New York City|95.99|available',
        // 'New York City|95.99|sold',
        // 'Boston|126.20|departed'],
        // 'status'
