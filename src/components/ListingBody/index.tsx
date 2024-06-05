import { useState } from "react";
import { ProductDTO } from "../../models/product";
import * as productService from '../../services/product-service';
import Filter from "./Filter";
import ListItem from "./ListItem";
import './style.css';


export default function ListingBody() {

    const [products] = useState<ProductDTO[]>(productService.listProduct);

    return (
        <>
            <Filter />
            <div className="container-result-list">
                {
                    products.map(
                        product => <ListItem key={product.id} product={product} />
                    )
                }
            </div>
        </>
    )
}