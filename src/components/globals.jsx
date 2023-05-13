import styled from 'styled-components'

export const Padding = styled.div`
  margin: ${(props) => (props.margin ? props.margin : '1em')};
  @media (max-width: 768px) {
    margin: 0 1em;
  }
`

export const Spacer = styled.div`
  height: ${(props) => (props.height ? props.height : '1em')};
  width: ${(props) => (props.width ? props.width : '1em')};

  @media (max-width: 768px) {
    height: ${(props) => (props.height ? props.height : '1em')};
    width: ${(props) => (props.width ? props.width : '0')};
  }
`

//Button styles
export const Button = styled.button`
  padding: 0.5em 1em;
  border: ${(props) =>
    props.type === 'primary' ? 'none' : '1px solid rgb(219, 160, 91)'};
  font-size: 1rem;
  border-radius: 8px;
  color: white;
  background: ${(props) =>
    props.type === 'primary'
      ? 'linear-gradient(to right, #d29458, rgb(219, 160, 91))'
      : 'transparent'};

  &:hover {
    background: ${(props) =>
      props.type === 'primary'
        ? 'linear-gradient(to right, #c47b33, rgb(217, 145, 62))'
        : 'rgba(219, 159, 91, 0.141)'};
  }
`

// Icon Button styles
export const IconButton = styled.button`
  width: 2.6em;
  height: 2.6em;
  border: none; 
  padding: 0.5em;
  border-radius: 100%;
  img {
    width: 100%;
    height: 100%;
  }
`

// avatar styles
export const Avatar = styled.div`
  width: ${(props) => (props.size ? props.size : '2em')};
  height: ${(props) => (props.size ? props.size : '2em')};
  overflow: hidden;
  border-radius: 100%;
  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
`
