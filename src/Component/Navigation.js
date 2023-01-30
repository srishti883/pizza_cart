import { Link } from "react-router-dom";

const Navigation = () => {

    const cartStyle = {
        background: 'blue',
        display: 'flex',
        padding: '3px 5px',
        borderRadius: '7px'

    }



    return (
        <>
            <nav className="container mx-auto flex items-centre justify-between py-4">
                <Link to="/">
                    <img className="mr-50" style={{ height: 70 }} src="/images/logo.png" alt="logo" />
                </Link>
                <ul className="flex items-centre">
                    <li> <Link to="/">Home</Link></li>
                    <li className="ml-2"><Link to="/about">About</Link></li>
                    <li className="ml-4"><Link to="/products">Products</Link></li>
                    <li className="ml-4">
                        <Link to="/carts">
                            <div style={cartStyle}>

                                <span>20</span>
                                <img className="ml-3" style={{ height: 37 }} src="/images/cart1.png" alt="Cart" />
                            </div>
                        </Link>
                    </li>
                </ul>

            </nav>
        </>
    )
}

export default Navigation;
