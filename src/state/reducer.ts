import { getDefaultState, ActionType, State } from '.'

export default function reducer(
  state = getDefaultState(),
  { type, payload }
): State {
  switch (type) {
    case ActionType.SET_SELECTED_TAB: {
      return {
        ...state,
        selectedTab: payload
      }
    }

    case ActionType.SYNC_STATE: {
      return {
        ...state,
        ...payload
      }
    }

    case ActionType.SET_USER_KEY: {
      return {
        ...state,
        userKey: payload
      }
    }

    case ActionType.SET_CREATOR_KEY: {
      return {
        ...state,
        creatorKey: payload
      }
    }

    case ActionType.SET_BITCLOUT_PRICE: {
      return {
        ...state,
        bitcloutPrice: payload
      }
    }

    default:
      return state
  }
}
