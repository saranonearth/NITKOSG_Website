import React from 'react';
import { Card, CardImg, CardText, CardBody, CardLink,
  CardTitle, CardSubtitle } from 'reactstrap';


 const Tutorialcard = ({tut}) => {

 	return(
				<div>
					<Card style={{border: 'solid #9872EC 1px'}} className=" w-75">
				        <CardBody>
				        <CardLink href="#">{tut.title}</CardLink>
				        <CardSubtitle>{tut.subtitle}</CardSubtitle>
				        </CardBody>
				        <img borderRadius="100%" width="100%" src={tut.link} alt="Card image cap" />
				        <CardBody>
				        <CardText>{tut.description}</CardText>
				        </CardBody>
     				 </Card>
				</div>
			
 		);
 }

 export default Tutorialcard