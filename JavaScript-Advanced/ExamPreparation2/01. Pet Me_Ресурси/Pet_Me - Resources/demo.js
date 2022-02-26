function e(type, attr, ...content) {
    const element = document.createElement(type);

    for (let prop in attr) {
        element[prop] = attr[prop];
    }
    for (let item of content) {
        // if (typeof item == 'string' || typeof item == 'number') {
        //     item = document.createTextNode(item);
        // }
        element.append(item);
    }
    return element;
}
const CreatePet = e('li', {},
e('p', {},
    e('strong', {}, name),
    ' is a ',
    e('strong', {}, age),
    ' year old ',
    e('strong', {}, kind),
),
e('span', {}, `Owner: ${owner}`),
contactBtn
);
//strukturata e ot zadacha pet me 