import classes from "./NavComponent.module.scss";

import Logo from "../../assets/logo.svg";
import ButtonComponent from "../UI/Button/ButtonComponent";



const NavComponent = () => {

  const handleButton =()=> {
    alert('Do something')
  }
  return (
    <nav className={classes.nav}>
      
      <figure className={classes.logo_wrapper}>
        <img src={Logo} alt="startupz logo"></img>
      </figure>
      <button className={classes.btn_hamburger}>Menu</button>
      <ul className={classes.list}>
        <li>Startups</li> <li>Content</li>{" "}
        <li>
          <ButtonComponent click={handleButton} text="Work with us!" >Primary</ButtonComponent>
        </li>
      </ul>
    </nav>
  );
};

export default NavComponent;
