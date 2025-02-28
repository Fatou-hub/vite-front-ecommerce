import Header from "./common/layout/Header";

function App() {
  const onSubmit = (search : string) => {
    console.log(search);
  };

  const cartCount = 2;

  return (
    <Header onSubmit={onSubmit} cartCount={cartCount}/>
  );
};

export default App;

