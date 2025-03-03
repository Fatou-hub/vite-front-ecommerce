import type { ReactElement } from "react";
import { ProducItemData } from "../../types";
import ProductItem from "../ProductItem";

type Props = {
    products: ProducItemData[];
}

const ProductList = ({ products }: Props): ReactElement =>{
    return(
        <div>
            {products.map((product)=> {
                const { id, ...productWithoutId } = product;
            
               return <ProductItem key={id} product={productWithoutId}/>;
            })}
        </div>
    )
};

export default ProductList;