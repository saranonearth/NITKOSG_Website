import React from 'react';
import { Card, CardText, CardBody, CardLink, CardSubtitle } from 'reactstrap';

const Tutorialcard = ({ tut }) => {
  return (
    <div>
      <Card style={{ border: 'solid #9872EC 1px' }} className=' w-75'>
        <CardBody>
          <CardLink href='#'>{tut.title}</CardLink>
          <CardSubtitle>{tut.subtitle}</CardSubtitle>
        </CardBody>
        <img borderradius='100%' width='100%' src={tut.link} alt={tut.title} />
        <CardBody>
          <CardText>{tut.description}</CardText>
        </CardBody>
      </Card>
    </div>
  );
};

export default Tutorialcard;
