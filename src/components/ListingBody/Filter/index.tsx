import { useState } from 'react';
import './style.css';

type FormPrice = {
    min?: number;
    max?: number;
}

export default function Filter() {

    const [formPrice, setFormPrice] = useState<FormPrice>({
        min: undefined,
        max: undefined
    });

    function handleInputChange(event: any) {
        const value = event.target.value;
        const name = event.target.name;

        setFormPrice({ ...formPrice, [name]: value });
    }

    function handleSubmitFilter(event: any) {
        event.preventDefault();
        console.log(formPrice.min || 0);
        console.log(formPrice.max || Number.MAX_VALUE);
    }

    return (
        <div className="dsc-filter">
            <form onSubmit={handleSubmitFilter}>
                <input
                    name="min"
                    value={formPrice.min || ""}
                    type="text"
                    placeholder="Preço mínimo"
                    onChange={handleInputChange}
                /><br />
                <input
                    name="max"
                    value={formPrice.max || ""}
                    type="text"
                    placeholder="Preço máximo"
                    className="mt-20"
                    onChange={handleInputChange}
                /><br />

                <button className="mt-20" type="submit"> Filtrar </button>
            </form>
        </div>
    );
}