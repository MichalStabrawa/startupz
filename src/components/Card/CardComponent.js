import classes from './CardComponent.module.scss';
import ButtonComponent from '../UI/Button/ButtonComponent';

const CardComponent = ({title,css,text,src})=> {
 

    return(
        <div className={classes.card}>
            <h2 className={`${classes.title} ${classes[css]}`}>{title}</h2>
            <p className={classes.description}>{text}</p>
            <img src={src} alt={title}/>
            <div className={classes.btn_wrapper}>
                <ButtonComponent text="more"/>
            </div>
        </div>
    )
}

export default CardComponent;