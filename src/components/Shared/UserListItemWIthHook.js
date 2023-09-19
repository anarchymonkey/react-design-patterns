import styled from "styled-components"
import { useCurrentUser } from "../../customHooks/useCurrentUser";


const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin: 6px;
    border: 1px solid green;
`;

const ItemRow = styled.span`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
    padding: 6px;
`;

export const UserListItemWithHook = ({ id }) => {

    const user = useCurrentUser({
        url: `https://dummyjson.com/users/${id}`,
    });

    console.log({ hookFromUser: user });

    if (!user) {
        return null;
    }
    return (
        <Container>
            <ItemRow>
                <img src={user.image} alt={user.firstName} />
                <div>Id -  {user.id}</div>
                <div>Name - {`${user.firstName} ${user.lastName}`}</div>
                <div>Age: {user.age}</div>
                <div>Email: {user.email}</div>
                <div>Ph: {user.phone}</div>
            </ItemRow>
        </Container>
    )
}