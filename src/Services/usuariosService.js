    import firebase from '../Config/firebase';
        
    export async function create(payload) {
    const respuesta = await firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password);
    //console.log(responseUser);
    const documento = await firebase.firestore().collection("usuarios")
    .add({
        name:payload.nombre,
        lastname:payload.apellido,
        userId: respuesta.user.uid
    }) 
    return documento
    }


    export async function login(email,password){
        const respuesta = await firebase.auth().signInWithEmailAndPassword(email,password)
        return respuesta.user.uid 
    }