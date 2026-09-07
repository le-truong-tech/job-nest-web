import { NavLink , Outlet} from "react-router"

const navigationItems = [
    {label: 'Home', to: '/'},
    {label: 'Jobs', to: '/jobs'},
    {label: 'Companies', to: '/companies'},
]

export const MainLayout = () => {
    return(
        <div className="min-h-screen bg-background text-foreground">
            <header className="border-b bg-card">
                <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
                    <NavLink to={'/'} className={'text-2xl font-bold'}>JobsNest</NavLink>

                    <nav className="flex items-center gap-6">
                        {navigationItems.map((item) => (
                            <NavLink
                                key = {item.to}
                                to={item.to}
                                end={item.to === '/'}
                                className={({isActive}) => isActive ? 'font-semibold text-primary' : 'text-muted-foreground hover:text-foreground'}
                            >
                                {item.label}
                            </NavLink>
                        ))}
                    </nav>
                </div>
            </header>
            <main className="mx-auto max-w-7xl px-4 py-10">\
                <Outlet></Outlet>
            </main>
        </div>
    )
}