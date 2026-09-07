import { useParams } from "react-router"

export const JobDetailPage = () => {

    const { slug } = useParams()

    return(
        <section>
            <h1>Chi tiet lam viec</h1>
            <p>{slug}</p>
        </section>
    )
}