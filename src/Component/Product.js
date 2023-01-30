import { Link } from "react-router-dom";

const Product = (props) => {
    const { product } = props;

    return (

        <Link to={`/products/${product._id}`}>
            <div>
                <img src={product.image} alt='pizza' />
                <div className="text-center">
                    <h2 className="text-lg font-bold py-2"> {product.name}</h2>
                    <span className="bg-gray-200 py-1 rounded-full text-sm px-4">{product.size}</span>
                </div>
                <div className="flext justify-between items-centre mt-4">
                    <span>Rs{product.price}</span>
                    <button className="bg-yellow-500 py-1 px-4 rounded-full font-bold">ADD</button>

                </div>


            </div>
        </Link>
    )
}

export default Product;