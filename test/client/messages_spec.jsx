//user types in and submits a message
//creates a ADD_MESSAGE action
  //action takes postId, author, and message
  //type: ADD_MESSAGE
  //postId: 1
  //author: Mark
  //comment: 'I hope this works'
//reducer takes initial state, action
  //changes and returns state
//export reducer to spec for testing
import 'babel-polyfill';
import chai from 'chai';
var expect = chai.expect;
import messages from '../../client/src/reducers/messages';
import mocha from 'mocha';
var describe = mocha.describe;
var it = mocha.it;

/*messages_reducer*/


var emptyState = {
  tournament: {
    messages: []
  }
}
var stateAdd = {
  tournament: {
    messages: [
      {
        author: 'Mark',
        comment: 'I hope this works',
      }
    ]
  }
}
var action = {
  type: 'ADD_MESSAGE',
  author: 'Mark',
  comment: 'I hope this works',
}
var action2 = {
  type: 'REMOVE_MESSAGE',
  index: 0,
}

describe('messages_reducer', function(){

  it('should add a message', function(){
    expect(messages(emptyState, action)).to.deep.equal(stateAdd);
  });
  it('should remove a message', function(){
    expect(messages(stateAdd, action2)).to.deep.equal(emptyState);
  });
})

/*messages_reducer end*/
