import styled from 'styled-components';

const Root = styled.div`
    margin: 8px 6px;
    padding: 8px;
    border-radius: 8px;
    border: 1px solid ${({ borderColor }) => (borderColor ? borderColor : "black")};
    background-color: ${({ backgroundColor }) => (backgroundColor ? backgroundColor : "black")};
    color: ${({ color }) => (color ? color : "black")};
`;

export default function Box({
    children, 
    className,
    borderColor,
    backgroundColor,
    color,
}) {
  return (
    <Root 
        className={className}
        borderColor={borderColor}
        backgroundColor={backgroundColor}
        color={color}
    >
        {children}
    </Root>
  )
}
