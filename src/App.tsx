import Header from "./common/layout/Header";
import ProductList from "./features/product/list-products/ui/ProductList";
import { ProducItemData } from "./features/product/list-products/types";

function App() {
  const onSubmit = (search: string) => {
    console.log(search);
  };

  const cartCount = 2;

  const products: ProducItemData[] = [
    {
      id: '1',
      name: 'Premium Diapers',
      picture: '',
      price: 5,
      },
      {
      id: '2',
      name: 'Gentle Wipes',
      picture: '',
      price: 50,
      },
      {
      id: '3',
      name: 'Diapers Pants',
      picture: '',
      price: 34,
      },
  ];


  return (
    <>
      <Header onSubmit={onSubmit} cartCount={cartCount} />
      <ProductList products={products} />
    </>

  );
};

export default App;

