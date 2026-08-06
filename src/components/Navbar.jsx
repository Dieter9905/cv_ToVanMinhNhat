import React from 'react'

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-slate-950/80 backdrop-blur-md border-b border-slate-800/50 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
              <i className="fas fa-code text-white text-sm"></i>
            </div>
            <span className="font-bold text-lg text-white">Tô Văn Minh Nhật</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-slate-300 hover:text-indigo-400 transition">Về Tôi</a>
            <a href="#projects" className="text-slate-300 hover:text-indigo-400 transition">Dự Án</a>
            <a href="#skills" className="text-slate-300 hover:text-indigo-400 transition">Kỹ Năng</a>
            <a href="cv/index.html" className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg transition">Xem CV</a>
          </div>
          <button className="md:hidden text-slate-300">
            <i className="fas fa-bars text-xl"></i>
          </button>
        </div>
      </div>
    </nav>
  )
}
