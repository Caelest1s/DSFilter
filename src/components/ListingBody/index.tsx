import { useEffect, useState } from "react";
import { ProductDTO } from "../../models/product";
import * as productService from '../../services/product-service';
import Filter from "./Filter";
import ListItem from "./ListItem";
import './style.css';

type FormPrice = {
    min: number;
    max: number;
}

export default function ListingBody() {

    const [products, setProducts] = useState<ProductDTO[]>(productService.listProduct);

    const [formPrice, setFormPrice] = useState<FormPrice>({
        min: 0,
        max: 1999
    });

    useEffect(() => {
        setProducts(productService.findByPrice(formPrice.min, formPrice.max));
    }, [formPrice.min, formPrice.max]);

    return (
        <>
            <Filter />
            <div className="container-result-list">
                {
                    products.map(
                        product =>
                            <ListItem key={product.id} product={product} />
                    )
                }
            </div>
        </>
    )
}