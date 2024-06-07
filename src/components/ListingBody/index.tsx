import { useContext, useEffect, useState } from "react";
import { ProductDTO } from "../../models/product";
import * as productService from '../../services/product-service';
import { ContextCountItem } from "../../utils/context-count";
import Filter from "./Filter";
import ListItem from "./ListItem";
import './style.css';

type FormPrice = {
    min: number;
    max: number;
}

export default function ListingBody() {

    const [products, setProducts] = useState<ProductDTO[]>(productService.listProduct);

    const [price, setPrice] = useState<FormPrice>({
        min: 0,
        max: Number.MAX_VALUE
    });

    const { setContextCountItem } = useContext(ContextCountItem);

    useEffect(() => {
        const filterProducts = productService.findByPrice(price.min || 0, price.max || Number.MAX_VALUE);
        setProducts(filterProducts);
        setContextCountItem(filterProducts.length);
    }, [price]);

    function handleFilterPrice(prices: FormPrice) {
        setPrice(prices);
    }

    return (
        <>
            {/* This view listining this event onFilter through the method */}
            <Filter onFilter={handleFilterPrice} />
            {
                products.length > 0 &&
                <div className="container-result-list">
                    {
                        products.map(
                            product =>
                                <ListItem key={product.id} product={product} />
                        )
                    }
                </div>
            }
        </>
    )
}