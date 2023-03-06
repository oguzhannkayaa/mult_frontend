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
import { AiFillHeart,AiOutlineHeart } from "react-icons/ai";


function Products() {

  const [data,setData] = useState([]);
  const [products,setProducts] = useState([]);



  useEffect(() => {
      axios.get("https://localhost:44340/api/categories")
      .then(res => {
          console.log(res.data)
          let response = res.data;
          setData(response);
      })
  },[])

  const getProductByCategoryId = (id) => {
    axios.get("https://localhost:44340/api/products/"+id)
      .then(res => {
          console.log(res.data)
          let response = res.data;
          setProducts(response);
      })
  }

 
      
    return (
        <>
        <div style={{ display: 'flex', flexDirection: 'row', marginLeft: '50px',alignContent:'space-between',alignItems:'center',justifyContent:'center' }}>
          <div>
            <h1 style={{ display: 'flex', flexDirection: 'row', marginLeft: '50px', marginBottom:'50px',alignContent:'space-between',alignItems:'center',justifyContent:'center' }}>Category Types</h1>
            <Card.Group itemsPerRow={4}>
              {data.map((item, index) => (
                <Card key={index}  style={{width:'max-content'}}>
                    <Button onClick={() => getProductByCategoryId(item.id)}>List {item.categoryName}</Button>
                </Card>
              ))}
            </Card.Group>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'row', marginTop: '30px',marginLeft: '30px',alignContent:'space-between',alignItems:'flex-start',justifyContent:'flex-start' }}>
          <Card.Group>
                  {products.map(c => (
                      <Card>
                          <Card.Content>       
                            <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
                            <Card.Header>{c.productName}</Card.Header>
                            <Icon style={{color:"red"}} as={AiOutlineHeart} />
                            </div>               
                              <Card.Meta>{c.storeName}</Card.Meta>
                              <Card.Description>
                                <div style={{display:'flex',flexDirection:'row',alignContent:'space-between',justifyContent:'space-between'}}>
                                  <span>Price : {c?.productPrice} TL</span>
                                  <span>Score : {c.porductScore}</span>
                                  <span>Stock : {c.productStock}</span>                                                                   
                                </div>                                  
                              </Card.Description>
                          </Card.Content>
                          <Card.Content extra>
                              <div className='ui two buttons'   >
                                  <Button basic color='green' onClick={() => window.location.href = c.storeLink}>
                                      Go To {c.storeName}
                                  </Button>                       
                              </div>
                          </Card.Content>
                      </Card>                                          
                  ))}                             
          </Card.Group>  
        </div>
      </>
    )
}

export default Products