export const intercept = (
  target: any,
  functionName: string,
  interceptor: (...args: any[]) => any[]
) => {
  const original = target[functionName]
  target[functionName] = (...args) => {
    original.apply(target, interceptor(...args))
  }

  const cancel = () => (target[functionName] = original)

  return cancel
}

export async function wait(delay) {
  return new Promise((resolve) => {
    setTimeout(resolve, delay)
  })
}
