import React from "react"

export default function Btn(props) {
    let { txt, click } = props

    return (
        <button onClick={click}> {txt} </button>
    );
}