import React from "react";
import { useEffect, useState } from "react"


export const DataConfigLoader = ({
    getData,
    resourceName,
    children,
}) => {
    const [state, setState] = useState(null);

    const fetchData = async () => {
        const resp = await getData();
        console.log({ resp });
        setState(resp);
        return resp;
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        React.Children.map(children, child => (
            React.isValidElement(child) && (
                React.cloneElement(child, {
                    [resourceName]: state,
                })
            )
        ))
    )
}