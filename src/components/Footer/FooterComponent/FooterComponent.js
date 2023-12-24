import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import classes from "./FooterComponent.module.scss";
import logo from "../../../assets/logo.svg";
import instagramLogo from "../../../assets/instagram.svg";
import twitterLogo from "../../../assets/twitter.svg";
import lnkdnLogo from "../../../assets/Linkedin.svg";

const FooterComponent = () => {
  return (
    <footer className={classes.footer}>
      <Container fluid>
        <Row>
          <Col sm ={12 } md={6} lg={3}>
            <div className={`${classes.footer_item} ${classes.footer_item_logo}`}>
              <figure className={classes.img_wrapper}>
                <img src={logo} alt="logo" />
              </figure>
              <p className={classes.text}>
                © 2020 Startupz. <br />
                All rights reserved.
              </p>
            </div>
          </Col>

          <Col sm={12} md={6} lg={3}>
            <div className={classes.footer_item}>
              <p className={classes.title}>Companies</p>
              <p>
                <a href="#" className={classes.link}>
                  Tolq
                </a>
              </p>
              <p>
                <a href="#" className={classes.link}>
                  LegalSite
                </a>
              </p>
              <p>
                <a href="#" className={classes.link}>
                  Codekeeper
                </a>
              </p>
              <p>
                <a href="#" className={classes.link}>
                  Feedback Labs
                </a>
              </p>
            </div>
          </Col>
          <Col sm={12} md={6} lg={4}>
            <div className={classes.footer_item}>
              <p className={classes.title}>Contact</p>
              <p className={classes.text}>
                {" "}
                World Trade Center - The Hague Prinses Margrietplantsoen 33 2595
                AM The Hague The Netherlands
              </p>
              <p>
                <a href="#form" className={classes.link}>
                Send us an email
                </a>
              </p>
            </div>
          </Col>
          <Col  sm={12} md={6} lg={2}>
            <div className={classes.footer_item}>
              <p className={classes.title}>Follow us</p>
              <figure>
                <a href="#">
                  {" "}
                  <img src={twitterLogo} alt="instagram" />
                </a>
              </figure>
              <figure>
                <a href="#">
                  {" "}
                  <img src={lnkdnLogo} alt="instagram" />
                </a>
              </figure>
              <figure>
                <a href="#">
                  {" "}
                  <img src={instagramLogo} alt="instagram" />
                </a>
              </figure>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default FooterComponent;
