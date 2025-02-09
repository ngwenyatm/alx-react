export function markAsRead(index) {
  return { type: MARK_AS_READ, index };
}

export function setNotificationFilter(filter) {
  return { type: SET_TYPE_FILTER, filter };
}

export const boundNotificationActionCreators = (dispatch) => bindActionCreators({
  markAsRead,
  setNotificationFilter
}, dispatch);