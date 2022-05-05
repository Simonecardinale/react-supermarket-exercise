import React, {useEffect, useState} from "react";
import NavbarEl from "./Navbar";
import useFetch from "./services/useFetch";
import {Badge, Card, Offcanvas} from "react-bootstrap";
import {Pagination, Button} from "react-bootstrap";
import PageItem from 'react-bootstrap/PageItem'
import Alerts from "./Alerts";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CheckIcon from "@mui/icons-material/Check";
import DeleteIcon from "@mui/icons-material/Delete";

export default function Shopping(props) {
    const data = useFetch();
    const [pageActive, setPageActive] = useState(1);
    const [cart, setCart] = useState([]);
    const [showAlert, setShowAlert] = useState(false);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const deleteItem = (index) => {
        setCart(item => item.filter((el, i) => i !== index));
    };
    const deleteAll = () => setCart([]);


    let initialValue = 0;
    const total = cart.map(el => el.price).reduce((prevValue, currValue) => prevValue + currValue, initialValue);


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

    useEffect(() => {
        props.shareDataToCart(cart)
    }, [cart])

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
                <Button variant="light" className="me-5 position-fixed end-0 p-2" onClick={handleShow}>
                    <ShoppingCartIcon fontSize="large" />
                    <Badge className="position-absolute" pill bg="dark">
                        {cart.length}
                    </Badge>
                </Button>

                <Offcanvas placement="end" show={show} onHide={handleClose}>
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title>Carrello</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <div>
                            {cart.map((el, index) => (
                                <div>
                                    <ul>
                                        <li className="d-flex justify-content-between align-items-center hoverEl">
                                            <div className="d-flex">
                                                <div>
                                                    <CheckIcon className="text-success" />
                                                    <img className="mx-3 widthImages" src={`/images/${el.filename}`} />
                                                </div>
                                                <div className="d-flex flex-column justify-content-center">
                                                    <p className="mb-0">{el.title}</p>
                                                    <p className="mb-0 fw-bold">{`${el.price}$`}</p>
                                                </div>
                                            </div>
                                            <DeleteIcon role="button" onClick={() => deleteItem(index)}>delete</DeleteIcon>
                                        </li>
                                    </ul>
                                </div>
                            ))}
                        </div>
                        <div className="d-flex mt-5">
                            <h5>Totale:</h5>
                            <h5 className="text-success ms-3 fw-bold">{`${total.toFixed(2)}$`}</h5>
                        </div>
                        <button className="btn btn-danger d-block" onClick={() =>  deleteAll()}>Cancella tutto</button>
                    </Offcanvas.Body>
                </Offcanvas>
            </div>
            <section className="d-flex flex-wrap justify-content-center">
                {data.map((el, index) => index+1 <= pageActive*10 && index + 1 > pageActive*10-10 ? renderProduct(el) : null)}
            </section>
            <Alerts alert={showAlert}/>
        </>
    )
}