import Badge from '@mui/material/Badge'
import UserImg from './UserImg'
import x from '../assets/placeholder.jpeg'

export default function ImgWithBadge () {
  return (
    <Badge
      color='success'
      variant='dot'
      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
    >
      <UserImg source={x} altText='user photo' height='30px' />
    </Badge>
  )
}
