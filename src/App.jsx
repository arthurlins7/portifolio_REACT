import { useState, useEffect, useCallback } from 'react';
import { projects, experience, education, skills } from './data/projects';
import { t } from './data/translations';
import { FaGithub, FaLinkedin, FaEnvelope, FaCodeBranch, FaServer, FaChartLine, FaFilePdf, FaXmark, FaBriefcase, FaGraduationCap, FaDownload, FaArrowUpRightFromSquare } from "react-icons/fa6";
import foto from './data/fotoperfil.png';
import './App.css';

function LangSwitch({ lang, setLang }) {
  const toggle = (newLang) => {
    if (newLang === lang) return;
    const url = new URL(window.location.href);
    if (newLang === 'en') {
      url.searchParams.set('lang', 'en');
    } else {
      url.searchParams.delete('lang');
    }
    window.history.replaceState({}, '', url.toString());
    setLang(newLang);
  };

  return (
    <div className="lang-switch" role="group" aria-label="Language selector">
      <button
        className={`lang-switch-btn${lang === 'pt' ? ' lang-switch-btn--active' : ''}`}
        onClick={() => toggle('pt')}
        aria-pressed={lang === 'pt'}
        title="Português"
      >
        <span className="lang-code">PT</span>
      </button>
      <button
        className={`lang-switch-btn${lang === 'en' ? ' lang-switch-btn--active' : ''}`}
        onClick={() => toggle('en')}
        aria-pressed={lang === 'en'}
        title="English"
      >
        <span className="lang-code">EN</span>
      </button>
    </div>
  );
}

function PdfModal({ pdf, onClose, tr }) {
  const [isMobile, setIsMobile] = useState(() => window.matchMedia('(max-width: 640px)').matches);

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 640px)');
    const handler = (e) => setIsMobile(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

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
      <div className={`modal${isMobile ? ' modal--mobile' : ''}`} onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div className="modal-title-wrap">
            <FaFilePdf className="modal-pdf-icon" />
            <span className="modal-title">{pdf.label}</span>
          </div>
          <div className="modal-actions">
            <a href={pdf.file} download className="modal-action-btn" aria-label={tr.modal.download} title={tr.modal.download}>
              <FaDownload />
            </a>
            <a href={pdf.file} target="_blank" rel="noreferrer" className="modal-action-btn" aria-label={tr.modal.openTab} title={tr.modal.openTab}>
              <FaArrowUpRightFromSquare />
            </a>
            <button className="modal-close" onClick={onClose} aria-label={tr.modal.close}>
              <FaXmark />
            </button>
          </div>
        </div>
        {isMobile ? (
          <div className="modal-mobile-body">
            <FaFilePdf className="modal-mobile-icon" />
            <p className="modal-mobile-name">{pdf.label}</p>
            <p className="modal-mobile-hint">{tr.modal.mobileHint}</p>
            <div className="modal-mobile-btns">
              <a href={pdf.file} target="_blank" rel="noreferrer" className="modal-mobile-btn modal-mobile-btn--open">
                <FaArrowUpRightFromSquare /> {tr.modal.openBrowser}
              </a>
              <a href={pdf.file} download className="modal-mobile-btn modal-mobile-btn--download">
                <FaDownload /> {tr.modal.download}
              </a>
            </div>
          </div>
        ) : (
          <div className="modal-body">
            <embed src={pdf.file} type="application/pdf" className="modal-iframe" />
          </div>
        )}
      </div>
    </div>
  );
}

