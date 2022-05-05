import React, {useState} from "react";
import {Card} from "react-bootstrap";
import "./App.css"
import {Link} from "react-router-dom";


import Footer from "./Footer";


export default function MainPage(){

    return(
        <div className="vh-100 d-flex flex-column justify-content-between">
            {/*header*/}
            <header>
                <h1 className="text-center">SuperMarket App!</h1>
            </header>
        <div className="container">
            {/*Body*/}
                <section className="d-flex flex-wrap justify-content-between">
                    {/*Account card*/}
                    <Link to="/account" className="text-decoration-none text-black">
                        <Card style={{ width: '16rem' }} className="hoverEl text-center">
                            <Card.Img variant="top" src={`images/person_black_24dp.svg`} />
                            <Card.Body>
                                <Card.Title>Account</Card.Title>
                            </Card.Body>
                        </Card>
                    </Link>

                    {/*Cart card*/}
                    <Link to="/carrello" className="text-decoration-none text-black">
                        <Card style={{ width: '16rem' }} className="hoverEl text-center">
                            <Card.Img variant="top" src={`images/shopping_cart_black_24dp.svg`} />
                            <Card.Body>
                                <Card.Title>Carrello</Card.Title>
                            </Card.Body>
                        </Card>
                    </Link>

                    {/*Shopping card*/}
                    <Link to="/shopping" className="text-decoration-none text-black">
                        <Card style={{ width: '16rem' }} className="hoverEl text-center">
                            <Card.Img variant="top"  src={`images/storefront_black_24dp.svg`} />
                            <Card.Body>
                                <Card.Title>Store</Card.Title>
                            </Card.Body>
                        </Card>
                    </Link>
                </section>
            </div>
            <Footer />
        </div>
    )
}