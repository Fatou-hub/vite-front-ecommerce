import { ProductData } from "../types";
import { productToDisplay } from "../data/productToDisplay";


export const getProduct =  (productId: string): Promise<ProductData> => {
        const product = productToDisplay[productId];

        return Promise.resolve(product);
    }