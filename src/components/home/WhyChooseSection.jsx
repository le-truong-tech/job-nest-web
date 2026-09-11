import { FileText, Handshake, SearchCheck } from "lucide-react"
import { Card, CardContent } from "../ui/card"

const FEATURES = [
  {
    title: "Tìm việc dễ dàng",
    description:
      "Tìm kiếm cơ hội nghề nghiệp theo từ khóa, ngành nghề và địa điểm phù hợp.",
    icon: SearchCheck,
    iconClassName: "bg-teal-50 text-teal-700",
  },
  {
    title: "Hồ sơ chuyên nghiệp",
    description:
      "Tạo CV rõ ràng, nổi bật kỹ năng và kinh nghiệm của bạn với nhà tuyển dụng.",
    icon: FileText,
    iconClassName: "bg-cyan-50 text-cyan-700",
  },
  {
    title: "Kết nối nhanh chóng",
    description:
      "Tiếp cận doanh nghiệp và gửi hồ sơ ứng tuyển trực tiếp trên JobNest.",
    icon: Handshake,
    iconClassName: "bg-emerald-50 text-emerald-700",
  },
]

export const WhyChooseSection = () => {
    return(
        <section className="bg-slate-50 py-16">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <p className="text-sm font-semibold uppercase tracking-widest text-primary">Đông hành cũng đồng nghiệp</p>

                    <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950">Tại sao chọn JobNest?</h2>

                    <p className="mt-4 leading-7 text-muted-foreground">Những công cụ cần thiết giúp bạn tìm kiếm và tiếp cận cơ hội nghề nghiệp thuận tiện hơn</p>
                </div>

                 <div className="mt-10 grid gap-5 md:grid-cols-3">
                    {FEATURES.map((feature) => {
                        const Icon = feature.icon
                        return (
                        <Card
                            key={feature.title}
                            className="group h-full rounded-2xl border-0 py-0 text-center shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-lg motion-reduce:transform-none"
                        >
                            <CardContent className="flex h-full flex-col items-center p-8">
                            <div
                                className={`flex size-14 items-center justify-center rounded-2xl ${feature.iconClassName}`}
                            >
                                <Icon
                                aria-hidden="true"
                                className="size-7"
                                />
                            </div>

                            <h3 className="mt-5 text-lg font-semibold text-slate-950">
                                {feature.title}
                            </h3>

                            <p className="mt-3 text-sm leading-6 text-muted-foreground">
                                {feature.description}
                            </p>
                            </CardContent>
                        </Card>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}