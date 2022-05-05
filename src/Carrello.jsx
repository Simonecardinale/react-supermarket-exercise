import React from "react";
import NavbarEl from "./Navbar";
import {Button, Card} from "react-bootstrap";

export default function Carrello(props) {

    return(
        <>
            <NavbarEl />
            <div className="d-flex flex-wrap justify-content-center">
                {props.cartStatus.map (el => (
                    <Card style={{ width: '16rem' }} className="hoverEl text-center m-5">
                        <Card.Img variant="top" src={`/images/${el.filename}`} style={{height: '20rem'}} />
                        <Card.Body className="d-flex flex-column justify-content-between">
                            <Card.Title>{el.title}</Card.Title>
                            <Card.Text>{el.description}</Card.Text>
                            <Card.Subtitle>{el.weight}</Card.Subtitle>
                            <Card.Title className="fw-bold">{`${el.price}$`}</Card.Title>
                        </Card.Body>
                    </Card>
                ))}
            </div>
        </>
    )
}