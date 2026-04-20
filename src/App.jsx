import { projects } from './data/projects';
import { FaGithub, FaLinkedin, FaEnvelope, FaCodeBranch, FaServer, FaChartLine } from "react-icons/fa6";

function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      
      {/* Hero Section (Modo Escuro) */}
      <header className="bg-slate-900 text-white pt-20 pb-24 px-6 relative overflow-hidden">
        {/* Efeitos visuais de fundo */}
        <div className="absolute top-[-50%] left-[-10%] w-96 h-96 bg-blue-600/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-[-20%] right-[-5%] w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl"></div>
        
        <div className="max-w-6xl mx-auto relative z-10 flex flex-col md:flex-row items-center gap-10">
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4">
              Arthur Lins da Gama
            </h1>
            <p className="text-xl md:text-2xl text-blue-400 font-medium mb-6">
              Data Science & Software Engineering
            </p>
            <p className="text-slate-300 text-lg md:text-xl leading-relaxed max-w-2xl mb-8">
              Transformando dados complexos em decisões estratégicas. Especialista em Machine Learning, construção de modelos preditivos e desenvolvimento de sistemas escaláveis.
            </p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <a href="#projetos" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                Ver Projetos
              </a>
              <a href="mailto:gamaarthur08@gmail.com" className="bg-slate-800 border border-slate-700 hover:bg-slate-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors flex items-center gap-2">
                <FaEnvelope /> Contato
              </a>
            </div>
          </div>
          
          <div className="flex md:flex-col gap-6 text-3xl text-slate-400">
            <a href="https://github.com/arthurlins7" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/arthur-lins-da-gama-bbb682207" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-colors">
              <FaLinkedin />
            </a>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-16">
        
        {/* Sobre Mim Section */}
        <section className="mb-24">
          <h2 className="text-3xl font-bold mb-8 border-l-4 border-blue-600 pl-4 text-slate-800">Sobre o Portfólio</h2>
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 text-slate-700 leading-relaxed text-lg">
            <p>
              Este portfólio documenta minha evolução técnica e acadêmica na CESAR School, onde unifico o rigor da <strong>Ciência da Computação</strong> com a aplicação prática em <strong>Ciência de Dados</strong>.
            </p>
            <p className="mt-4">
              Meu foco é resolver problemas reais de mercado através da extração de valor dos dados, construindo pipelines robustos, treinando modelos preditivos e empacotando essas soluções em aplicações interativas.
            </p>
          </div>
        </section>

        {/* Projects Grid */}
        <section id="projetos">
          <h2 className="text-3xl font-bold mb-10 border-l-4 border-blue-600 pl-4 text-slate-800">Cases em Destaque</h2>
          <div className="grid gap-12">
            {projects.map((project, index) => (
              <article key={index} className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-xl hover:border-blue-200 transition-all duration-300">
                
                {/* Imagem do Projeto (Se houver) */}
                {project.image && (
                  <div className="w-full h-64 bg-slate-100 border-b border-slate-200 overflow-hidden flex items-center justify-center">
                    <img src={project.image} alt={`Visualização do projeto ${project.title}`} className="object-cover w-full h-full opacity-90 hover:opacity-100 transition-opacity" />
                  </div>
                )}

                <div className="p-8">
                  <div className="mb-6">
                    <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">{project.title}</h3>
                    <div className="flex flex-wrap gap-2">
                      {project.stack.split(',').map((tech, i) => (
                        <span key={i} className="bg-slate-100 text-slate-700 px-3 py-1.5 rounded-md text-xs font-bold tracking-wide uppercase">
                          {tech.trim()}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <p className="text-slate-600 text-lg mb-10 border-l-2 border-slate-200 pl-4 italic">
                    {project.description}
                  </p>
                  
                  <div className="grid md:grid-cols-3 gap-6 text-sm mb-10">
                    <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                      <div className="flex items-center gap-2 text-slate-500 mb-3">
                        <FaServer className="text-lg" /> 
                        <h4 className="font-bold uppercase tracking-wider text-xs">O Desafio</h4>
                      </div>
                      <p className="text-slate-700 leading-relaxed">{project.narrative.problem}</p>
                    </div>
                    
                    <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                      <div className="flex items-center gap-2 text-blue-600 mb-3">
                        <FaCodeBranch className="text-lg" /> 
                        <h4 className="font-bold uppercase tracking-wider text-xs">A Abordagem</h4>
                      </div>
                      <p className="text-slate-700 leading-relaxed">{project.narrative.solution}</p>
                    </div>

                    {project.narrative.result && (
                      <div className="bg-emerald-50 p-6 rounded-xl border border-emerald-100">
                        <div className="flex items-center gap-2 text-emerald-600 mb-3">
                          <FaChartLine className="text-lg" /> 
                          <h4 className="font-bold uppercase tracking-wider text-xs">O Impacto</h4>
                        </div>
                        <p className="text-slate-700 leading-relaxed">{project.narrative.result}</p>
                      </div>
                    )}
                  </div>

                  <div className="pt-6 border-t border-slate-100 flex justify-end">
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-slate-900 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                      <FaGithub className="text-xl" /> Ver Código Completo
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer className="bg-slate-900 text-white py-12 mt-20 border-t border-slate-800">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-slate-400">
          <p>© 2026 Arthur Lins da Gama. Todos os direitos reservados.</p>
          <p className="mt-2 md:mt-0 text-sm">Desenvolvido com React & Tailwind CSS.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;