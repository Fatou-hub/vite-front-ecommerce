import { useState, ReactElement, useEffect } from "react";
import type { ProductItemData } from "./features/product/list-products/types";
import Header from "./common/layout/Header";
import Product from "./features/product/display-product/ui/Product/Product";
import type { ProductData } from "./features/product/display-product/types";
import { CartProductItemData } from "./features/cart/list-cart-products/types";
import CartProductList from "./features/cart/list-cart-products/ui/CartProductList";
import { Routes, Route, useMatch } from "react-router-dom";
import ProductList from "./features/product/list-products/ui/ProductList";
import { allProducts } from "./features/product/list-products/data/allProducts";
import { productToAddToCart } from "./features/cart/add-cart-product/data/productToAddToCart";
import { productToDisplay } from "./features/product/display-product/data/productToDisplay";


function App(): ReactElement {

  
  const [products, setProducts] = useState<ProductItemData[]>(allProducts);
  const [product, setProduct] = useState<ProductData>(productToDisplay['1']);
  const [cartProducts, setCartProducts] = useState<CartProductItemData[]>([]);
  const [cartCount, setCartCount] = useState<number>(0);
  
  const matchProductPage = useMatch('/product/:id');

  const onSubmit = (search: string): void => {
    const filteredProducts = allProducts.filter((product)=>

    product.name.toLocaleLowerCase().includes(search.toLocaleLowerCase()),
  );
  setProducts(filteredProducts);
  };

  const addToCart = (productId: string): void => {
    const isProductInCart = cartProducts.some((product)=> 
      product.id === productId);

    if(!isProductInCart){
      const productToAdd = productToAddToCart[productId];

      setCartProducts([...cartProducts, productToAdd]);
      setCartCount(cartCount + 1);
    }
  };

  const removeFromCart = (productId: CartProductItemData['id']) : void => {
    const cartProductWithoutTheRemovedOne = cartProducts.filter(
      (cartProduct) => cartProduct.id !== productId,
    );

     setCartProducts(cartProductWithoutTheRemovedOne);
     setCartCount(cartCount - 1);
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

