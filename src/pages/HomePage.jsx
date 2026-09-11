import { HeroSection } from "@/components/home/HeroSection"
import { useLoaderData } from "react-router"
import { FeaturedJobsSection } from "@/components/FeaturedJobsSection"
import { FeaturedCompaniesSection } from "@/components/FeaturedCompaniesSection"
import { WhyChooseSection } from "@/components/home/WhyChooseSection"

export const HomePage = () => {

    const {categoryGroups, jobs, totalJobs, companies, totalCompanies} = useLoaderData()
    return(
       <>
            <HeroSection categoryGroups={categoryGroups}/>

            <FeaturedJobsSection jobs={jobs} totalJobs={totalJobs}/>

            <FeaturedCompaniesSection companies={companies} totalCompanies={totalCompanies}/>

            <WhyChooseSection/>
       </>
    )
}