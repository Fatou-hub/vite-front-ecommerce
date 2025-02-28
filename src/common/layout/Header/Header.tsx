import type { ReactElement } from "react";

import ProductSearch from "../../../features/product/search-products/ui/ProductSearch";
import CartCount from "../../../features/cart/display-cart-count/ui/CartCount";


type Props = {
    onSubmit: (search: string) => void;
    cartCount:number;
}

const Header = ({onSubmit, cartCount}: Props): ReactElement => {
    return(
        <header className="p-4 flex flex-col lg:flex-row-reverse lg:items-center justify-center bg-primary ">
            <div className="flex justify-end">
            <CartCount cartCount={cartCount}/>
            </div>

            <div className="flex justify-center w-full lg:w-10/12">
            <ProductSearch onSubmit={onSubmit} />
            </div>
        </header>
    );

};

export default Header;