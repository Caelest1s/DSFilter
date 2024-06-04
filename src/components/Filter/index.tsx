import './style.css';

export default function Filter() {
    return (
        <div className="dsc-filter">
            <input type="text" placeholder="Preço mínimo" />
            <input className="mt-20" type="text" placeholder="Preço máximo" />
            <button className="mt-20">Filtrar</button>
        </div>
    );
}