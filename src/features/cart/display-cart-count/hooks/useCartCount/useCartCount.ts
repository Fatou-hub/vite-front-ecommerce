import { useContext, useEffect} from 'react';
import { StateContext } from '../../../../common/state/context/StateContext';
import { DispatchContext } from "../../../../common/actions/context/DispatchContext";
import { getCartCount } from '../../../api/cart';
import type { StateData } from '../../../../common/state/types';

type UseCartCountReturn = {
    cartCount: StateData['cartCount'];
}

const UseCartCount = (): UseCartCountReturn =>{
    const state = useContext(StateContext);
    const dispatch = useContext(DispatchContext);

    if(state === null){
        throw  new Error('useCartCount must be uset within the StateContext provider')
    }
    if(dispatch === null){
        throw new Error('useCartCount must be uset within the DispatchContext provider')
    }
    
    const fetchCartCount = async (): Promise<void> => {
    const initialCartCount = await getCartCount();
    dispatch({
      type:'cartCount/fetched',
      payload:initialCartCount,
    });
  };

    useEffect(() => {
      fetchCartCount();
    }, []);

    return {cartCount: state.cartCount };
}

export default UseCartCount;