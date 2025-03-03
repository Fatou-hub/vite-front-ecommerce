import type { ReactElement } from "react";
import { ProducItemData } from "../../types";
import ProductItem from "../ProductItem";

type Props = {
    products: ProducItemData[];
}

const ProductList = ({ products }: Props): ReactElement =>{
    return(
        <div className="flex flex-col items-center sm:flex-row sm:flex-wrap sm:justify-center">
            {products.map((product)=> {
                const { id, ...productWithoutId } = product;
            
               return <ProductItem key={id} product={productWithoutId}/>;
            })}
        </div>
    )
};

export default ProductList;