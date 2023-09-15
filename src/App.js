import axios from "axios"
import { Layout } from "./components/Layout"
import { Mapper } from "./components/Mapper"
import { LeftPane } from "./components/Shared/LeftPane"
import { RightPane } from "./components/Shared/RightPane"
import { UserListItem } from "./components/Shared/UserListItem"
import { useEffect, useState } from "react"
import { DataConfigLoader } from "./components/DataConfigLoader"

const getUsers = async () => {
    const response = await axios.get('https://dummyjson.com/users')
    console.log({ response: response.data });
    return response.data.users;
}

const getUserById = async (id) => {
    const response = await axios.get(`https://dummyjson.com/users/${id}`)
    console.log({ response: response.data });
    return response.data;
}

export const App = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        (async () => {
            const resp = await getUsers();
            setUsers(resp)
        })()
    }, []);
    return (
        <>
            {/* Tutorial 1: Setting up layouts*/}
            {/* <Layout leftAspect={1} rightAspect={5} leftBg="red" rightBg="green">
                <LeftPane />
                <RightPane />
            </Layout> */}
            {/* Tutorial 2: Setting up iterators */}
            {/* <Mapper items={users} resourceName="user" ItemComponent={UserListItem} /> */}
            {/* Tutorial 3: Data Config Loader (Container Components) */}
            <DataConfigLoader getData={() => getUserById(4)} resourceName="user">
                <UserListItem />
            </DataConfigLoader>
        </>
    )
}