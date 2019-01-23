import React, { Component } from 'react';
import { Jumbotron, Container, Row, Col, Media, Button  } from 'reactstrap';
import Hero from './hero.jpg';
import Pic1 from './pic1.png';
import Pic2 from './pic2.png';
import './home.css'


class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <div>

      <div className=" md-block" class="home">     
          <Jumbotron >
          <h1 className="display-1">NITKOSG</h1>
          <p className="lead">Open-source Group of NIT Kurukshetra.</p>
           </Jumbotron>
      </div>

      <div class="container w-80 w-sm-80">
          <div class="row">
            <div class="col-12 col-md-6 col-sm-12">
                  <Media>
                        <Media left href="./">
                        <Media className="img-fluid mt-5" object src={Pic1} alt="Who are we image" />
                        </Media>
                      
                  </Media>
            </div>
             <div class="col-12 col-md-6 col-sm-12">
                    <Media body>
                        <Media className="text-center mt-5 display-4 "heading>
                         Who are we?
                        </Media>
                        <p className="md-block text-center">Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus. </p>
                        </Media>
            </div>
          </div>
      
        </div>

             <div class="container w-80 w-sm-80 flex-column-reverse flex-lg-row">
          <div class="row">
            <div class="col-12 col-md-6 col-sm-12 ">
                      <Media body>
                        <Media className="text-center mt-5 display-4 "heading>
                         What do we do?
                        </Media>
                        <p className="md-block text-center">Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus. </p>
                        </Media>
            </div>
             <div class="col-12 col-md-6 col-sm-12
              ">
                       <Media>
                        <Media left href="./">
                        <Media className="img-fluid mt-5" object src={Pic2} alt="Who are we image" />
                        </Media>
                      
                  </Media>
            </div>
          </div>
      
        </div>
         <footer className="p-2  mt-4 bg-primary text-white ">
        <p className="text-center  mb-0 pb-0"> NITKOSG &copy; 2019 </p>
      </footer>
      </div>  

     
     );
  }
}
 
export default Home;