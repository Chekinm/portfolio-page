import { Link } from "react-router-dom"

const Missing = () => {
    return (
        <section>
            <h1>Oops!</h1>
            <p>Looks like you are trying to reach something that doesn't exist</p>
            <div>
                <Link to="/">Try to visit homepage</Link>
            </div>
        </section>
    )
}

export default Missing