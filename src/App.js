import React, { useEffect } from 'react';
import './App.css';
import Sidebar from './Sidebar';
import Chat from "./Chat";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "./features/userSlice"; 
import Login from "./Login";
import { auth } from './firebase';
import { login, logout} from "./features/userSlice";

//Auther : Vijana Maparathna
function App() {
  const dispatch = useDispatch(); // puth data to data layer /react- REDUX
  const user = useSelector(selectUser);
  
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      //console.log("User =>", authUser);
      if(authUser){
        dispatch(
          login({
             uid: authUser.uid,
             photo: authUser.photoURL,
             email: authUser.email,
             displayName: authUser.displayName,
          })
        );
      } else {
        dispatch(logout());
      }
    })
  }, [dispatch]);
  
  return (
    <div className="App">
      { user ? (
        <>
          <Sidebar />
          <Chat />
        </>

      ) : (
        <Login />
      )}
      
    </div>
  );
}

export default App;
