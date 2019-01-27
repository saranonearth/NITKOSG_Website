import React, { Component } from 'react';
import Tutorialcard from './Tutorialcard';
import {Col,
		Row,
		Container,
		CardColumns
		} from 'reactstrap';
import Media from 'react-media';
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
				
					
					<Tutorialcard tut={tut}/>
				
					
				
				)
		});

        return (
			<div>
			
					<h1 className="text-center" style={{fontSize:'10vw'}}>Tutorials</h1>
						
							  <Media query={{ maxWidth: 600 }}>
					          {matches =>
					            matches ? (
              						<Container style={{marginLeft:'1.5rem'}}>
							<CardColumns >
										{tut}
							</CardColumns>   
									</Container>                              
           					 ) : (
              
									<Container >
							<CardColumns >
										{tut}
							</CardColumns>   
									</Container> 
          								  )
        							  }
      							  </Media>
						
						
						
						
							
					
			<footer className="p-2  mt-4 text-white ">
        			<p className="text-center text-white mb-0 pb-0"> NITKOSG &copy; 2019 </p>
     		</footer>
           </div>   
          );
    }
}
 
export default Tutorials;



/*Problem ---  Centering the cardsin container*/
