import { apiClient } from "@/lib/api-client"

export const getCompanies = () => {
    return apiClient('/companies')
}