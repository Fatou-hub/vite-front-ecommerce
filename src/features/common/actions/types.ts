import { ChangeInCartResponse } from "../../cart/api/cart";
import { CartProductItemData } from "../../cart/list-cart-products/types";
import { ProductData } from "../../product/display-product/types";
import { ProductItemData } from "../../product/list-products/types";

interface ProductsFetchedActionData {
    type: 'products/fetched';
    payload:ProductItemData[];
}

interface ProductsFilteredActionData {
    type : ' products/filtered';
    payload:ProductItemData[];
}

interface ProductFetchedActionData {
    type: 'product/fetched';
    payload:ProductData;
}

interface CarCountFetchedActionData {
    type: 'cartCount/fetched';
    payload: number;
}

interface CartProductsFetchedActionData {
    type: 'cartProducts/fetched';
    payload: CartProductItemData[];
}

interface CartAddedActionData {
    type: 'cart/added';
    payload:ChangeInCartResponse;
}

interface CartRemovedActionData {
    type: 'cart/removed';
    payload:ChangeInCartResponse;
}

export type ActionData = 
| ProductsFetchedActionData
| ProductsFilteredActionData
| ProductFetchedActionData
| CarCountFetchedActionData
| CartProductsFetchedActionData
| CartAddedActionData
| CartRemovedActionData

