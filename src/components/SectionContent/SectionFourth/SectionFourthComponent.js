import classes from "./SectionFourthComponent.module.scss";
import SectionComponent from "../../UI/Section/SectionComponent";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import imgLeft from "../../../assets/Thumb.svg";
import imgRight from "../../../assets/Thumb2.svg";
import img1 from "../../../assets/clay-macbook-pro-15-with-touch-bar-front-view-mockup 1.png";
import img2 from "../../../assets/Frame12.svg";
import img3 from "../../../assets/Frame14.svg";
import img4 from "../../../assets/clay-macbook-pro-15-with-touch-bar-front-view-mockup 3.png";

import CardComponent from "../../Card/CardComponent";

const text = [
  {
    title: "Tolq",
    description:
      "Tolq is the translation solution built for e-commerce. It provides all pieces of the localization puzzle in one single integrated solution.",
    css: "green",
    img: img1,
  },
  {
    title: "Feedback Labs",
    description:
      "Feedback Labs turns feedback into actionable insights for your team.",
    css: "grey",
    img: img2,
  },
  {
    title: "Codekeeper",
    description:
      "Codekeeper is an all-in-one solution for software developers and publishers to provide source code escrow as part of service level and license agreements.",
    css: "sea",
    img: img3,
  },
  {
    title: "LegalSite",
    description:
      " Protected against legal risks, privacy compliant and always up-to-date with the latest regulatory developments.",
    css: "violet",
    img: img4,
  },
];

const SectionFourthComponent = () => {
  return (
    <SectionComponent>
      <div className={classes.wrapper}>
        <Container fluid>
          <Row>
            <Col>
              <h2 className={classes.title}>Our works</h2>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className={classes.content}>
                {text.map((el, index) => (
                  <CardComponent
                    key={index}
                    title={el.title}
                    src={el.img}
                    text={el.description}
                    css={el.css}
                  />
                ))}
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              {" "}
              <div className={classes.section_second_wrapper}>
                <figure>
                  <img src={imgLeft} alt="img" />
                </figure>
                <h2 className={classes.section_second_title}>
                  Startups create a world that actually is better. Any problem
                  that can be solved, will be solved by a startup, and that is a
                  huge opportunity.
                </h2>
                <figure>
                  <img src={imgRight} alt="img" />
                </figure>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </SectionComponent>
  );
};

export default SectionFourthComponent;
