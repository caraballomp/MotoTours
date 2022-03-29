import React from "react";

function MotorcycleButton({ onClickRotate }) {

    return <button className="button button-primary" onClick={onClickRotate}> Rotate Motorcycles </button>;
};

export default MotorcycleButton;