import React, { Component } from 'react';
import {
  Card,
  Button,
  CardImg,
  CardTitle,
  Container,
  CardText,
  CardColumns,
  CardSubtitle,
  CardBody
} from 'reactstrap';
import WOW from 'wowjs';

class Projects extends Component {
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
        <h1 className='text-center wow pulse' style={{ fontSize: '10vw' }}>
          Projects
        </h1>
        <Container>
          <CardColumns>
            <Card className='wow slideInUp'>
              <CardImg
                top
                width='100%'
                src='https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180'
                alt='Card image cap'
              />
              <CardBody>
                <CardTitle>Project Title</CardTitle>
                <CardSubtitle>By XYZ</CardSubtitle>
                <CardText>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </CardText>
                <Button>View on Github</Button>
              </CardBody>
            </Card>

            <Card className='wow slideInUp'>
              <CardImg
                top
                width='100%'
                src='https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180'
                alt='Card image cap'
              />
            </Card>

            <Card className='wow slideInUp'>
              <CardBody>
                <CardTitle>Project Title</CardTitle>
                <CardSubtitle>By XYZ</CardSubtitle>
                <CardText>
                  This card has supporting text below as a natural lead-in to
                  additional content.
                </CardText>
                <Button>View on Github</Button>
              </CardBody>
            </Card>

            <Card
              className='wow slideInUp'
              body
              inverse
              style={{ backgroundColor: '#333', borderColor: '#333' }}
            >
              <CardTitle>Getting started MANUAL</CardTitle>
              <CardText>
                With supporting text below as a natural lead-in to additional
                content.
              </CardText>
              <Button>View on Github</Button>
            </Card>

            <Card className='wow slideInUp'>
              <CardImg
                top
                width='100%'
                src='https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180'
                alt='Card image cap'
              />
              <CardBody>
                <CardTitle>Project 3</CardTitle>
                <CardSubtitle>By XYZ</CardSubtitle>
                <CardText>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This card has even longer
                  content than the first to show that equal height action.
                </CardText>
                <Button>View on Github</Button>
              </CardBody>
            </Card>
            <Card body inverse className='wow slideInUp'>
              <CardTitle>Project Title</CardTitle>
              <CardText>
                With supporting text below as a natural lead-in to additional
                content.
              </CardText>
              <Button color='secondary'>View on Github</Button>
            </Card>

            <Card body inverse className='wow slideInUp'>
              <CardTitle>Project Title</CardTitle>
              <CardText>
                With supporting text below as a natural lead-in to additional
                content.
              </CardText>
              <Button color='secondary'>View on Github</Button>
            </Card>

            <Card className='wow slideInUp'>
              <CardImg
                top
                width='100%'
                src='https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180'
                alt='Card image cap'
              />
              <CardBody>
                <CardTitle>Project Tile</CardTitle>
                <CardSubtitle>By ZYX</CardSubtitle>
                <CardText>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </CardText>
                <Button>View on Github</Button>
              </CardBody>
            </Card>
            <Card
              body
              inverse
              style={{ backgroundColor: '#333', borderColor: '#333' }}
              className='wow slideInUp'
            >
              <CardTitle> Project Title</CardTitle>
              <CardText>
                With supporting text below as a natural lead-in to additional
                content.
              </CardText>
              <Button>View on Github</Button>
            </Card>

            <Card className='wow slideInUp'>
              <CardImg
                top
                width='100%'
                src='https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180'
                alt='Card image cap'
              />
              <CardBody>
                <CardTitle>Project Title</CardTitle>
                <CardSubtitle>By XYZ</CardSubtitle>
                <CardText>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This card has even longer
                  content than the first to show that equal height action.
                </CardText>
                <Button>View on Github</Button>
              </CardBody>
            </Card>
            <Card body inverse>
              <CardTitle>Project Title</CardTitle>
              <CardText>
                With supporting text below as a natural lead-in to additional
                content.
              </CardText>
              <Button color='secondary'>View on Github</Button>
            </Card>
          </CardColumns>
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

export default Projects;
