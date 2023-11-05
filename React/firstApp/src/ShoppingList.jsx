import ShoppingListItem from "./ShoppingListItem";

function ShoppingList({items}) {
    return (
        <ul>
            {items.map(i => (
                <ShoppingListItem element={i}/>
                ))}
        </ul>
    )
}

export default ShoppingList;