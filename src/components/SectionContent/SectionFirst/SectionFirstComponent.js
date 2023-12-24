import classes from "./SectionFirstComponent.module.scss";
import SectionComponent from "../../UI/Section/SectionComponent";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import img from "../../../assets/question.svg";

const SectionFirstComponent = () => {
  return (
    <SectionComponent css="grey">
      <div className={classes.wrapper} id="first">
        <Container fluid>
          <Row>
            <Col xs={10} lg={8}>
              <div className={classes.wrapper_item}>
                <div>
                  <h2 className={classes.title}>Who we are</h2>{" "}
                  <p className={classes.description}>
                    We create products that have innovation and technology at
                    their core.
                    <br /> We value working with talented people that understand
                    the possibilities of today.
                  </p>
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
            <Col lg={4}>
              <div className={classes.card}>
                <p className={classes.card_title}>01</p>
                <p className={classes.card_description}>
                  We develop innovative products, systems and services
                </p>
              </div>
            </Col>
            <Col lg={4}>
              <div className={classes.card}>
                <p className={classes.card_title}>01</p>
                <p className={classes.card_description}>
                  Next we build teams to scale them into companies
                </p>
              </div>
            </Col>
            <Col lg={4}>
              <div className={`${classes.card} ${classes.card_last}`}>
                <p className={classes.card_title}>01</p>
                <p className={classes.card_description}>
                  Each startup solving
                  one problem at a time
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </SectionComponent>
  );
};

export default SectionFirstComponent;
