import React from "react";

function ProductTable ({products, searchBox, searchCheckedBox}) {
    return (
        <div>
        <table>
        <tr>
            <th>Name</th>
            <th>Price</th>
        </tr>
        <tr>
            <td>Football</td>
            <td>$49.99</td>
            </tr>
            <tr>
            <td>Basketball</td>
            <td>$9.99</td>
        </tr>
        <tr>
            <td>iPod Touch</td>
            <td>$99.99</td>
        </tr>
        <tr>
            <td>iPhone X</td>
            <td>$199.99</td>
        </tr>
        <tr>
            <td>Tennis Balls</td>
            <td>$199.99</td>
        </tr>
        <tr>
            <td>Huawei P10</td>
            <td>$199.99</td>
        </tr>
        
    </table>
        </div>
    )
}

export default ProductTable;