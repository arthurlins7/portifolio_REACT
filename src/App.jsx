import { projects } from './data/projects';
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa6";

function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">
      {/* Header / Hero */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-5xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-blue-600">Arthur Lins da Gama</h1>
            <p className="text-lg text-gray-600">Estudante de Ciência da Computação | CESAR School</p>
          </div>
          <div className="flex gap-4 text-2xl">
            <a 
              href="https://github.com/arthurlins7" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-blue-600 transition-colors"
            >
              <FaGithub />
            </a>

            <a 
              href="https://www.linkedin.com/in/arthur-lins-da-gama-bbb682207" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-blue-600 transition-colors"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-12">
        {/* Sobre Mim Section */}
        <section className="mb-20">
          <h2 className="text-2xl font-bold mb-6 border-l-4 border-blue-600 pl-4">Sobre o Portfólio</h2>
          <p className="text-gray-700 leading-relaxed max-w-3xl">
            Este portfólio documenta minha trajetória técnica no curso de Ciência da Computação na CESAR School. 
            Aqui apresento projetos que unem análise de dados, machine learning e desenvolvimento full-stack, 
            focando na resolução de problemas reais de mercado e academia.
          </p>
        </section>

        {/* Projects Grid */}
        <section>
          <h2 className="text-2xl font-bold mb-10 border-l-4 border-blue-600 pl-4">Cases de Projetos</h2>
          <div className="grid gap-12">
            {projects.map((project, index) => (
              <article key={index} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="flex flex-col md:flex-row justify-between mb-6 gap-4">
                  <h3 className="text-2xl font-bold text-gray-800">{project.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.stack.split(',').map((tech, i) => (
                      <span key={i} className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                        {tech.trim()}
                      </span>
                    ))}
                  </div>
                </div>
                
                <p className="text-gray-600 italic mb-6">{project.description}</p>
                
                <div className="grid md:grid-cols-2 gap-8 text-sm">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-bold uppercase text-gray-500 mb-2 tracking-wider text-xs">O Problema</h4>
                    <p className="text-gray-700 leading-relaxed">{project.narrative.problem}</p>
                  </div>
                  <div className="bg-blue-50/50 p-4 rounded-lg border border-blue-100">
                    <h4 className="font-bold uppercase text-blue-500 mb-2 tracking-wider text-xs">Minha Solução</h4>
                    <p className="text-gray-700 leading-relaxed">{project.narrative.solution}</p>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-gray-100 flex justify-end">
                  <a href={project.link} className="flex items-center gap-2 text-blue-600 font-semibold hover:underline">
                    Ver Repositório Completo <FaGithub />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-white py-12 mt-20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <p className="text-gray-400">© 2026 - Desenvolvido com React e Tailwind CSS.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;