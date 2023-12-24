import classes from "./SectionFifthComponent.module.scss";
import SectionComponent from "../../UI/Section/SectionComponent";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ButtonComponent from "../../UI/Button/ButtonComponent";

const SectionFifthComponent = () => {

    const handleButtonClick =()=> {
        alert('Do something !!!!!')
    }
  return (
    <SectionComponent css="grey">
      <div className={classes.main_wrapper}>
        <Container>
          <Row>
            <Col>
              <div className={classes.content}>
                <h2 className={classes.title}>We are hiring!</h2>
                <p className={classes.description}>
                  We're always looking for talented people to join and help
                  build our startups. Check out our current openings
                </p>
                <ButtonComponent click={handleButtonClick} css="full" text="See current openings" />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </SectionComponent>
  );
};

export default SectionFifthComponent;
