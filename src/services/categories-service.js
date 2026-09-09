import { apiClient } from "@/lib/api-client"

export const getCategories = () => {
    return apiClient('/categories')
}