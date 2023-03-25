import { Link } from "react-router-dom";

export default function IndexPage() {
    return <main>
        <section>
            <div>
                <h1>Hello 👋</h1>
                <Link to={"/app/"}>go to app</Link>
            </div>
        </section>
    </main>
}