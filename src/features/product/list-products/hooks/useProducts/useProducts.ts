import { useContext, useEffect } from 'react';
import { StateContext } from '../../../../common/state/context/StateContext';
import { DispatchContext } from '../../../../common/actions/context/DispatchContext';
import type { StateData } from '../../../../common/state/types';
import { getProducts } from '../../api/getProducts';

type UseProductsReturn = {
    products : StateData['products'];
}

const useProducts = (): UseProductsReturn => {
    const state = useContext(StateContext);
    const dispatch = useContext(DispatchContext);


if(state === null){
    throw new Error('useProducts must be used within the StateContext Provider');
}

if(dispatch === null){
    throw new Error('useProducts must be used within the DispatchContext Provider')
}

const fetchProducts = async(): Promise<void> => { 
    const initialProducts = await  getProducts();
     
    dispatch({
        type:'products/fetched',
        payload: initialProducts,
     });
};

useEffect(()=>{
    fetchProducts();
},[]);

return {products: state.products };
};

export default useProducts;