


export async function getAllProductos(){
    return fetch("https://api.mercadolibre.com/sites/MLA/search?q=ipod").then(res=>res.json())
    //return await firestore.collection("productos")
    //.get()

}
export function getById(id){
    return fetch(`https://api.mercadolibre.com/items/${id}`).then(res=>res.json())
}
export async function create(payload) {
    //return await firestore.collection("productos").add(payload);
  }