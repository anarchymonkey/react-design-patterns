import { useEffect, useState } from "react";
import axios from 'axios';



export const withEditableUser = (Component, getUserById) => {
    return (props) => {
        const [originalState, setOriginalState] = useState(null);
        const [user, setUser] = useState(null);


        useEffect(() => {
            (async () => {
                const response = await getUserById();
                console.log({ resp: response });
                setOriginalState(response);
                setUser(response);
            })()
        }, []);

        const onChange = (changes) => {
            setUser({
                ...user,
                ...changes,
            })
        }

        const onReset = () => {
            console.log('resetting');
            setUser(originalState);
        }

        const onSubmit = (ev) => {
            ev.preventDefault();
            console.log({ user });
        }

        return (<Component {...props} user={user} onChange={onChange} onSave={onSubmit} onReset={onReset} />)
    }
}