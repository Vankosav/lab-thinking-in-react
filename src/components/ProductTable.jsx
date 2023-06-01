import React from "react";
import ProductRow from "./ProductRow";

function ProductTable ({products, searchBox, searchCheckedBox}) {
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