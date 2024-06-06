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
        const name = event.target.name;
        const value = event.target.value;
        setFormPrice({ ...formPrice, [name]: value });
    }

    function handleSubmit(event: any) {
        // don't reload page
        event.preventDefault();
        // throw the event of the view ListingBody
        onFilter(formPrice);
    }

    return (
        <div className="dsc-filter">
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Preço mínimo"
                    // mesmo nome da variável (formPrice."min")
                    name="min"
                    value={formPrice.min || ""}
                    onChange={handleInputChange}
                /><br />
                <input
                    // mesmo nome da variável (formPrice."max")
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