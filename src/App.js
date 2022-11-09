import "./App.css";
import { useState } from "react";
import bakeryData from "./assets/bakery-data.json";
import BakeryItem from "./components/BakeryItem";
import Cart from "./components/Cart";

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */

function App() {
  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */

  const [cart, setCart] = useState([])

  const handleAddToCart = (item) => {
    const tmp = [...cart]
    tmp.push(item)
    setCart(tmp)
  }

  return (
    <div className="App" style={{
      display: 'flex',
      flexDirection: 'row'
    }}>
      <div style={{
        width: '70%',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center'
      }}>
        <h1>My Bakery</h1> {/* TODO: personalize your bakery (if you want) */}

        {bakeryData.map((item, index) => ( // TODO: map bakeryData to BakeryItem components
          <BakeryItem item={item} key={index} addToCart={handleAddToCart} /> // replace with BakeryItem component
        ))}
      </div>

      <div style={{
        width: '30%'
      }}>
        <h2>Cart</h2>
        {/* TODO: render a list of items in the cart */}
        <Cart items={cart} />
      </div>
    </div>
  );
}

export default App;
