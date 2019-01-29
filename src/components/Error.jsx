import React, { Component } from 'react';
import {Container, Button} from 'reactstrap';
import './Error.css'
import WOW from "wowjs";
class Error extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    componentDidMount() {
    const wow = new WOW.WOW();
    wow.init();
  }
    render() { 
        return ( 
            <div>
                <Container style={{padding: '50px'}}>
                <h1 className="title wow pulse">404</h1>
                    <h1 className="wow slideInUp">gawdshh!</h1>
                    <p className="wow slideInUp">The page you are looking for isn't found.</p>
                    <Button className="wow slideInUp" href="./">Go Home</Button>
                </Container>
            
            </div>
         );
    }
}
 
export default Error;