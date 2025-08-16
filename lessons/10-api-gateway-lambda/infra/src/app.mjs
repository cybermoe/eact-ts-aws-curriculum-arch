export const lambdaHandler = async () => {
  return {
    statusCode: 200,
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({ message: 'Hello from Lambda!' })
  }
}
