import {
  BadgeCheck,
  Building2,
  MapPin,
  Users,
} from "lucide-react"

import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export const CompanyCard = ({ company }) => {
  if (!company) return null

  const companyName = company.company_name ?? "Công ty"
  const companyLogo = company.logo_url
  const address =
    company.headquarters_address ?? "Chưa cập nhật địa chỉ"
  const companySize =
    company.company_size ?? "Chưa cập nhật quy mô"

  return (
    <Card className="group h-full gap-4 rounded-2xl py-5 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-lg motion-reduce:transform-none">
      <CardHeader>
        <div className="flex items-start gap-4">
          {companyLogo ? (
            <img
              src={companyLogo}
              alt={`Logo ${companyName}`}
              className="size-16 shrink-0 rounded-xl border object-contain"
            />
          ) : (
            <div className="flex size-16 shrink-0 items-center justify-center rounded-xl bg-teal-50 text-primary">
              <Building2 className="size-7" />
            </div>
          )}

          <div className="min-w-0 flex-1">
            <CardTitle className="line-clamp-2 text-base leading-6">
              {companyName}
            </CardTitle>

            <p className="mt-1 truncate text-sm text-muted-foreground">
              {company.category ?? "Chưa cập nhật lĩnh vực"}
            </p>
          </div>

          {company.verification_tier === "VERIFIED" && (
            <Badge className="shrink-0 bg-teal-50 text-primary">
              <BadgeCheck />
              Xác thực
            </Badge>
          )}
        </div>
      </CardHeader>

      <CardContent className="space-y-3">
        <div className="flex items-start gap-2 text-sm text-muted-foreground">
          <MapPin className="mt-0.5 size-4 shrink-0" />
          <span className="line-clamp-2">{address}</span>
        </div>

        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Users className="size-4 shrink-0" />
          <span>{companySize}</span>
        </div>
      </CardContent>
    </Card>
  )
}