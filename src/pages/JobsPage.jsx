import { useLoaderData } from "react-router"

export const JobsPage = () => {
    const jobsResponse = useLoaderData()
    return(
        <>
            <h1>Jobs page</h1>
            <pre className="whitespace-pre-wrap">{JSON.stringify(jobsResponse, null, 2)}</pre>
        </>
    )
}