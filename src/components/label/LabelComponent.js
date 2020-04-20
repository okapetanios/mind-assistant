import React from "react";

//TODO:
//Add delete functionality
//Add selected functionality

const LabelComponent = ({label, deleteLabel}) =>
    <li className="list-group-item">
        <h6>{label.title}</h6>
    </li>;

export default LabelComponent