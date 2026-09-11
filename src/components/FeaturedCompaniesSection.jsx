import { Link } from "react-router"
import { CompanyCard } from "./companies/CompanyCard"
import { Building2 } from "lucide-react"

export const FeaturedCompaniesSection = ({companies = [], totalCompanies = 0}) => {
    return(
        <section className="bg-white py-14">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex items-end justify-between gap-4">
                    <div>
                        <h2 className="text-2xl font-bold text-slate-950">Nhà tuyển dụng mới</h2>

                        <p className="mt-2 text-sm text-muted-foreground">Kết nối với {totalCompanies} doanh nghiệp trên JobNest</p>
                    </div>

                    <Link to={'/companies'} className="shrink-0 text-sm font-semibold text-primary hover:underline">Xem tất cả</Link>
                </div>

                {companies.length === 0 ? (
                    <div className="mt-8 flex min-h-48 flex-col items-center justify-center rounded-2xl border border-dashed bg-slate-50 text-center">
                        <Building2 className="size-10 text-muted-foreground" />

                        <h3 className="mt-4 font-semibold">
                        Chưa có nhà tuyển dụng
                        </h3>

                        <p className="mt-2 text-sm text-muted-foreground">
                        Danh sách doanh nghiệp sẽ sớm được cập nhật.
                        </p>
                    </div>
                    ) : (
                    <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                        {companies.slice(0, 4).map((company) => (
                        <CompanyCard
                            key={company.id}
                            company={company}
                        />
                        ))}
                    </div>
                )}
            </div>
        </section>
    )
}