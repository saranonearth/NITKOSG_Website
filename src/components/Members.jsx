import React, { Component } from 'react';
import { Row, Col, Container } from 'reactstrap';
import './members.css';
import Membercard from './Membercard';
import { person } from './Memberslist';
import WOW from 'wowjs';

class Members extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: person
    };
  }

  componentDidMount() {
    const wow = new WOW.WOW();
    wow.init();
  }

  render() {
    let memCards = this.state.person.map(mem => {
      return (
        <Col sm='3' md='3' lg='3' className='wow flipInX'>
          <Membercard mem={mem} />
        </Col>
      );
    });
    return (
      <div>
        <Container>
          <h1 className='text-center wow pulse' style={{ fontSize: '10vw' }}>
            {' '}
            Members{' '}
          </h1>
          {/*Members list*/}
          <Row>{memCards}</Row>
        </Container>
        <footer className='p-2  mt-4 text-white '>
          <p className='text-center text-white mb-0 pb-0'>
            {' '}
            NITKOSG &copy; 2019{' '}
          </p>
        </footer>
      </div>
    );
  }
}

export default Members;
