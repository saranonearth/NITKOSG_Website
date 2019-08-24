import React from 'react';
import { Card, CardTitle, CardSubtitle } from 'reactstrap';

class Membercard extends React.Component {
  render() {
    return (
      <div>
        <Card body className=' text-center'>
          <img
            width='100%'
            id='person-img'
            src='https://placeholdit.imgix.net/~text?txtsize=33&txt=picture&w=300&h=300'
            alt='member-img'
          />
          <CardTitle className=''>{this.props.mem.name}</CardTitle>
          <CardSubtitle>{this.props.mem.description}</CardSubtitle>
        </Card>
      </div>
    );
  }
}

export default Membercard;
