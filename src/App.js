import {Routes, Route} from "react-router-dom";
import Homepage from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component"
import SignIn from "./routes/sign-in/sign-in.component";
import Shop from "./routes/shop/shop.component"
import Checkout from "./routes/checkout/checkout.component";

import { useEffect } from "react";
import {createUserDocumentFromAuth, onAuthStateChangeListener} from "./utils/firebase.utils";
import {setCurrentUser} from "./store/user/user.action";

import {useDispatch} from "react-redux";

const App = () => {
  const dispatch = useDispatch();

  useEffect(()=>{
    const unsubscribe = onAuthStateChangeListener((user)=>{
        if(user){
            createUserDocumentFromAuth(user)
        }

        dispatch(setCurrentUser(user));
    })

    return unsubscribe;

  },[dispatch])

  return (
    <Routes>
      <Route path="/" element={<Navigation/>}>
        <Route index element={<Homepage/>}/>
        <Route path="/shop/*" element={<Shop/>} />
        <Route path="/sign-in" element={<SignIn/>} />
        <Route path="/checkout" element={<Checkout/>}/>
      </Route>
    </Routes>
  )
}

export default App;
