import React from "react";
import { useSelector } from "react-redux";

const DivPanel = () => {
    let counterval = useSelector(state => state.counter)
    return (
        <div>
            The present value of counter is {counterval}
        </div>
    );
}

export default DivPanel;
