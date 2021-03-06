//
// TOURN ACTION CREATORS
//

//
// Mode
//

export function changeMode(mode) {
  return {
    type: 'CHANGE_MODE',
    mode,
  };
}

//
// Header
//

export function submitNewTourn(tourn) {
  return {
    type: 'SUBMIT_NEW_TOURN',
    tourn,
  };
}

export function selectTourn(tournId) {
  return {
    type: 'SELECT_TOURN',
    tournId,
  };
}

export function deleteAlert(userId, alert) {
  return {
    type: 'DELETE_ALERT',
    userId,
    alert,
  };
}

export function acceptInvite(userId, tournId) {
  return {
    type: 'ACCEPT_INVITE',
    userId,
    tournId,
  };
}

export function toggleTournSelect(showTournList) {
  return {
    type: 'TOGGLE_SELECT',
    showTournList,
  };
}

export function toggleAlerts(showAlertList) {
  return {
    type: 'TOGGLE_SELECT',
    showAlertList,
  };
}

//
// Tourn Info
//

export function updateId(tournId) {
  return {
    type: 'UPDATE_ID',
    tournId,
  };
}

export function updateType(tournType) {
  return {
    type: 'UPDATE_TYPE',
    tournType,
  };
}

export function updateName(tournName) {
  return {
    type: 'UPDATE_NAME',
    tournName,
  };
}

export function updateRules(tournRules) {
  return {
    type: 'UPDATE_RULES',
    tournRules,
  };
}

export function updateSize(bracketSize) {
  return {
    type: 'UPDATE_BRACKET_SIZE',
    bracketSize,
  };
}

//
// Chat
//

export function updateChat(chat) {
  return {
    type: 'UPDATE_CHAT',
    chat,
  };
}

//
// Roster
//

export function toggleInviteBtn(bracket) {
  return {
    type: 'SHOW_INVITE',
    bracket,
  };
}

//
// Bracket
//

export function submitAdvance(bracket) {
  return {
    type: 'SUBMIT_ADVANCE',
    bracket,
  };
}

export function updateBracket(bracket) {
  return {
    type: 'UPDATE_BRACKET',
    bracket,
  };
}
