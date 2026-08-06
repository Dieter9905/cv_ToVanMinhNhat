import React from 'react'

export default function About() {
  return (
    <section id="about" className="py-20 bg-slate-900/50 border-b border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-white">Về Tôi</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-8 hover:transform hover:-translate-y-2 transition duration-300 hover:shadow-2xl hover:shadow-indigo-500/20">
            <div className="w-16 h-16 bg-indigo-600/20 rounded-lg flex items-center justify-center mb-4">
              <i className="fas fa-graduation-cap text-indigo-400 text-2xl"></i>
            </div>
            <h3 className="text-xl font-bold mb-2 text-white">Học Vấn</h3>
            <p className="text-slate-400">ĐH Nguyễn Tất Thành • Chuyên ngành Kỹ thuật Phần mềm • GPA: 3.34/4.0 (Giỏi)</p>
          </div>
          
          <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-8 hover:transform hover:-translate-y-2 transition duration-300 hover:shadow-2xl hover:shadow-indigo-500/20">
            <div className="w-16 h-16 bg-indigo-600/20 rounded-lg flex items-center justify-center mb-4">
              <i className="fas fa-trophy text-yellow-400 text-2xl"></i>
            </div>
            <h3 className="text-xl font-bold mb-2 text-white">Thành Tựu</h3>
            <p className="text-slate-400">Giải Nhì Cuộc Thi Kỹ Thuật Phần Mềm 2025 • 5 Chứng chỉ Google AI</p>
          </div>
          
          <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-8 hover:transform hover:-translate-y-2 transition duration-300 hover:shadow-2xl hover:shadow-indigo-500/20">
            <div className="w-16 h-16 bg-indigo-600/20 rounded-lg flex items-center justify-center mb-4">
              <i className="fas fa-rocket text-purple-400 text-2xl"></i>
            </div>
            <h3 className="text-xl font-bold mb-2 text-white">Mục Tiêu</h3>
            <p className="text-slate-400">Trở thành Front-end Lead trong 3 năm tới • Tối ưu hiệu năng & UX/UI</p>
          </div>
        </div>
      </div>
    </section>
  )
}
