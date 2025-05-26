import type { StateData } from "./types";
import { allProducts } from "../../product/list-products/data/allProducts";
import { productToDisplay } from "../../product/display-product/data/productToDisplay";

export const initialState: StateData = {
    products : allProducts,
    product : productToDisplay['1'],
    cartProducts : [],
    cartCount : 0,
};