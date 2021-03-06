//
// Chat reducer
//

function handleChatUpdate(state, chat) {
  return state.set('chat', chat);
}

export default function chat(state, action) {
  switch (action.type) {
    case 'UPDATE_CHAT':
      return handleChatUpdate(state.tournament, action.chat);
    default:
      return state;
  }
}
