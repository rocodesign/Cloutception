import React, {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useRef
} from 'react'
import { getDefaultState, State } from '../state'
import reducer from '../state/reducer'

type ContextData = {
  state: State
  dispatch: (action: any) => any
}

const contextData: ContextData = {
  state: {
    bitcloutPrice: null,
    selectedTab: -1,
    userKey: null,
    creatorKey: null
  },
  dispatch: null
}

const Root = createContext(contextData)
Root.displayName = 'RootContext'

const Provider = Root.Provider

export function getValue() {
  return contextData
}

export function getContext() {
  return Root
}

export const useSelector = (selector) => {
  const { state } = useContext(Root)
  return selector(state)
}

export const RootProvider = ({ children, name = '' }) => {
  const [state, dispatch] = useReducer(reducer, getDefaultState())

  const stateRef = useRef(state)

  const getState = () => stateRef.current

  const dispatchWrapper = (action) => {
    try {
      if (typeof action === 'function') {
        return action(dispatchWrapper, getState)
      } else {
        return dispatch(action)
      }
    } catch (e) {
      // eslint-disable-next-line
      console.error('[Provider] Error dispatching action:', action)
    }
  }

  useEffect(() => {
    stateRef.current = state
  }, [state])

  return (
    <Provider
      value={{
        state,
        dispatch: dispatchWrapper
      }}
    >
      {children}
    </Provider>
  )
}

export default Root
