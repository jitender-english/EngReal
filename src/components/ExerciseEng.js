'use client'

import { useState, useEffect } from "react";
import SubLineEng from "@/components/SubLineEng";

export default function ExerciseEng({ dataUrl }) {
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
            {jsondata.map((ln, index) => <SubLineEng data={ln} key={index} />)}
        </ol></div>
    );
}