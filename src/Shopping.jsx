import React, {useEffect, useState} from "react";
import NavbarEl from "./Navbar";
import useFetch from "./services/useFetch";
import {Card} from "react-bootstrap";
import {Pagination, Button} from "react-bootstrap";
import PageItem from 'react-bootstrap/PageItem'
import Sidebar from "./Sidebar";
import Alerts from "./Alerts";

export default function Shopping() {
    const data = useFetch();
    const [pageActive, setPageActive] = useState(1);
    const [cart, setCart] = useState([]);
    const [showAlert, setShowAlert] = useState(false);

    // Pagination
    let items = [];
    for (let number = 1; number <= data.length / 10; number++) {
        items.push(
            <PageItem key={number} onClick={() => setPageActive(number)} active={number === pageActive}>
                {number}
            </PageItem>,
        );
    }

    function getAction(p){
        setCart([...cart, p]);
        setShowAlert(true);
    }

    useEffect(() => {
         setTimeout(() => showAlert ? setShowAlert(false): null, 3000);
    }, [showAlert]);

    function renderProduct(p) {
        return (
            <Card style={{ width: '16rem' }} className="hoverEl text-center m-5">
                <Card.Img variant="top" src={`/images/${p.filename}`} style={{height: '20rem'}} />
                <Card.Body className="d-flex flex-column justify-content-between">
                    <Card.Title>{p.title}</Card.Title>
                    <Card.Text>{p.description}</Card.Text>
                    <Card.Subtitle>{p.weight}</Card.Subtitle>
                    <Card.Title className="fw-bold">{`${p.price}$`}</Card.Title>
                    <Button variant="primary" onClick={() => getAction(p)}>Aggiungi al carrello</Button>
                </Card.Body>
            </Card>
        )
    }

    return(
        <>
            <NavbarEl />
            <div className="d-flex justify-content-between mt-5">
                <Pagination className="flex-grow-1 justify-content-center">{items}</Pagination>
                <Sidebar cart={cart}/>
            </div>
            <section className="d-flex flex-wrap justify-content-center">
                {data.map((el, index) => index+1 <= pageActive*10 && index + 1 > pageActive*10-10 ? renderProduct(el) : null)}
            </section>
            <Alerts alert={showAlert}/>
        </>
    )
}