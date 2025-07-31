import SingleItem from "./SingleItems";

const DisplayItems = ({subs}) => {
    return ( 
        <> 
            <h2>Suscripciones</h2>

            {
                subs.map(item => (
                    <SingleItem key={item.id} id={item.id} price={item.price} type={item.type} />
                ))
            }
        </>
     );
}
 
export default DisplayItems;