import { useState } from "react";
import CartModal from "./components/Cart/CartModal";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import CartStoreItem from "./components/store/CartStoreItem";

function App() {

  const [showCart,setShowCart] = useState(false)

  const ShowCartHandler=()=>{
    setShowCart(true)
  }

  const hideCartHandler=()=>{
    setShowCart(false)
  }
  return (
    <CartStoreItem>
      {showCart && <CartModal onHideCart={hideCartHandler}/>}
      <Header onShowCart={ShowCartHandler} />
      <main>
        <Meals />
      </main>
    </CartStoreItem>
  );
}

export default App;
