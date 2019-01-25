import React, { Component } from 'react';
import Tutorialcard from './Tutorialcard';
import {Col,Row,Container} from 'reactstrap';
import {Tutorialslist} from './Tutorialslist';
import './Tutorials.css';
class Tutorials extends Component {
    constructor(props) {
        super(props);
        this.state = { 
			tutorial: Tutorialslist
         }
    }

	

    render() { 
		const tut = this.state.tutorial.map(tut=>{
			return(
				<Col className="offset-*" sm="6" md="6" lg="6">
					<Tutorialcard tut={tut}/>
				</Col>
				)
		});

        return (
			<div>
				<Container>
					<h1 className="text-center" style={{fontSize:'10vw'}}>Tutorials</h1>
				<Row>	
               	{tut}       {/*Tutorials List*/}
               </Row>
				</Container>
			<footer className="p-2  mt-4 text-white ">
        			<p className="text-center text-white mb-0 pb-0"> NITKOSG &copy; 2019 </p>
     		</footer>
           </div>   
          );
    }
}
 
export default Tutorials;



/*Problem ---  Centering the cardsin container*/
