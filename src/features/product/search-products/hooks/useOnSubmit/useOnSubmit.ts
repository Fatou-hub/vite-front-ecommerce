import { useContext } from "react";
import { DispatchContext } from "../../../../common/actions/context/DispatchContext";
import { searchProducts } from "../../api/searchProducts";


const useOnSubmit = () => {
    const dispatch = useContext(DispatchContext);

    if (dispatch === null) {
        throw new Error('useOnSubmit must be used within the DispatchContext Provider');
        }

      const onSubmit = async (search: string): Promise<void> => {
        const filteredProducts = await searchProducts(search);

        dispatch({
          type: 'products/filtered',
          payload:filteredProducts,
        });
      };
      return { onSubmit };
}

export default useOnSubmit;