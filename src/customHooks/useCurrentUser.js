import { useEffect, useState } from "react";
import axios from 'axios';


export const useCurrentUser = ({
    url
}) => {
    const [state, setState] = useState(null);

    useEffect(() => {
        (async () => {
            console.log({ url });
            const response = await axios.get(url);
            setState(response.data)
        })();
    }, [url]);

    return state;
}