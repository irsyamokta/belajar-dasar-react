import { Link } from "react-router"
const NotFound = () => {
    return (
        <>
            <h1>NotFound</h1>
            <Link to="/">
                <button>
                    Home
                </button>
            </Link>
        </>
    )
}

export default NotFound