import React, { useState } from "react";
import Balance from "./balance";
import FormAddSubs from "./FormAddSubs";
import DisplayItems from "./DisplayItems";

const MainControl = ({ count }) => {
    const [type, setType] = useState("");
    const [price, setPrice] = useState("");
    const [subs, setSubs] = useState([
      { id: 1, type: "netflix", price: 120 },
      { id: 2, type: "spotify", price: 80 },
      { id: 3, type: "disney", price: 100 }
    ]);

    return (
      <>
        <div className="main-form">
            <Balance count={count} />
            <FormAddSubs
                setType={setType}
                setPrice={setPrice}
                type={type}
                price={price}
                setSubs={setSubs}
                subs={subs}
            />
        </div>
        <DisplayItems subs={subs}/>
     </>
    );
};

export default MainControl;