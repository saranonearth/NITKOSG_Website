import React, { Component } from 'react';
import { Jumbotron, Container, Row, Col, Media } from 'reactstrap';
import Pic1 from './Images/pic1.png';
import Pic2 from './Images/pic2.png';
import './home.css';
import WOW from 'wowjs';
class Home extends Component {
  componentDidMount() {
    const wow = new WOW.WOW({
      live: false
    });
    wow.init();
  }

  render() {
    return (
      <div className='fp-auto-height-responsive'>
        <div className='md-block home'>
          <Jumbotron>
            <h1 style={{ fontSize: '8vw' }} className='wow pulse'>
              NITKOSG
            </h1>
            <p
              className='lead wow fadeIn text-title'
              style={{ fontSize: '2.3vw' }}
            >
              Open-source Group of NIT Kurukshetra.
            </p>
          </Jumbotron>
        </div>

        <Container>
          <Row>
            <Col sm='12' md='6'>
              <Media>
                <Media left href='./'>
                  <Media
                    className='img-fluid mt-5'
                    object
                    src={Pic1}
                    alt='Who are we image'
                  />
                </Media>
              </Media>
            </Col>

            <Col sm='12' md='6' mt='0'>
              <Media body>
                <Media className='text-center mt-5 media-text' heading>
                  Who are we?
                </Media>
                <p className='md-block text-center block-text'>
                  Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
                  scelerisque ante sollicitudin commodo. Cras purus odio,
                  vestibulum in vulputate at, tempus viverra turpis. Fusce
                  condimentum nunc ac nisi vulputate fringilla. Donec lacinia
                  congue felis in faucibus.
                </p>
              </Media>
            </Col>
          </Row>
        </Container>
        <Container>
          <Row>
            <Col sm='12' md='6'>
              <Media body>
                <Media className='text-center mt-5 media-text ' heading>
                  What do we do?
                </Media>
                <p className='md-block text-center block-text'>
                  Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
                  scelerisque ante sollicitudin commodo. Cras purus odio,
                  vestibulum in vulputate at, tempus viverra turpis. Fusce
                  condimentum nunc ac nisi vulputate fringilla. Donec lacinia
                  congue felis in faucibus.
                </p>
              </Media>
            </Col>
            <Col sm='12' md='6'>
              <Media>
                <Media left href='./'>
                  <Media
                    className='img-fluid mt-5'
                    object
                    src={Pic2}
                    alt='whoWeAre-img'
                  />
                </Media>
              </Media>
            </Col>
          </Row>
        </Container>
        <footer className='p-2  mt-4 text-white '>
          <p className='text-center text-white mb-0 pb-0'>
            NITKOSG &copy; 2019
          </p>
        </footer>
      </div>
    );
  }
}

export default Home;
