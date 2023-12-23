import classes from "./ButtonComponent.module.scss";

const ButtonComponent = ({ css, text,click }) => {
  console.log(`type ${typeof css}`);
  return (
    <button onClick={click}
      className={`${classes.button} ${(css === "full" ? classes.full : "")}`}
    >
      {text}
    </button>
  );
};

export default ButtonComponent;
