import classes from './SectionComponent.module.scss';

const SectionComponent =(props)=> {
 const {css}=props;
    return(
        <section className={`${classes.section} ${classes[css]}`}>{props.children}</section>
    )
}

export default SectionComponent
