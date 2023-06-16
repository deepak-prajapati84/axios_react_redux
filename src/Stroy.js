import {applyMiddleware,legacy_createStore as deepak} from "redux";
import thunk from 'redux-thunk';

let initialUserData=[
    {
        "id": 45728,
        "user_id": 2938010,
        "title": "Supellex delectatio statua aureus aspernatur victus aro.",
        "body": "Tantillus ago aequitas. Auris video sperno. Colo aveho supellex. Terreo vorax speculum. Curatio inflammatio asper. Depromo summisse blandior. Et cimentarius verus. Sapiente aut paulatim. Tyrannus dens beneficium. Cado sint delectatio."
    },
    {
        "id": 45727,
        "user_id": 2938010,
        "title": "Sit ipsum animadverto pectus bis bibo bos sed.",
        "body": "Calco patrocinor quis. Conservo vulariter vulticulus. Argumentum venio est. Ipsum cervus vomer. Magnam et aeternus. Torqueo carpo sequi. Desolo chirographum substantia. Enim caecus rerum. Thesaurus soluta sunt. Amo aestas comburo. Vacuus dolores cohaero. Peior sollicito templum. Tabesco sulum eum. Fugiat amicitia comminor. Tutamen ad delinquo. Nemo aestas vociferor. Tabernus non ascisco. Expedita tero despecto. Vestigium vitae volubilis."
    },
]

//let rootReducer=(oldState=initialUserData,action)=>{ 
//sorted from
let rootReducer=(oldState,action)=>{
    let newState=oldState;

    switch(action.type){
        case "GET_USER_ID":
        return[
            ...newState,
            {
                "id": 45725,
                "user_id": 2938006,
                "title": "Demoror sto titulus adopto comes creptio.",
                "body": "Conturbo fugiat atqui. Sunt arca copiose. Anser arto conspergo. Turpe maxime apto. Territo voco antepono. Trepide arma conculco. Subnecto vinculum depromo. Comitatus acervus ustilo. Sit vomer charisma. Uberrime cohors tonsor. Sortitus aut aptus. Mollitia audentia templum. Tergeo arcus esse. Stillicidium stultus vociferor. Quaerat copia velut. Sunt vesco textilis. Numquam utor volaticus."
            },
        ]
        break;

    }
    
    return newState;
}


export const store= deepak(rootReducer,initialUserData,applyMiddleware(thunk));