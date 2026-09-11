import { getCategories } from "@/services/categories-service"
import { getCompanies } from "@/services/companies-service"
import { getJobs } from "@/services/jobs-service"

export const homeLoader = async () => {
    const [categoryGroups, jobResponse, companiesResponse,] = await Promise.all([
        getCategories(),
        getJobs(),
        getCompanies(),
    ])

    return {
        categoryGroups,
        jobs: jobResponse.data,
        totalJobs: jobResponse.total,
        companies: companiesResponse.data,
        totalCompanies: companiesResponse.total,
    }
}