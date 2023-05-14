import styled from "styled-components"

// avatar styles
const AvatarContainer = styled.div`
  width: ${(props) => (props.radius ? props.radius : '2em')};
  height: ${(props) => (props.radius ? props.radius : '2em')};
  overflow: hidden;
  border-radius: 100%;
  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
`

export default function Avatar({ url, radius }) {
  return (
    <AvatarContainer radius={radius}>
      <img src={url} alt={url} srcset="" />
    </AvatarContainer>
  )
}
