import React from "react";

const LabelComponent = ({label}) =>
    <li className="list-group-item">
        <h6>{label.title}</h6>
    </li>;

export default LabelComponent