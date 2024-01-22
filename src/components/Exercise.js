'use client'

import { useState, useEffect } from "react";
import SubLine from "@/components/SubLine";

export default function Exersize({ dataUrl }) {
    const [jsondata, setjsondata] = useState([]);

    useEffect(() => {
        fetchdata();
    }, []);

    function fetchdata() {
        fetch(dataUrl).then(res => {
            res.json().then(data => {
                setjsondata(data);
            });
        });
    }

    return (
        <div id="section-exercise"><ol className="trans">
            {jsondata.map((ln, index) => <SubLine data={ln} key={index} />)}
        </ol></div>
    );
}