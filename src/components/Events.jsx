import React, { Component } from 'react';
import { Container, Row, Col, Media } from 'reactstrap';
import Pic3 from './Images/pic3.png';
import Pic4 from './Images/pic4.png';
import WOW from 'wowjs';
class Events extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    const wow = new WOW.WOW({
      live: false
    });
    wow.init();
  }
  render() {
    return (
      <div>
        <Container>
          <h1 className='text-center wow pulse' style={{ fontSize: '10vw' }}>
            Events
          </h1>
          <Row>
            <Col sm='12' md='6'>
              <Media>
                <Media left href='./Events'>
                  <Media
                    className='img-fluid mt-5 wow zoomIn'
                    object
                    src={Pic3}
                    alt='Who are we image'
                  />
                </Media>
              </Media>
            </Col>

            <Col sm='12' md='6' mt='0'>
              <Media body>
                <Media
                  className='text-center mt-5 media-text wow fadeInRight '
                  heading
                >
                  GSOC Introduction Workshop
                  <p style={{ fontSize: '20px' }}>Date | Time </p>
                </Media>
                <p className='md-block text-center wow fadeInLeft'>
                  Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
                  scelerisque ante sollicitudin commodo. Cras purus odio,
                  vestibulum in vulputate at, tempus viverra turpis. Fusce
                  condimentum nunc ac nisi vulputate fringilla. Donec lacinia
                  congue felis in faucibus.{' '}
                </p>
              </Media>
            </Col>
          </Row>
          <Row>
            <Col sm='12' md='6' mt='0'>
              <Media body>
                <Media
                  className='text-center mt-5 media-text reverse wow fadeInLeft'
                  heading
                >
                  Github Workshop
                  <p style={{ fontSize: '20px' }}>Date | Time </p>
                </Media>
                <p className='md-block text-center wow fadeInRight'>
                  Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
                  scelerisque ante sollicitudin commodo. Cras purus odio,
                  vestibulum in vulputate at, tempus viverra turpis. Fusce
                  condimentum nunc ac nisi vulputate fringilla. Donec lacinia
                  congue felis in faucibus.{' '}
                </p>
              </Media>
            </Col>

            <Col sm='12' md='6'>
              <Media>
                <Media left href='./Events'>
                  <Media
                    className='img-fluid mt-5 reverse wow zoomIn'
                    object
                    src={Pic4}
                    alt='Who are we image'
                  />
                </Media>
              </Media>
            </Col>
          </Row>
        </Container>
        <footer className='p-2 footer mt-4 text-white '>
          <p className='text-center text-white mb-0 pb-0'>
            {' '}
            NITKOSG &copy; 2019{' '}
          </p>
        </footer>
      </div>
    );
  }
}

export default Events;
