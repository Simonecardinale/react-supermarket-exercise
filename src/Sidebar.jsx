import {Badge, Button, Offcanvas} from "react-bootstrap";
import {useState} from "react";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CheckIcon from '@mui/icons-material/Check';
import './App.css'


export default function Sidebar(props) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    let initialValue = 0;
    const total = props.cart.map(el => el.price).reduce((prevValue, currValue) => prevValue + currValue, initialValue);

    function renderProducts(p){
        return (
            <div>
                <ul>
                    <li className="d-flex align-items-center hoverEl">
                        <div>
                            <CheckIcon className="text-success" />
                            <img className="mx-3 widthImages" src={`/images/${p.filename}`} />
                        </div>
                        <div className="d-flex flex-column justify-content-center">
                            <p className="mb-0">{p.title}</p>
                            <p className="mb-0 fw-bold">{`${p.price}$`}</p>
                        </div>
                    </li>
                </ul>
            </div>
        )
    }

    return (
        <>
            <Button variant="light" className="me-5 position-fixed end-0 p-2" onClick={handleShow}>
                <ShoppingCartIcon fontSize="large" />
                <Badge className="position-absolute" pill bg="dark">
                    {props.cart.length}
                </Badge>
            </Button>

            <Offcanvas placement="end" show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Carrello</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    {props.cart.map(renderProducts)}
                    <div className="d-flex mt-5">
                        <h5>Totale:</h5>
                        <h5 className="text-success ms-3 fw-bold">{`${total.toFixed(2)}$`}</h5>
                    </div>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}