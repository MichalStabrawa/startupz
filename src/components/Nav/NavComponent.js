import { useState } from "react";

import classes from "./NavComponent.module.scss";

import Logo from "../../assets/logo.svg";
import ButtonComponent from "../UI/Button/ButtonComponent";
import ButtonHamburger from "../UI/Button/ButtonHamburger/ButtonHamburger";



const NavComponent = () => {
  const [flag,setFlag] = useState(false)

  const handleButton =()=> {
    alert('Do something')
  }

  const handleButtonBurger = () => {
    setFlag(!flag)
    console.log(flag)
  }
  return (
    <nav className={classes.nav}>
      
      <figure className={classes.logo_wrapper}>
        <img src={Logo} alt="startupz logo"></img>
      </figure>
     <ButtonHamburger click={handleButtonBurger} active={flag?'active':''}/>
      <ul className={`${classes.list} ${flag?classes.list_active:''}`}>
        <li><a href="#first">Startups</a></li> <li><a href="#first">Content</a></li>{" "}
        <li>
          <ButtonComponent click={handleButton} text="Work with us!" >Primary</ButtonComponent>
        </li>
      </ul>
    </nav>
  );
};

export default NavComponent;
