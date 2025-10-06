import { useContext } from "react";

import { DispatchContext } from "../../../../common/actions/context/DispatchContext";
import { addProductToCart } from "../../../api/cart";

const useAddToCart = () => {
    const dispatch = useContext(DispatchContext);

    if(dispatch === null){
        throw new Error('useAddToCart must be used within the DispatchContext Provider');
    }

    const addToCart = async(productId: string): Promise<void> => {
        const updatedCart = await addProductToCart(productId);

        dispatch({
            type:'cart/added',
            payload:updatedCart,
        });  
    };
    
    return { addToCart};
}

export default useAddToCart;