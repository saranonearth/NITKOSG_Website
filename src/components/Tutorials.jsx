import React, { Component } from 'react';
import Tutorialcard from './Tutorialcard';
import { Container, CardColumns } from 'reactstrap';
import Media from 'react-media';
import { Tutorialslist } from './Tutorialslist';
import './Tutorials.css';
import WOW from 'wowjs';
class Tutorials extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tutorial: Tutorialslist
    };
  }
  componentDidMount() {
    const wow = new WOW.WOW({
      live: false
    });
    wow.init();
  }

  render() {
    const tut = this.state.tutorial.map((tut, index) => {
      return <Tutorialcard tut={tut} key={index} />;
    });

    return (
      <div>
        <h1 className='text-center wow pulse' style={{ fontSize: '10vw' }}>
          Tutorials
        </h1>

        <Media query={{ maxWidth: 700 }}>
          {matches =>
            matches ? (
              <Container style={{ marginLeft: '1.5rem' }}>
                <CardColumns className='wow fadeIn'>{tut}</CardColumns>
              </Container>
            ) : (
              <Container>
                <CardColumns className='wow fadeIn'>{tut}</CardColumns>
              </Container>
            )
          }
        </Media>

        <footer className='p-2 footer  mt-4 text-white '>
          <p className='text-center text-white mb-0 pb-0'>
            {' '}
            NITKOSG &copy; 2019{' '}
          </p>
        </footer>
      </div>
    );
  }
}

export default Tutorials;
