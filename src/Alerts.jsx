import React, {useEffect} from "react";
import {Alert} from "react-bootstrap";


export default function Alerts(props){
    if(props.alert) {
        return(
            <Alert className="position-fixed bottom-0 mb-5 ms-5">
                <p>Prodotto aggiunto al carrello!</p>
            </Alert>
        )
    }
}

