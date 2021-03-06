import React from 'react';
import ReactDOM from 'react-dom';
import { HeaderComponent } from './Header.jsx';
import { Bracket } from './Bracket.jsx';
import { Chat } from './Chat.jsx';
import { Grid, Row, Col } from 'react-bootstrap';
import io from 'socket.io-client';
/* class MainComponent extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (<div>I am a test.</div>);
  }
} */


// console.log(Bracket);

// let handleMessageSubmit = (message) => (
//   //TODO: submit to the server and refresh the list
//   console.log('handleMessageSubmit ran')
// )
const socket = io('http://localhost');
const handleMessageSubmit = (author, text) => {
  const timeStamp = Date.now();
  socket.emit('chat message', { author: 'Mark', text, time: timeStamp });
};

const MainComponent = () => (
  <Grid>
    <Row className='show-grid'>
      <Col md={12}>
        <HeaderComponent />
      </Col>
    </Row>
    <Row className='show-grid'>
      <Col md={3}>
        <div id="roster"></div>
      </Col>
      <Col md={6}>
        <Bracket />
      </Col>
      <Col md={3}> 
        <Chat onMessageSubmit={this.handleMessageSubmit} />
      </Col>
    </Row>
    <Row>
      <Col md={3}>
        <span></span>
      </Col>
      <Col md={6}>
        <div id="rules"></div>
      </Col>
      <Col md={3}> 
        <span></span>
      </Col>
    </Row>
  </Grid>
);

ReactDOM.render(
  <MainComponent />,
  document.getElementById('app')
);
