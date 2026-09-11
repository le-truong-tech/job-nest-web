import { Banknote, Building2, MapPin } from "lucide-react"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../ui/card"
import { Link } from "react-router"
import { Badge } from "../ui/badge"

const JOB_TYPE_LABELS = {
  FULL_TIME: "Toàn thời gian",
  PART_TIME: "Bán thời gian",
  FREELANCE: "Tự do",
  INTERNSHIP: "Thực tập",
}

const formatSalary = (salary) => {
  if (
    !salary ||
    salary.is_negotiable ||
    salary.type === "AGREEMENT"
  ) {
    return "Thỏa thuận"
  }

  const formatter = new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: salary.currency || "VND",
    maximumFractionDigits: 0,
  })

  if (salary.min != null && salary.max != null) {
    return `${formatter.format(salary.min)} - ${formatter.format(salary.max)}`
  }

  if (salary.max != null) {
    return `Đến ${formatter.format(salary.max)}`
  }

  if (salary.min != null) {
    return `Từ ${formatter.format(salary.min)}`
  }

  return "Thỏa thuận"
}

export const JobCard = ({job}) => {
    if(!job) return null

    const companyName = job?.company?.company_name ?? 'Công ty'
    const companyLogo = job?.company?.logo_url
    const location = job.work_location?.[0]?.city_name ?? 'Toàn quốc'

    return(
        <Card className='group h-full gap-4 rounded-2xl border-l-4 border-l-primary py-5 shadow-sm transition duration-200 hover:-translate-y-1 hover:drop-shadow-lg motion-reduce:transform-none'>
            <CardHeader className='flex items-start gap-3'>
                <div>{companyLogo ? (<img src={companyLogo} alt={`Logo ${companyName}`} className="size-14 shrink-0 rounded-xl border object-contain"/>) :
                    (<div className="flex size-14 shrink-0 justify-center items-center rounded-xl bg-teal-50 text-primary"><Building2 className="size-6"/></div>)
                }</div>

                <div className="min-w-0 flex-1">
                    <CardTitle className="line-clamp-2 text-base leading-6">
                        <Link to={`/jobs/${job.slug}`} className="transition-colors hover:text-primary">
                            {job.title}
                        </Link>
                    </CardTitle>

                    <p className="mt-1 truncate text-sm text-muted-foreground">{companyName}</p>
                </div>
                
                {job.is_hot && (
                    <Badge className="shrink-0 bg-red-500 text-white">HOT</Badge>
                )}
            </CardHeader>

            <CardContent className="space-y-3">
                <div className="flex items-center gap-2 text-sm">
                    <Banknote className="size-4 shrink-0 text-primary"/>
                    <span className="font-bold text-primary">{formatSalary(job.salary)}</span>
                </div>

                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="size-4 shrink-0"/>
                    <span className="truncate">{location}</span>
                </div>
            </CardContent>

            <CardFooter className="flex flex-wrap gap-2 border-t pt-4">
                <Badge variant="secondary">{job.category}</Badge>

                <Badge variant="outline">{JOB_TYPE_LABELS[job.job_type] ?? job.job_type}</Badge>
            </CardFooter>
        </Card>
    )
}