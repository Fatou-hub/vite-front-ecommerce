import Button from "./common/design-system/Button";

function App() {

  return (
    <>
    <Button onClick={()=> 
      console.log('Retirer du panier !')}>
        Hello
    </Button>
    <Button 
    variant="contained" 
    onClick={()=> console.log("Ajout au panier ! ")}>
      Ajouter au panier
    </Button>
    </> 
  );
};

export default App;

