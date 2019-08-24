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
            src='https://via.placeholder.com/150'
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
