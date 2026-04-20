import { useState, useEffect } from 'react';
import { projects } from './data/projects';
import { FaGithub, FaLinkedin, FaEnvelope, FaCodeBranch, FaServer, FaChartLine, FaFilePdf, FaXmark } from "react-icons/fa6";
import foto from './data/fotoperfil.png';
import './App.css';

function PdfModal({ pdf, onClose }) {
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div className="modal-title-wrap">
            <FaFilePdf className="modal-pdf-icon" />
            <span className="modal-title">{pdf.label}</span>
          </div>
          <button className="modal-close" onClick={onClose} aria-label="Fechar">
            <FaXmark />
          </button>
        </div>
        <div className="modal-body">
          <iframe
            src={pdf.file}
            title={pdf.label}
            className="modal-iframe"
          />
        </div>
      </div>
    </div>
  );
}

function App() {
  const [activePdf, setActivePdf] = useState(null);

  return (
    <div>

      {/* ── Navbar ── */}
      <nav className="navbar">
        <div className="navbar-inner">
          <span className="navbar-logo">Arthur Lins da Gama</span>
          <div className="navbar-links">
            <a href="#sobre" className="navbar-link">Sobre</a>
            <a href="#projetos" className="navbar-link">Projetos</a>
            <a href="mailto:gamaarthur08@gmail.com" className="navbar-cta">
              <FaEnvelope /> Contato
            </a>
          </div>
        </div>
      </nav>

      {/* ── Hero ── */}
      <header className="hero">
        <div className="hero-text">
          <p className="hero-eyebrow">Data Science &amp; Software Engineering</p>
          <h1 className="hero-name">
            Arthur Lins<br />da Gama
          </h1>
          <p className="hero-role">CESAR School — Recife, Brasil</p>
          <p className="hero-desc">
            Especialista em Machine Learning e desenvolvimento de sistemas. Transformo dados
            em decisões estratégicas através de pipelines robustos e modelos preditivos.
          </p>
          <div className="hero-actions">
            <a href="#projetos" className="btn-primary">Ver Projetos</a>
            <a href="mailto:gamaarthur08@gmail.com" className="btn-secondary">
              <FaEnvelope /> Contato
            </a>
          </div>
          <div className="hero-socials">
            <a href="https://github.com/arthurlins7" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="GitHub">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/arthur-lins-da-gama-bbb682207" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
          </div>
        </div>
        <div className="hero-photo-wrap">
          <img src={foto} alt="Arthur Lins da Gama" className="hero-photo" />
        </div>
      </header>

      <main className="main">

        {/* ── About ── */}
        <section id="sobre" className="section">
          <div className="container">
            <p className="section-label">Sobre</p>
            <h2 className="section-title">Sobre o Portfólio</h2>
            <div className="about-text">
              <p>
                Este portfólio documenta minha evolução técnica e acadêmica na{' '}
                <strong>CESAR School</strong>, onde unifico o rigor da{' '}
                <strong>Ciência da Computação</strong> com a aplicação prática em{' '}
                <strong>Ciência de Dados</strong>.
              </p>
              <p>
                Meu foco é resolver problemas reais de mercado através da extração de valor
                dos dados, construindo pipelines robustos, treinando modelos preditivos e
                empacotando essas soluções em aplicações interativas.
              </p>
            </div>
          </div>
        </section>

        {/* ── Projects ── */}
        <section id="projetos" className="section">
          <div className="container">
            <p className="section-label">Projetos</p>
            <h2 className="section-title">Cases em Destaque</h2>
            <div className="projects-list">
              {projects.map((project, index) => (
                <article
                  key={index}
                  className={`project-card${project.featured ? ' project-card--featured' : ''}`}
                >
                  {project.featured && (
                    <div className="featured-badge">Trabalho de Conclusão de Curso</div>
                  )}

                  {project.image && (
                    <div className="project-img-wrap">
                      <img src={project.image} alt={`${project.title} preview`} className="project-img" />
                    </div>
                  )}

                  <div className="project-body">
                    <div className="project-header">
                      <h3 className="project-title">{project.title}</h3>
                      <span className="project-num">0{index + 1}</span>
                    </div>

                    <div className="project-stack">
                      {project.stack.split(',').map((tech, i) => (
                        <span key={i} className="tech-tag">{tech.trim()}</span>
                      ))}
                    </div>

                    <p className="project-desc">{project.description}</p>

                    <div className="narrative-grid">
                      <div className="narrative-card">
                        <div className="narrative-header">
                          <FaServer className="narrative-icon" />
                          <h4 className="narrative-label">O Desafio</h4>
                        </div>
                        <p className="narrative-text">{project.narrative.problem}</p>
                      </div>

                      <div className="narrative-card">
                        <div className="narrative-header">
                          <FaCodeBranch className="narrative-icon" />
                          <h4 className="narrative-label">A Abordagem</h4>
                        </div>
                        <p className="narrative-text">{project.narrative.solution}</p>
                      </div>

                      {project.narrative.result && (
                        <div className="narrative-card">
                          <div className="narrative-header">
                            <FaChartLine className="narrative-icon" />
                            <h4 className="narrative-label">O Impacto</h4>
                          </div>
                          <p className="narrative-text">{project.narrative.result}</p>
                        </div>
                      )}
                    </div>

                    <div className="project-footer">
                      {project.pdfs && project.pdfs.map((pdf, i) => (
                        <button
                          key={i}
                          className="pdf-btn"
                          onClick={() => setActivePdf(pdf)}
                        >
                          <FaFilePdf /> {pdf.label}
                        </button>
                      ))}
                      <a href={project.link} target="_blank" rel="noopener noreferrer" className="github-btn">
                        <FaGithub /> Ver Código
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* ── Footer ── */}
      <footer className="footer">
        <div className="footer-inner">
          <p className="footer-copy">© 2026 Arthur Lins da Gama. Todos os direitos reservados.</p>
          <p className="footer-tech">React &amp; Tailwind CSS</p>
        </div>
      </footer>

      {/* ── PDF Modal ── */}
      {activePdf && <PdfModal pdf={activePdf} onClose={() => setActivePdf(null)} />}
    </div>
  );
}

export default App;
