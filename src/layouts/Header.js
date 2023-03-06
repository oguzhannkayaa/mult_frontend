import React from "react";

import { Button, Icon } from "semantic-ui-react";
import { Input } from 'semantic-ui-react'
import { BsFillBasket3Fill } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { useNavigate } from "react-router-dom";

import "./header.css";
//

export default function Header() {
  const navigate = useNavigate();

  let accessToken = localStorage.getItem("accessToken");

  return (
    <div className="headerr">
      <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}} >
        <div className="header-top">
          <div className="header_top_logo">
            <a href="/" className="header-logo"> Anything </a> 
          </div>
        </div>
        <Input icon='search' placeholder='Search anything you want...' style={{width:'40%'}} />
        
          {accessToken === null ?
                   ( 
                    <div className="header-top_out">
                    <Button basic color='purple' className="btn">
                     <Icon as={BsFillBasket3Fill} />
                        Basket
                    </Button>
                   <Button  basic color='blue' className="btn" onClick={() => navigate("/login")}>Login</Button>
                    <Button  basic color='red' className="btn" onClick={() => navigate("/register")}>Register</Button>
                    </div>
                    ) :
                    <div className="header-top_out">
                    <Button basic color='purple' className="btn">
                     <Icon as={BsFillBasket3Fill} />
                        Basket
                    </Button>
                     <Button basic color='blue' className="btn">
                     <Icon as={CgProfile} />
                        User
                      </Button>
                    </div>
          }

      </div>
      {/* <section className='header-top_navbar'>
                    <NavbarHeader/>
                </section> */}
      <section className="header-bottom">
        <section className="header-bottom__phone"></section>
      </section>
    </div>
  );
}
