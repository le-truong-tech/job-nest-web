import { apiClient } from "@/lib/api-client";

export const getJobs = () => {
    return apiClient('/jobs')
}

export const getJobBySlug = (slug) => {
    return apiClient(`/jobs/${slug}`)
}