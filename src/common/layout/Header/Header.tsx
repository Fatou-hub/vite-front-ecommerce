import type { ReactElement } from "react";
import ProductSearch from "../../../features/product/search-products/ui/ProductSearch";
import CartCount from "../../../features/cart/display-cart-count/ui/CartCount";
import { Link } from "react-router-dom";

type Props = {
    onSubmit: (search: string) => void;
    cartCount: number;
};

const Header = ({ onSubmit, cartCount }: Props): ReactElement => {
    return (
        <header className="p-4 bg-primary flex items-center justify-between">
            {/* Logo Site */}
            <Link to="/" className="text-white font-bold">
                Site
            </Link>

            {/* Barre de recherche au centre */}
            <div className="flex-grow mx-4"> {/* 'flex-grow' permet de pousser la recherche au centre */}
                <ProductSearch onSubmit={onSubmit} />
            </div>

            {/* Panier à droite */}
            <Link to="/cart" className="text-white">
                <CartCount cartCount={cartCount} />
            </Link>
        </header>
    );
};

export default Header;
