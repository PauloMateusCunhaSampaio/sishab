import React from "react"

export default function Btn(props) {
    let { txt, click, className } = props

    return (
        <button onClick={click} className={"flex justify-center items-center rounded-lg hover:bg-[#eee] " +className}> {txt} </button>
    );
}