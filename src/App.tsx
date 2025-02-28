import Header from "./common/layout/Header";
import ProductItem from "./features/product/list-products/ui/ProductItem";

function App() {
  const onSubmit = (search: string) => {
    console.log(search);
  };

  const cartCount = 2;

  const product = {
    name: 'Diaper new born Baby',
    picture: '',
    price: 1000,
  }

  return (
    <>
      <Header onSubmit={onSubmit} cartCount={cartCount} />
      <ProductItem product={product} />
    </>

  );
};

export default App;

