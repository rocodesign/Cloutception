export const ActionType = {
  SET_SELECTED_TAB: 'SET_SELECTED_TAB',
  SET_USER_KEY: 'SET_USER_KEY',
  SET_CREATOR_KEY: 'SET_CREATOR_KEY',
  SET_BITCLOUT_PRICE: 'SET_BITCLOUT_PRICE',
  SYNC_STATE: 'SYNC_STATE'
}

export type State = {
  selectedTab: number
  creatorKey: string
  userKey: string
  bitcloutPrice: number
}

export const selectors = {
  creatorKey: (state: State) => state.creatorKey,
  price: (state: State) => state.bitcloutPrice
}

export function getDefaultState(): State {
  return {
    selectedTab: -1,
    creatorKey: null,
    userKey: null,
    bitcloutPrice: 0
  }
}
