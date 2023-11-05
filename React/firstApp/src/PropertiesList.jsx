import PropertyListItem from "./PropertyListItem"

export default function PropertiesList({ properties }) {
    return (
        <>
            {properties.map(property => (
                <PropertyListItem property={property} />
            ))}
        </>
    )
}