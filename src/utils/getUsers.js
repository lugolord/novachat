export default async function getUsers () {
  const request = await fetch('https://novateva-codetest.herokuapp.com/users')
  const response = await request.json()
  return response.users
}
