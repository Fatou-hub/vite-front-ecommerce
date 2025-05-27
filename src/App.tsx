import type { ReactElement } from 'react';
import { useEffect, useReducer } from 'react';
import { Routes, Route, useMatch } from 'react-router-dom';
import type { CartProductItemData } from './features/cart/list-cart-products/types';
import { getProducts } from './features/product/list-products/api/getProducts';
import { getProduct } from './features/product/display-product/api/getProduct';
import { searchProducts } from './features/product/search-products/api/searchProducts';
import {addProductToCart,getCartCount,getCartProducts, removeProductFromCart} from './features/cart/api/cart';
import Header from './common/layout/Header';
import ProductList from './features/product/list-products/ui/ProductList';
import Product from './features/product/display-product/ui/Product/Product';
import CartProductList from './features/cart/list-cart-products/ui/CartProductList';
import { reducer } from './features/common/reducer';
import { initialState } from './features/common/state/initialState';
import { StoreContextProvider } from './features/common/store/StoreContextProvider';


function App(): ReactElement {
  const [state, dispatch] = useReducer(reducer,initialState );
  const matchHomePage = useMatch('/');
  const matchProductPage = useMatch('/product/:id');
  const matchCartPage = useMatch('/cart');


  const onSubmit = async (search: string): Promise<void> => {
    const filteredProducts = await searchProducts(search);
    dispatch({
      type: 'products/filtered',
      payload:filteredProducts,
    });
  };

  const addToCart = async (productId: string): Promise<void> => {
    const updatedCart = await addProductToCart(productId);
    dispatch({
      type:'cart/added',
      payload:updatedCart,
    });
  };

  const removeFromCart = async (
    productId: CartProductItemData['id'],
  ): Promise<void> => {
    const updatedCart = await removeProductFromCart(productId);

    dispatch({
      type:'cart/removed',
      payload:updatedCart,
    });
  };

  const fetchProduct = async (productId: string): Promise<void> => {
    const product = await getProduct(productId);
    dispatch({
      type:'product/fetched',
      payload:product,
    });
  };

  const fetchProducts = async (): Promise<void> => {
    const initialProducts = await getProducts();
    dispatch({
      type:'products/fetched',
      payload:initialProducts,
    });
  };

  const fetchCartCount = async (): Promise<void> => {
    const initialCartCount = await getCartCount();
    dispatch({
      type:'cartCount/fetched',
      payload:initialCartCount,
    });
  };

  const fetchCartProducts = async (): Promise<void> => {
    const initialCartProducts = await getCartProducts();
    dispatch({
      type:'cartProducts/fetched',
      payload:initialCartProducts,
    });
  };

  useEffect(() => {
    fetchCartCount();
  }, []);

  useEffect(() => {
    if (matchHomePage) fetchProducts();
  }, [matchHomePage]);

  useEffect(() => {
    if (matchCartPage) fetchCartProducts();
  }, [matchCartPage]);

  useEffect(() => {
    const productIdInURL = matchProductPage?.params.id;
    if (productIdInURL) {
      fetchProduct(productIdInURL);
    }
  }, [matchProductPage]);
  

  return (
    <>
    <StoreContextProvider>
      <Header />
        <Routes>
          <Route path="/" element={<ProductList products={state.products} />}
          />
          <Route
            path="/product/:id"
            element={
              <Product
                product={state.product}
                addToCart={() => addToCart(state.product.id)}
              />
            }
          />
          <Route
            path="/cart"
            element={
              <CartProductList
                cartProducts={state.cartProducts}
                removeFromCart={removeFromCart}
              />
            }
          />
        </Routes>
    </StoreContextProvider>
    </>
  );
}
export default App;