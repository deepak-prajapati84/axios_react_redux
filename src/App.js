import logo from './logo.svg';
import './App.css';
import {useDispatch,useSelector} from 'react-redux';
import { getuserid } from './actioncreator';


function App() {
//2. Hook Area
let dispatch=useDispatch();

  /*let storeObjectData=useSelector((store)=>{return store});
    
      sorted form
  */
  let storeObjectData=useSelector(store=>store);
  
  return (
    <>
    {
      console.log(storeObjectData)
    }
      <button onClick={()=>{dispatch(getuserid())}}>Call the API</button>
      <ul>
        {
          storeObjectData && storeObjectData.map((cv,idx,arr)=>{
            return <li>{cv.id}</li>
          })
        }
      </ul>
    </>
  );
}

export default App;
