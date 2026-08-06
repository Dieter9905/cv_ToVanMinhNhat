import React from 'react'
import avatarImage from '../../images/z5809913538820_79124efe288c8d34c7415685c357916b.jpg'

export default function Hero() {
  return (
    <section className="hero-gradient min-h-screen flex items-center pt-20 relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 right-20 w-72 h-72 bg-indigo-600/20 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-10 left-20 w-72 h-72 bg-purple-600/20 rounded-full blur-3xl opacity-20"></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="animate-fadeInUp">
            <div className="inline-block px-4 py-2 bg-indigo-600/20 border border-indigo-500/50 rounded-full mb-6">
              <span className="text-indigo-300 text-sm font-semibold">
                <i className="fas fa-star text-yellow-400 mr-2"></i>Sẵn sàng đi làm
              </span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl font-bold mb-6 leading-tight">
              <span className="text-white">Tô Văn</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400"> Minh Nhật</span>
            </h1>
            
            <p className="text-indigo-300 text-xl font-semibold mb-4">Front-end Developer</p>
            
            <p className="text-slate-400 text-lg mb-8 leading-relaxed max-w-lg">
              Lập trình viên Front-end giàu tâm huyết với React, Node.js và hiện đại CSS. Chuyên thiết kế giao diện Responsive, tối ưu UX/UI và phát triển ứng dụng web hiệu năng cao.
            </p>
            
            <div className="flex gap-4 mb-8">
              <a href="cv/index.html" className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-lg font-semibold transition transform hover:scale-105 hover:shadow-lg hover:shadow-indigo-500/50">
                <i className="fas fa-file-pdf mr-2"></i>Xem CV Đầy Đủ
              </a>
              <a href="#projects" className="inline-block border border-indigo-500 text-indigo-300 hover:text-white hover:border-indigo-400 px-8 py-3 rounded-lg font-semibold transition">
                <i className="fas fa-folder-open mr-2"></i>Dự Án
              </a>
            </div>
            
            <div className="flex gap-6">
              <a href="https://github.com/Dieter9905" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-indigo-400 transition text-2xl">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-indigo-400 transition text-2xl">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="mailto:minhnhat13246@gmail.com" className="text-slate-400 hover:text-indigo-400 transition text-2xl">
                <i className="fas fa-envelope"></i>
              </a>
            </div>
          </div>
          
          {/* Right Image */}
          <div className="animate-fadeInUp" style={{animationDelay: '0.2s'}}>
            <div className="relative">
              <div className="w-96 h-96 mx-auto">
                <img src={avatarImage}
                     alt="Tô Văn Minh Nhật"
                     className="w-full h-full rounded-2xl object-cover border-2 border-indigo-500/30 shadow-2xl" />
              </div>
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-indigo-600/30 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
