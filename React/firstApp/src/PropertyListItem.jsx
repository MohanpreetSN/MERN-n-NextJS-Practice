export default function PropertyListItem({ property }) {
    return (
        <div key={property.id}>
            <h2>{property.name}</h2>
            <h3>${property.price} a night</h3>
            <h4>{property.rating}&#9733;</h4>
        </div>
    )
}