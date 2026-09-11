import { Form, Link } from "react-router"
import { InputGroupAddon, InputGroup, InputGroupInput } from "../ui/input-group" 
import { MapPin, SearchIcon, BriefcaseBusiness, ChevronRight} from "lucide-react"
import { Button} from "../ui/button"
import { SelectContent, Select, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue  } from "../ui/select"
import {Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious,} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"

import banner1 from "@/assets/banner-v1.jpg"
import banner2 from "@/assets/banner-v2.jpg"
import banner3 from "@/assets/banner-v3.webp"

const items = [
  { label: "Tất cả địa điểm", value: null },
  { label: "Hà Nội", value: "01" },
  { label: "Cao Bằng", value: "04" },
  { label: "Tuyên Quang", value: "08" },
  { label: "Điện Biên", value: "11" },
  { label: "Lai Châu", value: "12" },
  { label: "Sơn La", value: "14" },
  { label: "Lào Cai", value: "15" },
  { label: "Thái Nguyên", value: "19" },
  { label: "Lạng Sơn", value: "20" },
  { label: "Quảng Ninh", value: "22" },
  { label: "Bắc Ninh", value: "24" },
  { label: "Phú Thọ", value: "25" },
  { label: "Hải Phòng", value: "31" },
  { label: "Hưng Yên", value: "33" },
  { label: "Ninh Bình", value: "37" },
  { label: "Thanh Hóa", value: "38" },
  { label: "Nghệ An", value: "40" },
  { label: "Hà Tĩnh", value: "42" },
  { label: "Quảng Trị", value: "44" },
  { label: "Huế", value: "46" },
  { label: "Đà Nẵng", value: "48" },
  { label: "Quảng Ngãi", value: "51" },
  { label: "Gia Lai", value: "52" },
  { label: "Khánh Hòa", value: "56" },
  { label: "Đắk Lắk", value: "66" },
  { label: "Lâm Đồng", value: "68" },
  { label: "Đồng Nai", value: "75" },
  { label: "TP. Hồ Chí Minh", value: "79" },
  { label: "Tây Ninh", value: "80" },
  { label: "Đồng Tháp", value: "82" },
  { label: "Vĩnh Long", value: "86" },
  { label: "An Giang", value: "91" },
  { label: "Cần Thơ", value: "92" },
  { label: "Cà Mau", value: "96" },
]
export const HeroSection = ({categoryGroups = []}) => {
    return (
        <section className="bg-linear-to-br from-slate-950 via-teal-950 to-emerald-800 text-white">
            <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
                <h1 className="text-center text-3xl font-bold text-cyan-300 sm:text-4xl">JobNest - Tìm việc làm, phát triển sự nghiệp</h1>

                <Form action="/jobs" method="get" className="mx-auto mt-7 flex max-w-7xl flex-col gap-2 rounded-2xl p-2 shadow-xl sm:flex-row sm:gap-0 bg-white sm:rounded-full sm:items-center">
                    <InputGroup className="bg-white h-12 flex-1">
                        <InputGroupInput name="keyword" aria-label="Từ khóa tìm kiếm" id="inline-start-input" placeholder="Vị trí tuyển dụng, kỹ năng hoặc công ty..." className="text-slate-950" />
                        <InputGroupAddon align="inline-start">
                        <SearchIcon/>
                        </InputGroupAddon>
                    </InputGroup>

                    <div aria-hidden="true" className="hidden h-8 w-px shrink-0 bg-slate-200 sm:block"/>

                    <Select name="city_id" items={items}>
                        <SelectTrigger className="h-12 w-full px-5 border-0 bg-transparent shadow-none text-slate-700 hover:bg-muted sm:w-56">
                            <MapPin className="text-slate-400"></MapPin>
                            <SelectValue/>
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                            <SelectLabel>Địa điểm</SelectLabel>
                            {items.map((item) => (
                                <SelectItem key={item.value} value={item.value}>
                                {item.label}
                                </SelectItem>
                            ))}
                            </SelectGroup>
                        </SelectContent>
                    </Select>

                        <div aria-hidden="true" className="hidden h-8 w-px shrink-0 bg-slate-200 sm:block"/>

                    <Button type="submit" size="lg" className="h-12 shrink-0 bg-emerald-600 px-7 hover:bg-emerald-700"><SearchIcon/>Tìm kiếm</Button>
                </Form>
                <div className="mt-7 grid gap-4 items-stretch lg:grid-cols-[20rem_minmax(0,1fr)]">
                    <aside className="h-full rounded-2xl bg-white p-3 text-slate-900 shadow-xl">
                        <h2 className="px-3 py-2 text-sm text-slate-900  font-semibold">Ngành nghề nổi bật</h2>

                        <ul>
                            {categoryGroups.slice(0, 6).map((group) => (
                                <li key={group.id}>
                                    <Link
                                        to={`jobs?category_slug=${group.group_slug}`}
                                        className="flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium transition-colors hover:bg-teal-50 hover:text-primary"
                                    >
                                        <BriefcaseBusiness className="size-4 shrink-0"/>
                                        <span className="min-w-0 flex-1 truncate">{group.group_name}</span>
                                        <ChevronRight className="size-4 shrink-0"/>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </aside>
                    
                    <Carousel opts={{loop: true}} plugins={[Autoplay({delay: 5000,}), ]}
                        className='min-w-0 h-full overflow-hidden rounded-2xl shadow-xl [&_[data-slot=carousel-content]]:h-full'
                    >
                        <CarouselContent className='ml-0 h-full'>
                            <CarouselItem className='pl-0 h-full'><img src={banner1} alt="banner" className="h-full min-h-72 w-full object-cover"/></CarouselItem>
                            <CarouselItem className='pl-0 h-full'><img src={banner2} alt="banner" className="h-full min-h-72 w-full object-cover"/></CarouselItem>
                            <CarouselItem className='pl-0 h-full'><img src={banner3} alt="banner" className="h-full min-h-72 w-full object-cover"/></CarouselItem>
                        </CarouselContent>
                        <CarouselPrevious className='left-3 bg-white/80 hover:bg-white'/>
                        <CarouselNext className='right-3 bg-white/80 hover:bg-white'/>
                    </Carousel>
                </div>
            </div>
        </section>
    )
}