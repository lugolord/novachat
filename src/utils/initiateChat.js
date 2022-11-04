export default async function initiateChat (user, auth) {
  const request = await fetch('https://novateva-codetest.herokuapp.com/room/initiate', {
    method: 'POST',
    body: JSON.stringify({
      userIds: ['{{user_id}}', user._id],
      type: 'consumer-to-consumer'
    }),
    headers: {
      Authorization: `Bearer ${auth}`,
      'Content-Type': 'application/json'
    }
  })
  const response = await request.json()
  const chatRoomId = response.chatRoom.chatRoomId
  return chatRoomId
}
