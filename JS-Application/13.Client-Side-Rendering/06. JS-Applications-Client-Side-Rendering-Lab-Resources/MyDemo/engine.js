export function renderTemplate(tempAsString,data) {
let pattern = /{{(.+?)}}/gm;
return tempAsString.replace(pattern,(match,propName) => {
    return data[propName]
})

}