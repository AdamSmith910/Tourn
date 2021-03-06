//
// Header reducer
//

function handleSubmit(state, tourn) {
  // TODO: submit new tourn data to server
  // provide tournament object
}

function handleSelectTourn(state, tournId) {
  // TODO: submit selected tourn to server
  // provide tournId
}

function handleDeleteAlert(state, userId, alert) {
  // TODO: submit delete request to server
  // provide userId, alert to delete
}

function handleAcceptInvite(state, userId, tournId, alert) {
  // TODO: submit accepted tourn to server
  // provide userId, tournId, and alert to delete
}

function handleToggleSelect(state, showTournList) {
  return state.set('showTournList', !showTournList);
}

function handleToggleAlerts(state, showAlertList) {
  return state.set('showAlertList', !showAlertList);
}

export default function header(state, action) {
  switch (action.type) {
    case 'SUBMIT_NEW_TOURN':
      return handleSubmit(state, action.tourn);
    case 'SELECT_TOURN':
      return handleSelectTourn(state, action.tournId);
    case 'DELETE_ALERT':
      return handleDeleteAlert(state, action.userId, action.alert);
    case 'ACCEPT_INVITE':
      return handleAcceptInvite(state, action.userId, action.tournId, alert);
    case 'TOGGLE_SELECT':
      return handleToggleSelect(state.header, action.showTournList);
    case 'TOGGLE_ALERTS':
      return handleToggleAlerts(state.header, action.data);
    default:
      return state;
  }
}
