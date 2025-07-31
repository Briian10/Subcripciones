const SingleItem = ({ price, type, id }) => {
  
    const urImage = `/images/${type}.png`;
    return (
        <div className="single-item">
            <img src={urImage} alt="Services" />
            <h3>Precio: {price}</h3>
        </div>
    );
};

export default SingleItem;