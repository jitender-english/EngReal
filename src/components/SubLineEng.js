import { useState } from "react";

export default function SubLineEng({ data }) {
    const [show, setShow] = useState(false);
    return (
        <li>
            <p className="hi" onClick={()=> setShow(!show)}>{data.line[1]}</p>
            <p className={"eng "+(show?"":"hide")}>{data.line[0]}</p>
        </li>
    )
}