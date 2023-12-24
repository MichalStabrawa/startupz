import {useState} from 'react'
import SectionComponent from "../../UI/Section/SectionComponent";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import classes from "./SectionFormComponent.module.scss";
import ButtonComponent from '../../UI/Button/ButtonComponent';

const SectionFormComponent =()=> {
    const [name,setName] = useState('');
    const [email,setEmail] = useState('')
    const [message,setMessage] = useState('')

    return(
        <SectionComponent css="yellow">
            <Container>
                <Row>
                    <Col lg={12}>
                    <div className={classes.form_main} id="form">
                        <h2 className={classes.title}>Are you ready to board this rocket ship?</h2>
                        <p className={classes.description}>Share your excitement with us.</p>
                        <form>
                            <input type="text" placeholder="Name*"/>
                            <input type="email" placeholder="Email*"/>
                            <textarea placeholder="Message*"/>
                            <span>    <ButtonComponent type="submit" text="Shoot us a message" css="submit"/></span>
                       
                        </form>
                    </div>
                    </Col>
                </Row>
            </Container>
        </SectionComponent>
    )
}

export default SectionFormComponent;