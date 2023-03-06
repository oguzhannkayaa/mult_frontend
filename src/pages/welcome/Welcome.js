import axios from "axios";
import React, { useEffect, useState } from "react";
import {
    Card,
    Icon,
    Modal,
    Image,
    Button,
    Form,
    Input,
    Select,
    Breadcrumb,
} from "semantic-ui-react";
import { API_URL } from "../../config/config";
import "./welcome.css";
import stores from "../../assets/images/stores.jpg"
import products from "../../assets/images/products.jpg"
import events from "../../assets/images/events.jpg"
import { useNavigate } from "react-router-dom";


const Welcome = () => {
    const navigate = useNavigate();

    return (
        <>
            <div style={{display:'flex',flexDirection:'row',alignContent:'space-between',alignItems:'center',justifyContent:'center'}}>
                <div style={{ margin:'100px'}} >
                    <Card.Group>
                        <Card>
                            <Card.Content>
                                <Image
                                    floated='right'
                                    size='large'
                                    src={stores}
                                />
                                <Card.Header>Stores</Card.Header>
                                <Card.Meta></Card.Meta>
                                <Card.Description>
                                    Many stores waitings for you Adidas, Walmart, Nike and so on...
                                </Card.Description>
                            </Card.Content>
                            <Card.Content extra>
                                <div className='ui two buttons'   >
                                    <Button basic color='green' onClick={() => navigate("/stores")}>
                                        Go By Stores
                                    </Button>
                                   
                                </div>
                            </Card.Content>
                        </Card>

                        
                        <Card>
                            <Card.Content>
                                <Image
                                    floated='right'
                                    size='large'
                                    src={products}
                                />
                                <Card.Header>Products</Card.Header>
                                <Card.Meta></Card.Meta>
                                <Card.Description>
                                    The best products you wants Cars, Bikes, Phones, Tablets and so on.
                                </Card.Description>
                            </Card.Content>
                            <Card.Content extra>
                                <div className='ui two buttons'>
                                    <Button basic color='green' onClick={() => navigate("/products")}>
                                        Go By Products
                                    </Button>
                                   
                                </div>
                            </Card.Content>
                        </Card>

                        <Card>
                            <Card.Content>
                                <Image
                                    floated='right'
                                    size='large'
                                    src={events}
                                />
                                <Card.Header>Events</Card.Header>
                                <Card.Meta></Card.Meta>
                                <Card.Description>
                                    The best events are listed in here, lets see..
                                </Card.Description>
                            </Card.Content>
                            <Card.Content extra>
                                <div className='ui two buttons'>
                                    <Button basic color='green'  onClick={() => navigate("/events")}>
                                        Go To Events
                                    </Button>
                                   
                                </div>
                            </Card.Content>
                        </Card>
                     
                    </Card.Group>
                </div>
            </div>
        </>
    );
};

export default Welcome;
