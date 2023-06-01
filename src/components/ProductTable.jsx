
import ProductRow from "./ProductRow";

function ProductTable () {
    return (
        <div>
        <table>
        <tr>
            <th>Name</th>
            <th>Price</th>
        </tr>
        <ProductRow/>
    </table>
        </div>
    )
}

export default ProductTable;