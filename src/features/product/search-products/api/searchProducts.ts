import { allProducts } from "../../list-products/data/allProducts";
import { ProductItemData } from "../../list-products/types";


export const searchProducts = (search: string): 
Promise<ProductItemData[]> => {// typage de la fonction en promesse
    const filteredProducts = allProducts.filter((product)=>

    product.name.toLocaleLowerCase().includes(search.toLocaleLowerCase()),
  );

  return Promise.resolve(filteredProducts);

  };
