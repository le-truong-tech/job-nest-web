import { Link } from "react-router"
import { JobCard } from "./jobs/JobCard"
import { BriefcaseBusiness } from "lucide-react"

export const FeaturedJobsSection = ({jobs = [], totalJobs = 0}) => {
    return(
        <section className="bg-slate-50 py-14">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex items-end justify-between gap-4">
                    <div>
                        <h2 className="text-2xl font-bold text-slate-950">Việc làm mới nhất</h2>

                        <p className="mt-2 text-sm text-muted-foreground">Hiện có {totalJobs} cơ hội nghề nghiệp</p>
                    </div>

                    <Link to={'/jobs'} className="shrink-0 text-sm font-semibold text-primary hover:underline">Xem tất cả</Link>
                </div>
                {jobs.length === 0 ? (
                    <div className="mt-8 flex min-h-52 flex-col items-center justify-center rounded-2xl bg-white text-center">
                        <BriefcaseBusiness className="size-10 text-muted-foreground"/>

                        <h3 className="mt-4 font-semibold">Chưa có việc làm mới</h3>

                        <p className="mt-2 text-sm text-muted-foreground">Các cơ hội nghề nghiệp sẽ sớm được cập nhật!</p>
                    </div>
                ) : (
                    <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                    {jobs.slice(0,6).map((job) => (<JobCard key={job.id} job={job}/>))}
                </div>
                )}
            </div>
        </section>
    )
}