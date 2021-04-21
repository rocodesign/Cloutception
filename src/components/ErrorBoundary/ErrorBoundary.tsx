import React from 'react'

import ErrorBoundaryContent from './ErrorBoundaryContent'

interface ErrorState {
  hasError: boolean
}

interface ErrorProps {
  standalone?: boolean
  children: React.ReactNode
}

class ErrorBoundary extends React.Component<ErrorProps, ErrorState> {
  public static getDerivedStateFromError() {
    return { hasError: true }
  }

  public readonly state = { hasError: false }

  public componentDidCatch(error: Error) {
    console.error('[Clouception] Error while rendering')
  }

  public render() {
    const { children } = this.props

    if (!this.state.hasError) {
      return children
    }

    const content = <ErrorBoundaryContent />

    return content
  }
}

export default ErrorBoundary
