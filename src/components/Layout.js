import styled from "styled-components";


const Container = styled.div`
    display: flex;
`

const Pane = styled.div`
    flex: ${props => props.aspect};
    background-color: ${props => props.backgroundColor};
    padding: 10px;
`
export const Layout = ({
    children,
    ...props
}) => {
    const [left, right] = children;

    return (
        <Container>
            <Pane aspect={props.leftAspect} backgroundColor={props.leftBg}>
                {left}
            </Pane>
            <Pane aspect={props.rightAspect} backgroundColor={props.rightBg}>
                {right}
            </Pane>
        </Container>
    )
}