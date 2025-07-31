import { useState } from "react";

const FormAddSubs = ({ setType, setPrice, type, price, setSubs, subs }) => {
    const [error, setError] = useState(false);

    const handleSubs = (e) => {    
        e.preventDefault();

        if (type === "" || Number(price) < 0) {  
            setError(true);
            return;
        }
        setError(false);

        const data = {
            type: type,
            price: price,
            id: Date.now()
        };
        setSubs([...(subs || []), data]);
        setType("");
        setPrice("");
    };

    return (
        <div className="add subscripcion">
            <h2>Agregar Subcripciones</h2>
            <form onSubmit={handleSubs}>
                <p>Servicios</p>
                <select onChange={e => setType(e.target.value)} value={type}>
                    <option value=""> -- elegir -- </option>
                    <option value="netflix">Netflix</option>
                    <option value="disney">Disney</option>
                    <option value="hbomax">HBO Max</option>
                    <option value="spotify">Spotify</option>
                </select>
                <p>Cantidad</p>
                <input
                    type="number"
                    placeholder="20$"
                    onChange={e => setPrice(e.target.value)}
                    value={price}
                />
                <input type="submit" value="Agregar" />
            </form>
            {error && <p className="error">Campos inválidos</p>}
        </div>
    );
};

export default FormAddSubs;