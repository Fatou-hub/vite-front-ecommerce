import Button from "../../../../../common/design-system/Button";
import type { ReactElement } from 'react';

type Props = {
    addToCart: () => void;
};

const AddCartButton = ({ addToCart} : Props): ReactElement => {
    return(
        <Button variant="contained" onClick={addToCart} color='#a7f1ea'>
            Ajouter au panier
        </Button>
    );
};

export default AddCartButton;