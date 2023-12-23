import classes from "./SectionThirdComponent.module.scss";
import SectionComponent from "../../UI/Section/SectionComponent";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import img from "../../../assets/light.svg";

const SectionThirdComponent = () => {
  return (
    <SectionComponent css="grey">
      <div className={classes.wrapper}>
        <Container fluid>
          <Row>
            <Col xs={10} lg={8}>
              <div className={classes.wrapper_item}>
                <div>
                  <h2 className={classes.title}>Our core values</h2>{" "}
                 
                </div>
              </div>
            </Col>
            <Col xs={2} lg={4}>
              {" "}
              <figure>
                <img src={img}  className={classes.question_mark}/>
              </figure>
            </Col>
          </Row>
          <Row>
            <Col lg={7}>
              <div className={classes.card}>
                <p className={classes.card_title}>Innovation</p>
                <p className={classes.card_description}>
                Startupz operates where entrepreneurship and technology intersect. We design solutions and turn them into businesses models.
                </p>
              </div>
            </Col>
            <Col lg={4}>
              <div className={classes.card}>
                <p className={classes.card_title}>01</p>
                <p className={classes.card_description}>
                Talent is what enable us to create great companies.
                </p>
              </div>
            </Col>
        
          </Row>
        </Container>
      </div>
    </SectionComponent>
  );
};

export default SectionThirdComponent;