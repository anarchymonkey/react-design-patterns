import { useEffect, useState } from "react"


export const getUserHOC = (Component, resourceName, getData) => {
    return ({
        props,
    }) => {
        const [state, setState] = useState();

        const fetch = async () => {
            const resp = await getData();
            setState(resp);
            return resp;
        }
        useEffect(() => {
            fetch();
        }, []);
        return (<Component {...{[resourceName]: state }} {...props} />)
    }
}