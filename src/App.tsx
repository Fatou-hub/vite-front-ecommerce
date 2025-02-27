import AddCartButton from "./features/cart/add-cart-product/ui/AddCartButton";

function App() {
  const addToCart = (): void => {
    console.log("call API pour ajouter le produit au panier côté serveur");
    console.log("si le call n’aboutit pas, le message d’erreur est Une erreur est survenue");
  };

  return (
    <>
    <AddCartButton addToCart={addToCart} />;
    </> 
  );
};

export default App;

