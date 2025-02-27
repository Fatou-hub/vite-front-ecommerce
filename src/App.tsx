import CartCount from "./features/cart/display-cart-count/ui/CartCount";

function App() {
  return (
    <div className="mt-3">
      <CartCount cartCount={3}/>
    </div>
  );
};

export default App;

