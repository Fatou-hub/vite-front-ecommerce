import ProductSearch from "./features/product/search-products/ui/ProductSearch";


function App() {
  const onSubmit = (search : string) => {
    console.log(search);
  }

  return (
    <ProductSearch onSubmit={onSubmit}/>
  );
};

export default App;

