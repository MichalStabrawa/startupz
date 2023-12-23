import classes from './SectionComponent.module.scss';

const SectionComponent =(props)=> {
 
    return(
        <section className={`${classes.section} ${props.css='grey'?classes.gray:''}`}>{props.children}</section>
    )
}

export default SectionComponent