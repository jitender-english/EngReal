import { useState } from "react";

export default function SubLineEng({ data }) {
    const [show, setShow] = useState(false);
    return (
        <li onClick={()=> setShow(true)}>
            <p className="hi">{data.line[0]}</p>
            <p className={"eng "+(show?"":"hide")}>{data.line[1]}</p>
        </li>
    )
}