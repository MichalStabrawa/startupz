import classes from "./ButtonHamburger.module.scss";

const ButtonHamburger = (props) => {
  const {active} = props;
  return (
    <button
      className={`${classes.burger} ${classes[active]} `}
      onClick={props.click}
    >
      <span></span>
      <span></span>
    </button>
  );
};

export default ButtonHamburger;
