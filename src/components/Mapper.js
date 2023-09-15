

export const Mapper = ({
    items = [],
    resourceName,
    ItemComponent,
}) => {
    console.log({ items });
    return (
        <>
            {items ? items?.map((item, index) => <ItemComponent key={index} {...{ [resourceName]: item }} />) : <span>Loading...</span>}
        </>
    )
}