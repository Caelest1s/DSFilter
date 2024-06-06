import { useState } from 'react';
import './style.css';

type FormPrice = {
    min?: number;
    max?: number;
}

type Props = {
    onFilter: Function;
}

export default function Filter({ onFilter }: Props) {

    const [formPrice, setFormPrice] = useState<FormPrice>({
        min: undefined,
        max: undefined
    });

    function handleInputChange(event: any) {
        const value = event.target.value;
        const name = event.target.name;
        setFormPrice({ ...formPrice, [name]: value });
    }

    function handleSubmit(event: any) {
        // para não recarregar a página
        event.preventDefault();
        console.log(formPrice.min || 0);
        console.log(formPrice.max || Number.MAX_VALUE);
        // throw the event
        onFilter(formPrice);
    }

    return (
        <div className="dsc-filter">
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Preço mínimo"
                    // mesmo nome da variável (min)
                    name="min"
                    value={formPrice.min || ""}
                    onChange={handleInputChange}
                /><br />
                <input
                    // mesmo nome da variável (max)
                    type="text"
                    placeholder="Preço máximo"
                    name="max"
                    value={formPrice.max || ""}
                    onChange={handleInputChange}
                    className="mt-20"
                /><br />

                <button className="mt-20" type="submit"> Filtrar </button>
            </form>
        </div>
    );
}