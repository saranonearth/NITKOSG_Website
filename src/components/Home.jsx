import React, { Component } from 'react';
import { Jumbotron, Container, Row, Col, Media  } from 'reactstrap';
import Hero from './hero.jpg';
import Pic1 from './Images/pic1.png';
import Pic2 from './Images/pic2.png';
import './home.css'


class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }



  render() { 
    return ( 
      <div>
                 {/* Header */}
      <div className=" md-block" class="home">     
          <Jumbotron >
          <h1 style={{fontSize:'8vw'}}>NITKOSG</h1>
          <p className="lead" style={{fontSize:'2.3vw'}}>Open-source Group of NIT Kurukshetra.</p>
           </Jumbotron>
      </div>



                {/* Section Part (Img + Text)*/}

        <Container>
            <Row>
             <Col sm="12" md="6">
                <Media>
                        <Media left href="./">
                        <Media className="img-fluid mt-5" object src={Pic1} alt="Who are we image" />
                        </Media>
                      
                  </Media>
             </Col>

              <Col  sm="12" md="6" mt="0">
                 <Media body>
                        <Media className="text-center mt-5 media-text " heading>
                         Who are we? 
                        </Media>
                        <p className="md-block text-center">Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus. </p>
                    </Media>
              </Col>
            </Row>
        </Container>
                      
                      
      
        <Container>
           <Row>
                <Col sm="12" md="6">
                   <Media body>
                        <Media className="text-center mt-5 media-text "  heading>
                         What do we do?
                        </Media>
                        <p className="md-block text-center">Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus. </p>
                        </Media>
                </Col>
                <Col sm="12" md="6">
                <Media>
                        <Media left href="./">
                        <Media className="img-fluid mt-5" object src={Pic2} alt="Who are we image" />
                        </Media>
                      
                  </Media>
             </Col>
           </Row>
        </Container>

         <footer className="p-2  mt-4 text-white ">
        <p className="text-center text-white mb-0 pb-0"> NITKOSG &copy; 2019 </p>
      </footer>
      </div>  

     
     );
  }
}
 
export default Home;