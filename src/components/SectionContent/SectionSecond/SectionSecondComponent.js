import { useState, useEffect } from "react";
import classes from "./SectionSecondComponent.module.scss";
import SectionComponent from "../../UI/Section/SectionComponent";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import imgLeft from "../../../assets/Thumb.svg";
import imgRight from "../../../assets/Thumb2.svg";
import xImg from "../../../assets/x.svg";
import iconImg from "../../../assets/gr30.svg";

const SectionSecondComponent = () => {
  const [flag, setFlag] = useState(false);

  const handleModal = () => {
    setFlag(false);
  };

  useEffect(() => {
    setTimeout(() => {
      setFlag(true);
    }, 800);

    return () => {
      clearTimeout();
    };
  }, []);
  return (
    <SectionComponent>
      <div className={classes.section_second}>
        <Container fluid>
          <Row>
            <Col>
              <div className={classes.section_second_wrapper}>
                <figure>
                  <img src={imgLeft} />
                </figure>

                <h2 className={classes.section_second_title}>
                  We love solving problems!
                </h2>
                <figure>
                  <img src={imgRight} />
                </figure>
              </div>
              {flag && (
                <div className={classes.modal}>
                  <div className={classes.modal_content}>
                    <div className={classes.rectangle}>
                      Hi! I am Ben, your virtual assistant. How can I make your
                      day better?
                    </div>
                    <button onClick={handleModal} className={classes.close}>
                      <img src={xImg} />
                    </button>
                  </div>
                  <div className={classes.modal_icon}>
                    <figure className={classes.modal_icon_wrapper}>
                      <img src={iconImg}></img>
                    </figure>
                  </div>
                </div>
              )}
            </Col>
          </Row>
        </Container>
      </div>
    </SectionComponent>
  );
};

export default SectionSecondComponent;
