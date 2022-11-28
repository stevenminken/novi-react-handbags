import React from "react";

function Tile(props) {
    // Ternary conditie geeft alleen de h2 of p terug
    // Image path doet het niet
    // Meerder paragrafen (nog) niet mogelijk
    return (
        <>
            <section>
                {props.image !== "" ? <img src={props.image}/> :
                    <h2>{props.title}</h2> &&
                    <p>{props.text}</p>}
            </section>
        </>
    );
}

export default Tile;