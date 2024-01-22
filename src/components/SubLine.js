import { useState } from "react";

export default function SubLine({ data }) {
    const [show, setShow] = useState(false);
    return (
        <li>
            <p className="hi" onClick={()=> setShow(!show)}>{data.line[0]}</p>
            <p className={"eng "+(show?"":"hide")}>{data.line[1]}</p>
        </li>
    )
}