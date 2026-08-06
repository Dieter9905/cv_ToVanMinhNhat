import React from 'react'

export default function Contact() {
  return (
    <section className="py-20 bg-slate-950">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold mb-6 text-white">Liên Hệ Tôi</h2>
        <div className="w-20 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto mb-12"></div>
        
        <p className="text-slate-400 text-lg mb-8 max-w-2xl mx-auto">
          Tôi luôn sẵn sàng khám phá các cơ hội mới và cộng tác trên những dự án thú vị. Hãy liên hệ với tôi qua các kênh dưới đây!
        </p>
        
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <a href="tel:0798141377" className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 hover:transform hover:-translate-y-2 transition duration-300 hover:shadow-2xl hover:shadow-indigo-500/20">
            <i className="fas fa-phone text-indigo-400 text-3xl mb-4"></i>
            <p className="text-slate-300 font-semibold">0798141377</p>
          </a>
          
          <a href="mailto:minhnhat13246@gmail.com" className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 hover:transform hover:-translate-y-2 transition duration-300 hover:shadow-2xl hover:shadow-indigo-500/20">
            <i className="fas fa-envelope text-indigo-400 text-3xl mb-4"></i>
            <p className="text-slate-300 font-semibold">minhnhat13246@gmail.com</p>
          </a>
          
          <a href="https://github.com/Dieter9905" target="_blank" rel="noopener noreferrer" className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 hover:transform hover:-translate-y-2 transition duration-300 hover:shadow-2xl hover:shadow-indigo-500/20">
            <i className="fab fa-github text-indigo-400 text-3xl mb-4"></i>
            <p className="text-slate-300 font-semibold">github.com/Dieter9905</p>
          </a>
        </div>
        
        <div className="flex justify-center gap-6">
          <a href="https://github.com/Dieter9905" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-indigo-400 transition text-3xl">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-indigo-400 transition text-3xl">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="mailto:minhnhat13246@gmail.com" className="text-slate-400 hover:text-indigo-400 transition text-3xl">
            <i className="fas fa-envelope"></i>
          </a>
        </div>
      </div>
    </section>
  )
}
