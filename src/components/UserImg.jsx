import styled from 'styled-components'

export default function UserImg ({ source, altText, height }) {
  return <UserPhoto src={source} alt={altText} height={height} />
}

const UserPhoto = styled.img`
  height: ${props => props.height};
  border-radius: 50%;
`
