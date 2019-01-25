import React, { Component } from 'react';
import {Container, Button} from 'reactstrap';
import './Error.css'
class Error extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                <Container>
                <h1 className="title">404</h1>
                    <h1>gawdshh!</h1>
                    <p>The page you are looking for isn't found.</p>
                    <Button  href="./">Go Home</Button>
                </Container>
                <footer className="p-2  mt-4 text-white ">
                    <p className="text-center text-white mb-0 pb-0"> NITKOSG &copy; 2019 </p>
            </footer>
            </div>
         );
    }
}
 
export default Error;