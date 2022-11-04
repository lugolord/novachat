export default async function getNSetConversation (chatId, auth) {
  const request = await fetch(`https://novateva-codetest.herokuapp.com/room/${chatId}?limit=5&page=0`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${auth}`,
      'Content-Type': 'application/json'
    }
  })
  const response = await request.json()
  const conversation = response.conversation
  return conversation
}
