import { useContext, useEffect } from "react";
import { DispatchContext } from "../../../../common/actions/context/DispatchContext";
import { StateContext } from "../../../../common/state/context/StateContext";
import { StateData } from "../../../../common/state/types";
import { getCartProducts } from "../../../api/cart";

type UseCartProductsreturn = {
    cartProducts: StateData['cartProducts'];
};

const useCartProducts = ():UseCartProductsreturn =>{
    const state = useContext(StateContext);
    const dispatch = useContext(DispatchContext);

    if(state === null){
        throw new Error('useCartProducts must bu used within the StateContext Provider')
    }

    if(dispatch === null){
        throw new Error('useCartProducts must be used within the DispatchContext Provider');
    }

    const fetchCartProducts = async(): Promise<void> => {
        const initialCartPoducts = await getCartProducts();

        dispatch({
            type:'cartProducts/fetched',
            payload:initialCartPoducts,
        });
    };

    useEffect(()=> {
        fetchCartProducts;
    },[]);

    const cartProducts = state.cartProducts;

    return { cartProducts }
}