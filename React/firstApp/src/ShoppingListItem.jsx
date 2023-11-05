export default function ShoppingListItem({ element }) {
    const styles = {
        color: element.completed ? "grey" : "red",
        textDecoration: element.completed ? "line-through" : "none"
    };
    return (
        <li key={element.id}
            style={styles}>
            {element.item} - {element.qty}
        </li>
    )
}