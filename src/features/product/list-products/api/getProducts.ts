import { allProducts } from "../data/allProducts";
import { ProductItemData } from "../types";


export const getProducts = (): Promise<ProductItemData[]> => {// fonction servant UNIQUEMENT à récupéré la liste de produits
    return Promise.resolve(allProducts);
}