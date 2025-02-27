import RemoveCartButton from "./features/cart/remove-cart-product/ui/RemoveCartButton";

function App() {
  return (
    <>
    <RemoveCartButton removeFromCart={() => console.log('Retirer du panier')} />
    </> 
  );
};

export default App;

