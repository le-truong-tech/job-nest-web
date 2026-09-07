import { MainLayout } from "@/layouts/MainLayout"
import { CompaniesPage } from "@/pages/CompaniesPage"
import { HomePage } from "@/pages/HomePage"
import { JobDetailPage } from "@/pages/JobDetailPage"
import { JobsPage } from "@/pages/JobsPage"
import { NotFoundPage } from "@/pages/NotFoundPage"
import { createBrowserRouter } from "react-router"

export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout/>,
        children: [
            {
                index: true,
                element: <HomePage/>,
            },
            {
                path: 'jobs',
                element: <JobsPage/>,
            },
            {
                path: 'jobs/:slug',
                element: <JobDetailPage/>,
            },
            {
                path: 'companies',
                element: <CompaniesPage/>,
            },
            {
                path: '*',
                element: <NotFoundPage/>,
            },
        ]        
    }
])