import { useState, useEffect } from 'react';
import { projects, experience, education, skills } from './data/projects';
import { FaGithub, FaLinkedin, FaEnvelope, FaCodeBranch, FaServer, FaChartLine, FaFilePdf, FaXmark, FaBriefcase, FaGraduationCap } from "react-icons/fa6";
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
          <iframe src={pdf.file} title={pdf.label} className="modal-iframe" />
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
            <a href="#projetos"    className="navbar-link">Projetos</a>
            <a href="#experiencia" className="navbar-link">Experiência</a>
            <a href="#formacao"    className="navbar-link">Formação</a>
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
          <div className="hero-name-row">
            <div className="hero-photo-wrap hero-photo-wrap--mobile">
              <img src={foto} alt="Arthur Lins da Gama" className="hero-photo" />
            </div>
            <h1 className="hero-name">
              Arthur Lins<br />da Gama
            </h1>
          </div>
          <p className="hero-role">CESAR School — Recife, Brasil</p>
          <p className="hero-desc">
            Unindo visão de negócios e desenvolvimento de sistemas. Utilizo Machine Learning e pipelines de dados para resolver problemas complexos e apoiar decisões estratégicas.
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
        <div className="hero-photo-wrap hero-photo-wrap--desktop">
          <img src={foto} alt="Arthur Lins da Gama" className="hero-photo" />
        </div>
      </header>

      <main className="main">

        {/* ── Projects (foco principal) ── */}
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
                        <button key={i} className="pdf-btn" onClick={() => setActivePdf(pdf)}>
                          <FaFilePdf /> {pdf.label}
                        </button>
                      ))}
                      {project.dashboard && (
                        <a href={project.dashboard} target="_blank" rel="noopener noreferrer" className="github-btn">
                          <FaChartLine /> Ver Dashboard
                        </a>
                      )}
                      {project.link && (
                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="github-btn">
                          <FaGithub /> Ver Código
                        </a>
                      )}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── Experience ── */}
        <section id="experiencia" className="section section--secondary">
          <div className="container">
            <p className="section-label">Experiência</p>
            <h2 className="section-title section-title--sm">Experiência Profissional</h2>
            <div className="exp-list">
              {experience.map((item, i) => (
                <div key={i} className="exp-item">
                  <div className="exp-left">
                    <div className="exp-icon"><FaBriefcase /></div>
                    <div className="exp-line" />
                  </div>
                  <div className="exp-content">
                    <div className="exp-header">
                      <div>
                        <span className="exp-company">{item.company}</span>
                        <span className="exp-role">{item.role}</span>
                      </div>
                      <span className="exp-period">{item.period}</span>
                    </div>
                    <ul className="exp-bullets">
                      {item.bullets.map((b, j) => (
                        <li key={j}>{b}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Education ── */}
        <section id="formacao" className="section section--secondary">
          <div className="container">
            <p className="section-label">Formação</p>
            <h2 className="section-title section-title--sm">Formação Acadêmica</h2>
            <div className="edu-list">
              {education.map((item, i) => (
                <div key={i} className="edu-item">
                  <div className="edu-icon"><FaGraduationCap /></div>
                  <div className="edu-content">
                    <div className="edu-header">
                      <span className="edu-institution">{item.institution}</span>
                      <span className="edu-period">{item.period}</span>
                    </div>
                    <p className="edu-degree">{item.degree}</p>
                    <p className="edu-note">{item.note}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Skills ── */}
        <section className="section section--secondary">
          <div className="container">
            <p className="section-label">Skills</p>
            <h2 className="section-title section-title--sm">Tecnologias &amp; Ferramentas</h2>
            <div className="skills-grid">
              {skills.map((group, i) => (
                <div key={i} className="skill-group">
                  <h3 className="skill-category">{group.category}</h3>
                  <div className="skill-tags">
                    {group.items.map((skill, j) => (
                      <span key={j} className="skill-tag">{skill}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>

      {/* ── Footer ── */}
      <footer className="footer">
        <div className="footer-inner">
          <p className="footer-copy">© 2026 Arthur Lins da Gama. Todos os direitos reservados.</p>
          <div className="footer-links">
            <a href="https://github.com/arthurlins7" target="_blank" rel="noopener noreferrer" className="footer-link"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/arthur-lins-da-gama-bbb682207" target="_blank" rel="noopener noreferrer" className="footer-link"><FaLinkedin /></a>
            <a href="mailto:gamaarthur08@gmail.com" className="footer-link"><FaEnvelope /></a>
          </div>
        </div>
      </footer>

      {activePdf && <PdfModal pdf={activePdf} onClose={() => setActivePdf(null)} />}
    </div>
  );
}

export default App;
