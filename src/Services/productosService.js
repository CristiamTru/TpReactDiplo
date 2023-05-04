export function getAllProductos(){
    return fetch("https://api.mercadolibre.com/sites/MLA/search?q=ipod").then(res=>res.json())
}
export function getById(id){
    return fetch(`https://api.mercadolibre.com/items/${id}`).then(res=>res.json())
}
export function create(){

}