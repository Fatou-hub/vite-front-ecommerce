import { CartProductItemData } from "../../cart/list-cart-products/types";
import { ProductData } from "../../product/display-product/types";
import { ProductItemData } from "../../product/list-products/types";


export interface StateData {
    products: ProductItemData[];
    product: ProductData;
    cartProducts: CartProductItemData[];
    cartCount: number;
}