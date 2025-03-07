import type { ReactElement } from "react";
import { useMediaQuery } from "@mui/material";
import ProductSearch from "../../../features/product/search-products/ui/ProductSearch";
import CartCount from "../../../features/cart/display-cart-count/ui/CartCount";
import { Link } from "react-router-dom";


type Props = {
    onSubmit: (search: string) => void;
    cartCount: number;
}

const Header = ({ onSubmit, cartCount }: Props): ReactElement => {
    return (
        <header className="p-4 bg-primary">
            {useMediaQuery('(max-width: 1023px)') && (
                <>
                    <div className="mb-2 flex justify-between">
                        <Link to="/" className="text-white font-bold">
                            Site
                        </Link>

                        <Link to="/cart">
                        <CartCount cartCount={cartCount} />
                        </Link>
                    </div>
                    <ProductSearch onSubmit={onSubmit} />
                </>
            )}

            {useMediaQuery('(min-width: 1024px)') && (
                <>
                    <div className="flex items-center justify-center gap-4 lg:w-4/5">
                        <Link to="/" className="text-white font-bold">
                            Site
                        </Link>

                        <Link to="/cart">
                        <CartCount cartCount={cartCount} />
                        </Link>
                        
                    </div>
                    <ProductSearch onSubmit={onSubmit} />
                </>
            )}
        </header>
    );

};

export default Header;