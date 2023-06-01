import jsonData from './../data.json';
import { useState } from 'react';

function ProductRow () {
    const [products, setProducts] = useState(jsonData);
    return (
        <div>
            <tr>
            <td>{products[0].name}</td>
            <td>{products[0].price}</td>
            </tr>
            <tr>
            <td>{products[1].name}</td>
            <td>{products[1].price}</td>
        </tr>
        <tr>
            <td>{products[2].name}</td>
            <td>{products[2].price}</td>
        </tr>
        <tr>
            <td>{products[3].name}</td>
            <td>{products[3].price}</td>
        </tr>
        <tr>
            <td>{products[4].name}</td>
            <td>{products[4].price}</td>
        </tr>
        <tr>
            <td>{products[5].name}</td>
            <td>{products[5].price}</td>
        </tr>
        
        </div>
    )
}

export default ProductRow;