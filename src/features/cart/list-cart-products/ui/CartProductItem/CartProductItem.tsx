import type { ReactElement } from "react";
import { Panorama } from "@mui/icons-material";
import classNames from "classnames";
import type { CartProductItemData } from "../../types";
import RemoveCartButton from "../../../remove-cart-product/ui/RemoveCartButton";


type Props = {
    cartProduct:Omit<CartProductItemData, 'id'>;
    removeFromCart : () => void;
}

const CartProductTem = ({cartProduct:{ name, picture, price }, removeFromCart }:
    Props): ReactElement =>{
        return(
            <div className="flex gap-3 w-full">
                <div className="w-28 h-32 shrink-0">
                    {picture && (
                        <img
                        className="w-full h-full object-contain"
                        src={picture}
                        alt={name}
                        />
                    )}
                    {!picture && (
                        <div className={classNames(
                            'flex',
                            'items-center justify-center',
                            'w-full h-full',
                            'bg-orange-100',
                        )}
                        >
                            <Panorama fontSize='large' color='disabled'/>
                        </div>
                    )}

                </div>
                <div className="w-full flex flex-col justify-between">
                <div className="lg:flex lg:justify-between w-full">
                    <h2>{name}</h2>
                    <p className="text-2xl font-bold">{price}€</p>
                </div>
                <div className="w-fit">
                    <RemoveCartButton removeFromCart={removeFromCart}/>
                </div>
                </div>
                
            </div>
        )
    }

    export default CartProductTem;