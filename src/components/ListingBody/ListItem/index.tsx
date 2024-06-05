import { ProductDTO } from '../../../models/product';
import './style.css';

type Props = {
    product: ProductDTO;
}

export default function ListItem({ product }: Props) {

    return (
        <>
            <div className="dsf-output-item mb-10">
                <output className="dsf-output-item-name">
                    {product.name}
                </output>
                <output className="dsf-output-item-value">
                    R$ {product.price.toFixed(2)}
                </output>
            </div>
        </>
    );
}