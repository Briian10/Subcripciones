import { useState } from "react";

const FormAddSubs = ({ setType, setPrice, type, price }) => {
      setError(true);

    const [error, setError] = useState(false);

    const handleSubs = (e) => {    
        e.preventDefault();

        if (type === "" || Number(price) < 0) {  
            setError(true);
            return;
        }
        setError(false);
        console.log(type);
        console.log(price);
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
                    <option value="amazon">Amazon</option>
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
                {error && <p style={{color: "red"}}>Completa todos los campos correctamente.</p>}
            </form>
        </div>
    );
};

export default FormAddSubs;