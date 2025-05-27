import { reducer } from "../reducer";
import { useReducer, PropsWithChildren, ReactElement} from "react";
import { StateContext } from "../state/context/StateContext";
import { DispatchContext } from "../actions/context/DispatchContext";
import { initialState } from "../state/initialState";

export const StoreContextProvider = ({children}: PropsWithChildren):ReactElement => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return(
        <StateContext.Provider value ={state}>
            <DispatchContext.Provider value={dispatch}>
                {children}
            </DispatchContext.Provider>
        </StateContext.Provider>
    )
};

