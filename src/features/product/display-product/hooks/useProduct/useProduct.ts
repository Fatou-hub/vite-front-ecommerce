import { useContext, useEffect } from "react";
import { useMatch } from "react-router-dom";
import { StateContext } from "../../../../common/state/context/StateContext";
import { DispatchContext } from "../../../../common/actions/context/DispatchContext";
import type { StateData } from "../../../../common/state/types";
import { getProduct } from "../../api/getProduct";


type UseProductReturn = {
    product: StateData['product'];
};

const useProduct = (): UseProductReturn => {
    const state = useContext(StateContext);
    const dispatch = useContext(DispatchContext);

    const matchProductPage = useMatch('/product/:id');

    if(state === null){ 
        throw new Error ('useProduct must be used within the StateContext Provider');
    }

    if(dispatch === null){
        throw new Error ('useProduct must be used within the DispatchContext Provider');
    }

    const fetchProduct = async (productId: string): Promise<void> =>{
        const product = await getProduct(productId);

        dispatch({
            type: 'product/fetched',
            payload:product,
        });
    };
      
    useEffect(()=> {
        const prodcutIdInURL = matchProductPage?.params.id;

        if(prodcutIdInURL){
            fetchProduct(prodcutIdInURL);
        }
    },[matchProductPage]);

    return {product: state.product};
};

export default useProduct;


