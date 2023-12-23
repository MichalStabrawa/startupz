import classes from "./HeaderComponent.module.scss";

import NavComponent from "../Nav/NavComponent";
import ButtonComponent from "../UI/Button/ButtonComponent";

const HeaderComponent = () => {
  return (
    <header className={classes.header}>
      <NavComponent />
      <div className={classes.header_wrapper}>
        <h1 className={classes.header_title}>We Create Startups.</h1>
        <p className={classes.header_description}>We are startup studio that develops and launches new companies.</p>
        <ButtonComponent css="full" text="See our works"/>
      </div>
    </header>
  );
};

export default HeaderComponent;
