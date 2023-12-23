import classes from "./ButtonComponent.module.scss";

const ButtonComponent = ({ css, text }) => {
  console.log(`type ${typeof css}`);
  return (
    <button
      className={`${classes.button} ${(css === "full" ? classes.full : "")}`}
    >
      {text}
    </button>
  );
};

export default ButtonComponent;