function App() {
  const [activePdf, setActivePdf] = useState(null);
  const [lang, setLang] = useState(() => {
    const params = new URLSearchParams(window.location.search);
    return params.get('lang') === 'en' ? 'en' : 'pt';
  });

  const tr = t[lang];

  const getProjectContent = useCallback((project) => {
    if (lang === 'en') {
      return {
        title: project.titleEn || project.title,
        description: project.en?.description || project.description,
        narrative: project.en?.narrative || project.narrative,
      };
    }
    return {
      title: project.title,
      description: project.description,
      narrative: project.narrative,
    };
  }, [lang]);

  return (
    <div>

      {/* ── Navbar ── */}
      <nav className="navbar">
        <div className="navbar-inner">
          <span className="navbar-logo">Arthur Lins da Gama</span>
          <div className="navbar-links">
            <a href="#projetos"    className="navbar-link">{tr.nav.projects}</a>
            <a href="#experiencia" className="navbar-link">{tr.nav.experience}</a>
            <a href="#formacao"    className="navbar-link">{tr.nav.education}</a>
            <a href="mailto:gamaarthur08@gmail.com" className="navbar-cta">
              <FaEnvelope /> {tr.nav.contact}
            </a>
            <LangSwitch lang={lang} setLang={setLang} />
          </div>
        </div>
      </nav>

      {/* ── Hero ── */}
      <header className="hero">
        <div className="hero-text">
          <p className="hero-eyebrow">{tr.hero.eyebrow}</p>
          <div className="hero-name-row">
            <div className="hero-photo-wrap hero-photo-wrap--mobile">
              <img src={foto} alt="Arthur Lins da Gama" className="hero-photo" />
            </div>
            <h1 className="hero-name">
              Arthur Lins<br />da Gama
            </h1>
          </div>
          <p className="hero-role">{tr.hero.location}</p>
          <p className="hero-desc">{tr.hero.desc}</p>
          <div className="hero-actions">
            <a href="#projetos" className="btn-primary">{tr.hero.cta}</a>
            <a href="mailto:gamaarthur08@gmail.com" className="btn-secondary">
              <FaEnvelope /> {tr.hero.contact}
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

        {/* ── Projects ── */}
        <section id="projetos" className="section">
          <div className="container">
            <p className="section-label">{tr.sections.projectsLabel}</p>
            <h2 className="section-title">{tr.sections.projectsTitle}</h2>
            <div className="projects-list">
              {projects.map((project, index) => {
                const { title, description, narrative } = getProjectContent(project);
                return (
                  <article
                    key={index}
                    className={`project-card${project.featured ? ' project-card--featured' : ''}`}
                  >
                    {project.featured && (
                      <div className="featured-badge">Main project</div>
                    )}

                    {project.image && (
                      <div className="project-img-wrap">
                        <img src={project.image} alt={`${title} preview`} className="project-img" />
                      </div>
                    )}

                    <div className="project-body">
                      <div className="project-header">
                        <h3 className="project-title">{title}</h3>
                        <span className="project-num">0{index + 1}</span>
                      </div>

                      <div className="project-stack">
                        {project.stack.split(',').map((tech, i) => (
                          <span key={i} className="tech-tag">{tech.trim()}</span>
                        ))}
                      </div>

                      <p className="project-desc">{description}</p>

                      <div className="narrative-grid">
                        <div className="narrative-card">
                          <div className="narrative-header">
                            <FaServer className="narrative-icon" />
                            <h4 className="narrative-label">{tr.narrative.challenge}</h4>
                          </div>
                          <p className="narrative-text">{narrative.problem}</p>
                        </div>

                        <div className="narrative-card">
                          <div className="narrative-header">
                            <FaCodeBranch className="narrative-icon" />
                            <h4 className="narrative-label">{tr.narrative.approach}</h4>
                          </div>
                          <p className="narrative-text">{narrative.solution}</p>
                        </div>

                        {narrative.result && (
                          <div className="narrative-card">
                            <div className="narrative-header">
                              <FaChartLine className="narrative-icon" />
                              <h4 className="narrative-label">{tr.narrative.impact}</h4>
                            </div>
                            <p className="narrative-text">{narrative.result}</p>
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
                            <FaChartLine /> {tr.project.viewDashboard}
                          </a>
                        )}
                        {project.link && (
                          <a href={project.link} target="_blank" rel="noopener noreferrer" className="github-btn">
                            <FaGithub /> {tr.project.viewCode}
                          </a>
                        )}
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── Experience ── */}
        <section id="experiencia" className="section section--secondary">
          <div className="container">
            <p className="section-label">{tr.sections.experienceLabel}</p>
            <h2 className="section-title section-title--sm">{tr.sections.experienceTitle}</h2>
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
                        <span className="exp-role">{lang === 'en' ? item.roleEn : item.role}</span>
                        {item.location && (
                          <span className="exp-location">{lang === 'en' ? item.locationEn : item.location}</span>
                        )}
                      </div>
                      <span className="exp-period">{lang === 'en' && item.periodEn ? item.periodEn : item.period}</span>
                    </div>
                    <ul className="exp-bullets">
                      {(lang === 'en' ? item.bulletsEn : item.bullets).map((b, j) => (
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
            <p className="section-label">{tr.sections.educationLabel}</p>
            <h2 className="section-title section-title--sm">{tr.sections.educationTitle}</h2>
            <div className="edu-list">
              {education.map((item, i) => (
                <div key={i} className="edu-item">
                  <div className="edu-icon"><FaGraduationCap /></div>
                  <div className="edu-content">
                    <div className="edu-header">
                      <span className="edu-institution">{item.institution}</span>
                      <span className="edu-period">{lang === 'en' ? item.periodEn : item.period}</span>
                    </div>
                    <p className="edu-degree">{lang === 'en' ? item.degreeEn : item.degree}</p>
                    <p className="edu-note">{lang === 'en' ? item.noteEn : item.note}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Skills ── */}
        <section className="section section--secondary">
          <div className="container">
            <p className="section-label">{tr.sections.skillsLabel}</p>
            <h2 className="section-title section-title--sm">{tr.sections.skillsTitle}</h2>
            <div className="skills-grid">
              {skills.map((group, i) => (
                <div key={i} className="skill-group">
                  <h3 className="skill-category">{lang === 'en' ? group.categoryEn : group.category}</h3>
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
          <p className="footer-copy">{tr.footer.copy}</p>
          <div className="footer-links">
            <a href="https://github.com/arthurlins7" target="_blank" rel="noopener noreferrer" className="footer-link"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/arthur-lins-da-gama-bbb682207" target="_blank" rel="noopener noreferrer" className="footer-link"><FaLinkedin /></a>
            <a href="mailto:gamaarthur08@gmail.com" className="footer-link"><FaEnvelope /></a>
          </div>
        </div>
      </footer>

      {activePdf && <PdfModal pdf={activePdf} onClose={() => setActivePdf(null)} tr={tr} />}
    </div>
  );
}

export default App;
