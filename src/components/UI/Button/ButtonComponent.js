import classes from "./ButtonComponent.module.scss";

const ButtonComponent = ({ css, text,click }) => {
  console.log(`type ${typeof css}`);
  return (
    <button onClick={click}
      className={`${classes.button} ${ classes[css]}`}
    >
      {text}
    </button>
  );
};

export default ButtonComponent;
