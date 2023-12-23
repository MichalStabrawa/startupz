import classes from "./SectionFirstComponent.module.scss";
import SectionComponent from "../../UI/Section/SectionComponent";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const SectionFirstComponent = () => {
  return (
    <SectionComponent css="grey">
      <Container fluid>
        <Row>
          <Col>
            <div className={classes.wrapper}>
              <h2 className={classes.title}>Who we are</h2>
              <p className={classes.description}>
                We create products that have innovation and technology at their
                core. We value working with talented people that understand the
                possibilities of today.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </SectionComponent>
  );
};

export default SectionFirstComponent;
