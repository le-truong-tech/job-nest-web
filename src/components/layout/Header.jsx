import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Link, NavLink } from "react-router"
import logoUrl from "@/assets/logo.png"
const navigationItems = [
    {label: 'Việc làm', to: '/jobs'},
    {label: 'Công ty', to: '/companies'},
    {label: 'Tạo CV', to: '/candidate/cv/create'},
]

export const Header = () => {
    return (
        <header className="w-full border-b border-border bg-background">
            <nav
                aria-label="Điều hướng chính" 
                className="mx-auto flex h-16 max-w-7xl w-full items-center justify-between px-4 sm:px-6 lg:px-8">
                <NavLink to='/' end = {true} className="flex items-center">
                    <img src={logoUrl} alt="logo" className="size-10 object-contain" />
                    <span className="font-bold text-xl text-primary ">JobNest</span>
                </NavLink>
                <div className="hidden items-center justify-center h-12 gap-4 rounded-2xl border-border w-80 px-6 py-1 md:flex lg:w-96 bg-[#f4f4f4]">
                    {navigationItems.map((item) => (
                        <NavLink to={item.to} key={item.to} end={item.to === '/'} className={({isActive}) => cn(
                            'inline-flex h-8 items-center  border-b-2 border-transparent text-sm font-medium text-muted-foreground transition-colors hover:text-primar', 
                            isActive && 'border-primary text-primary'
                        )}>{item.label}</NavLink>
                    ))}
                </div>
                <div className="flex gap-2 items-center">
                    <Link to={'/login'} className={cn(buttonVariants({variant: "outline"}), 'border-border rounded-md')}>
                        Đăng nhập
                    </Link>
                    <Link to={'/register'} className={cn(buttonVariants(), 'bg-primary rounded-md')}>
                        Đăng ký
                    </Link>
                </div>
            </nav>
        </header>
    )
}