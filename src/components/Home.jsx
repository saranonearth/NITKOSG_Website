import React, { Component } from 'react';
import { Jumbotron, Container, Row, Col  } from 'reactstrap';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <div>
        <Jumbotron fluid>
          <Container className="my-md-5" fluid>
            <Row>
              <Col sm="12" md="6">
                Open Source Group
              </Col>
              <Col className="d-none d-md-block">
                Open Source Group
              </Col>
            </Row>
          </Container>
      </Jumbotron>
      </div>
     );
  }
}
 
export default Home;