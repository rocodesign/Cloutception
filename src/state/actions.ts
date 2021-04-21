import { ActionType } from '.'

export function setSelectedTab(selectedTab: number) {
  return {
    type: ActionType.SET_SELECTED_TAB,
    payload: selectedTab
  }
}

export function setUserKey(key) {
  return {
    type: ActionType.SET_USER_KEY,
    payload: key
  }
}

export function setCreatorKey(key) {
  return {
    type: ActionType.SET_CREATOR_KEY,
    payload: key
  }
}

export function setBCPrice(price) {
  return {
    type: ActionType.SET_BITCLOUT_PRICE,
    payload: price
  }
}

export function syncState(state) {
  return {
    type: ActionType.SYNC_STATE,
    payload: state
  }
}
