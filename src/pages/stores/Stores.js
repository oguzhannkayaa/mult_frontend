import axios, { Axios } from "axios";
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
import hepsiburada from "../../assets/images/hepsiburada.png"

import nike from "../../assets/images/nike.png"
import adidas from "../../assets/images/adidas.png"
import apple from "../../assets/images/apple.jpg"
import media from "../../assets/images/media.png"
import walmart from "../../assets/images/walmart.png"
import watertime from "../../assets/images/watertime.png"



import { useNavigate } from "react-router-dom";

function Stores() {

    const navigate = useNavigate();

    const [data,setData] = useState([]);

    useEffect(() => {
        axios.get("https://localhost:44340/api/Stores")
        .then(res => {
            console.log(res.data)
            let response = res.data;
            setData(response);
        })


    },[])

  return (
    <>
    <div style={{display:'flex',flexDirection:'row', marginLeft:'50px'}}>
        <div>               
        <Card.Group>
                {data.map(c => (
                    <Card>
                        <Card.Content>
                                                                                           
                        <Image
                            floated='right'
                            size='large'
                            src={adidas}
                            href={c.links}
                            />                      
                            <Card.Header>{c.storeName}</Card.Header>
                            <Card.Description>
                                {c?.description}
                            </Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                            <div className='ui two buttons'   >
                                <Button basic color='green' onClick={() => window.location.href = c.links}>
                                    Go {c.storeName}
                                </Button>                       
                            </div>
                        </Card.Content>
                    </Card>                                          
                ))}                             
        </Card.Group>                      
        </div>
    </div>
</>
  )
}

export default Stores