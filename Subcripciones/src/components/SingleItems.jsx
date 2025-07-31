const SingleItem = ({ price, type, id }) => {
  
    const urImage = `/public/images/${type}.svg`;
    // Agregar clase especial si es spotify
    const imgClass = type === "spotify" ? "spotify-logo" : "";
    return (
        <div className="single-item">
            <img src={urImage} alt="Services" className={imgClass} />
            <h3>Precio: {price}</h3>
        </div>
    );
};

export default SingleItem;