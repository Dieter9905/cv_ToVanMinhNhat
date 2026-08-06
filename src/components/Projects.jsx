import React from 'react'

const projects = [
  {
    id: 1,
    title: 'Coifilmne - Xem Phim Online',
    description: 'Nền tảng xem phim trực tuyến với giao diện mượt mà, tìm kiếm và lọc phim theo danh mục. Kết nối RESTful API, tối ưu tải dữ liệu.',
    icon: 'fa-film',
    tech: ['ReactJS', 'Tailwind CSS', 'API REST', 'Vercel'],
    link: 'https://coifilmne-web.vercel.app/',
    badge: 'Deployed Vercel',
    color: 'indigo'
  },
  {
    id: 2,
    title: 'Smart Waste AI - Phân Loại Rác',
    description: 'Hệ thống AI phân loại rác thải thông minh. Dashboard Responsive hiển thị kết quả real-time, biểu đồ thống kê trực quan.',
    icon: 'fa-leaf',
    tech: ['ReactJS', 'Python AI', 'API REST', 'Giải Nhì 2025'],
    badge: 'Dự án Confidential',
    color: 'green'
  },
  {
    id: 3,
    title: 'E-Commerce Store',
    description: 'Website thương mại điện tử đầy đủ chức năng. Quản lý sản phẩm, giỏ hàng, thanh toán, State Management với Redux.',
    icon: 'fa-shopping-cart',
    tech: ['ReactJS', 'Node.js', 'MySQL', 'Redux'],
    badge: 'Dự án Đồ Án',
    color: 'blue'
  },
  {
    id: 4,
    title: 'TasKyn - Quản Lý Công Việc',
    description: 'Ứng dụng quản lý công việc real-time. Phân loại và sắp xếp công việc theo trạng thái, Drag & Drop API.',
    icon: 'fa-check-circle',
    tech: ['ReactJS', 'Tailwind CSS', 'Drag & Drop'],
    badge: '11/2024 - 01/2025',
    color: 'purple'
  }
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-slate-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-white">Dự Án Tiêu Biểu</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div key={project.id} className={`bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 hover:transform hover:-translate-y-2 transition duration-300 hover:shadow-2xl hover:shadow-${project.color}-500/20`}>
              <div className="flex items-center gap-3 mb-4">
                <i className={`fas ${project.icon} text-${project.color}-400 text-2xl`}></i>
                <h3 className="text-xl font-bold text-white">{project.title}</h3>
              </div>
              <p className="text-slate-400 mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((t, idx) => (
                  <span key={idx} className={`px-3 py-1 bg-${project.color}-600/20 text-${project.color}-300 text-xs rounded-full`}>
                    {t}
                  </span>
                ))}
              </div>
              {project.link ? (
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-block text-indigo-400 hover:text-indigo-300 font-semibold">
                  Xem Demo <i className="fas fa-arrow-right ml-2"></i>
                </a>
              ) : (
                <span className="inline-block text-slate-500 font-semibold">
                  <i className="fas fa-lock mr-2"></i>{project.badge}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
