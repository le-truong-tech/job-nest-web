import { Link } from "react-router"

const footerSections = [
  {
    title: "Ứng viên",
    links: [
      { label: "Tìm việc làm", to: "/jobs" },
      { label: "Danh sách công ty", to: "/companies" },
      { label: "Tạo CV", to: "/candidate/cv/create" },
    ],
  },
  {
    title: "Tài khoản",
    links: [
      { label: "Đăng nhập", to: "/login" },
      { label: "Đăng ký", to: "/register" },
    ],
  },
  {
    title: "Nhà tuyển dụng",
    links: [
      { label: "Đăng ký nhà tuyển dụng", to: "/employer/register" },
      { label: "Đăng tin tuyển dụng", to: "/employer/jobs/new" },
    ],
  },
]

const currentYear = new Date().getFullYear()

export const Footer = () => {
    return (
        <footer className="bg-linear-to-r from-slate-950 to-teal-950 text-white">    
            <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                    <div>
                      <Link to='/' className="text-xl font-bold text-white">
                      Job<span className="text-cyan-300">Nest</span>
                      </Link>
                      <p className="mt-4 max-w-xs text-sm leading-6 text-white/70">Kết nối ứng viên với những cơ hội nghề nghiệp phù hợp!</p>
                    </div>
                    
                    {footerSections.map((item) => (
                        <div key={item.title}>
                            <h2 className="text-sm font-semibold text-white">{item.title}</h2>

                            <ul className="mt-4 space-y-3">
                                {item.links.map((label) => (
                                  <li key={label.to}><Link key={label.to} className="text-white/70 text-sm transition-colors hover:text-cyan-300" to={label.to}>{label.label}</Link></li>
                              ))}
                            </ul>
                        </div>
                    ))}

                </div>
                <div className="mt-10 border-t border-white/10 pt-6">Copyright©{currentYear} <b>Trương Thành Lê</b></div>
            </div>
        </footer>
    )
}