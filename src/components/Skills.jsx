import React from 'react'

const skillCategories = [
  {
    title: 'Front-end Core',
    icon: 'fa-code',
    color: 'indigo',
    skills: ['JavaScript (ES6+)', 'ReactJS', 'HTML5/CSS3', 'Tailwind CSS', 'Redux', 'Responsive Design']
  },
  {
    title: 'Back-end & Database',
    icon: 'fa-database',
    color: 'purple',
    skills: ['Node.js', 'Express', 'Python', 'RESTful API', 'MySQL', 'Axios/JSON']
  },
  {
    title: 'Tools & DevOps',
    icon: 'fa-tools',
    color: 'green',
    skills: ['Git/GitHub', 'VS Code', 'Figma', 'Postman', 'Google AI', 'Vercel/Netlify']
  }
]

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-slate-900/50 border-b border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-white">Kỹ Năng Chuyên Môn</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-12">
          {skillCategories.map((category, idx) => (
            <div key={idx}>
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2 text-white">
                <i className={`fas ${category.icon} text-${category.color}-400`}></i>
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, i) => (
                  <span key={i} className={`px-4 py-2 bg-${category.color}-600/20 text-${category.color}-300 rounded-lg font-semibold text-sm border border-${category.color}-500/30 hover:border-${category.color}-500 hover:scale-105 transition cursor-default`}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
