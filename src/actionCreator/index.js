
import axios from 'axios';

export const getuserid=()=>{
    return(dispatch)=>{

        axios.get(URL+`/public/v2/posts`)
        .then(function(response){
            console.log(response.data.data);
        })
        .catch(function(error){
            console.log(error);
        })
        .finally(function(){

        });

        setTimeout(()=>{
            dispatch({type:"GET_USER_ID"})
        },3000)
    }
}