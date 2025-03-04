import type { ProducItemData } from "./features/product/list-products/types";
import Header from "./common/layout/Header";
import Product from "./features/product/display-product/ui/Product/Product";
import type { ProductData } from "./features/product/display-product/types";
import CartProductTem from "./features/cart/list-cart-products/ui/CartProductItem";
import { cartProductItemData } from "./features/cart/list-cart-products/types";



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


  const product: ProductData = {
    name: "MYBABY Diapers",
    picture: "",
    price: 4,
    description: "These diapers are made for babies from 0 to 6 months. It offers soft and toxic free components for the safety of your baby butt. Our MYBABY diapers respects the sensitiveness of a baby skin especially the down area after doing the duty. Yes there are NO : WITHOUT LOTION, PERFUME, PETROLATUM; TCF cellulose pulp from responsibly managed FSC® certified forests and other controlled sources; Backsheet sails maintenance and acquisition-receiver",
  }

  const addToCart = (): void => {
    console.log('Add to cart');
  }

  const cartProduct : Omit<cartProductItemData, 'id'> = {
    name: 'MYBABY Diapers ',
    picture: '',
    price: 4,
  }

  const removeFromCart = () : void => {
    console.log('Remove from cart');
  }

  return (
    <>
      <Header onSubmit={onSubmit} cartCount={cartCount} />
      <CartProductTem cartProduct={cartProduct} removeFromCart={removeFromCart} />
    </>

  );
};

export default App;

