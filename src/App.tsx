import { useState, ReactElement, useEffect } from "react";
import type { ProductItemData } from "./features/product/list-products/types";
import Header from "./common/layout/Header";
import Product from "./features/product/display-product/ui/Product/Product";
import type { ProductData } from "./features/product/display-product/types";
import { CartProductItemData } from "./features/cart/list-cart-products/types";
import CartProductList from "./features/cart/list-cart-products/ui/CartProductList";
import { Routes, Route, useMatch } from "react-router-dom";
import ProductList from "./features/product/list-products/ui/ProductList";



function App(): ReactElement {
  const productToDisplay: Record<string, ProductData> = {
    '1':{
      id:"1",
      name: "MYBABY Premium Diapers",
      picture: "",
      price: 5,
      description:"These diapers are made for babies from 12 to 28 months. It offers soft and toxic free components for the safety of your baby butt. Our MYBABY diapers respects the sensitiveness of a baby skin especially the down area after doing the duty. Yes there are NO : WITHOUT LOTION, PERFUME, PETROLATUM; TCF cellulose pulp from responsibly managed FSC® certified forests and other controlled sources; Backsheet sails maintenance and acquisition-receiver",
    },
    '2':{
      id:"2",
      name: 'MYBABY Gentle wipes',
      picture: '',
      price: 2,
      description:"It is made for newborns, babies, and toddlers, Fragrance Free, Hypoallergenic, Safe for sensitive skin ",
    },
    '3':{
      id:"3",
      name: 'MYBABY Pants',
      picture: '',
      price: 10,
      description:"Up to 100% leakproof protection with Dual Leak-Guard Barriers 360 stretchy waistband, Soft and comfy, underwear like fit, Dermatologically tested and hypoallergenic",
    },
    '4':{
      id:"4",
      name: 'MYBABY Diapers',
      picture: '',
      price: 10,
      description:" Up to 100% leakproof protection with Dual Leak-Guard Barriers 360 stretchy waistband, Soft and comfy, underwear like fit, Dermatologically tested and hypoallergenic",
    },
  }

  const productToAddToCart: Record<string, CartProductItemData> = {

    '1':{
      id:'1',
      name: 'MYBABY Premium Diapers',
      picture: '',
      price: 5,
    },
    '2':{
      id:'2',
      name: 'MYBABY Gentle wipes',
      picture: '',
      price: 2,
    },
   '3': {
      id:'3',
      name: 'MYBABY Pants',
      picture: '',
      price: 10,
    }, 
    '4': {
      id:'4',
      name: 'MYBABY Diapers',
      picture: '',
      price: 10,
    },
  }

  const allProducts : ProductItemData[] = [
    {
      id: '1',
      name: ' MYBABY Premium Diapers',
      picture: '',
      price: 5,
    },
    {
      id: '2',
      name: 'MYBABY Gentle Wipes',
      picture: '',
      price: 50,
    },
    {
      id: '3',
      name: 'MYBABY Pants',
      picture: '',
      price: 34,
    },
    {
      id: '4',
      name: 'MYBABY Diapers',
      picture: '',
      price: 20,
    },
  ]

  const [products, setProducts] = useState<ProductItemData[]>(allProducts);
  const [product, setProduct] = useState<ProductData>(productToDisplay['1']);
  const [cartProducts, setCartProducts] = useState<CartProductItemData[]>([]);
  
  const matchProductPage = useMatch('/product/:id');

  const onSubmit = (search: string): void => {
    const filteredProducts = allProducts.filter((product)=>

    product.name.toLocaleLowerCase().includes(search.toLocaleLowerCase()),
  );
  setProducts(filteredProducts);
  };

  const cartCount = 2;

  const addToCart = (productId: string): void => {
    const isProductInCart = cartProducts.some((product)=> 
      product.id === productId);

    if(!isProductInCart){
      const productToAdd = productToAddToCart[productId];

      setCartProducts([...cartProducts, productToAdd]);
    }
  };

  const removeFromCart = (productId: CartProductItemData['id']) : void => {
    const cartProductWithoutTheRemovedOne = cartProducts.filter(
      (cartProduct) => cartProduct.id !== productId,
    );

     setCartProducts(cartProductWithoutTheRemovedOne);
  }

const changeURL = (productId: string): void =>{
  setProduct(productToDisplay[productId]);
}

  useEffect(()=>{
    const ProductIdInURL = matchProductPage?.params.id;

    if(ProductIdInURL){
      changeURL(ProductIdInURL);
    }
  }, [matchProductPage]);


  return (
    <>
      <Header onSubmit={onSubmit} cartCount={cartCount} />
      <Routes>
        
        <Route path="/" element={<ProductList products={products}/>}/>

        <Route path="/product/:id" element={<Product product={product} addToCart={()=> addToCart(product.id)}/>}/>

        <Route path="/cart" element={<CartProductList cartProducts={cartProducts} removeFromCart={removeFromCart}/>}/>

      </Routes>
    </>

  );
};

export default App;

