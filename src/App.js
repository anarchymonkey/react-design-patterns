import { styled } from 'styled-components';

const Container = styled.div`
    display: flex;
`
export const App = () => {
    return (
        <Container>
            <div> This is the app component</div>
        </Container>
    )
}