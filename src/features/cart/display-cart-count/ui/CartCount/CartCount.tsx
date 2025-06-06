import type { ReactElement } from 'react';
import Badge from '@mui/material/Badge';
import ShoppingCart from '@mui/icons-material/ShoppingCart';
import UseCartCount from '../../hooks/useCartCount';


const CartCount = (): ReactElement => {

    const {cartCount } = UseCartCount();

    return (
        <Badge badgeContent={cartCount} showZero color="error">
            <ShoppingCart />
        </Badge>
    )
}

export default CartCount;