import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import "./App.css";

function App() {
  return (
    <>
      {/* Skip navigation */}
      <a href="#main-content" className="skip-link">
        Ana içeriğe atla
      </a>

      <header>
        <div className="site-title">ZİLAN FİDAN- Kişisel Portföy</div>

        <nav aria-label="Ana navigasyon">
          <ul>
            <li><a href="#hakkimda">Hakkımda</a></li>
            <li><a href="#projeler">Projeler</a></li>
            <li><a href="#iletisim">İletişim</a></li>
          </ul>
        </nav>
      </header>

      <main id="main-content">
        {/* HAKKIMDA */}
        <section id="hakkimda" aria-labelledby="hakkimda-baslik">
          <h2 id="hakkimda-baslik">Hakkımda</h2>

          <div className="about-content">
            <figure>
              <img
                src="/profil.jpg"
                alt="Ad Soyad'ın profil fotoğrafı"
              />
              <figcaption>Ad Soyad</figcaption>
            </figure>

            <div>
              <p>
                Kısa tanıtım paragrafı: (Bölümün, ilgi alanların, hedefin vs.)
              </p>

              {/* LAB-3'te toolbar için istenen HTML (skill-tags) */}
              <ul className="skill-tags" role="list" aria-label="Beceri etiketleri">
                <li>HTML5</li>
                <li>CSS3</li>
                <li>JavaScript</li>
                <li>React</li>
                <li>TypeScript</li>
                <li>Git</li>
              </ul>
            </div>
          </div>
        </section>

        {/* PROJELER */}
        <section id="projeler" aria-labelledby="projeler-baslik">
          <h2 id="projeler-baslik">Projelerim</h2>

          <div className="project-grid">
            <article className="project-card">
              <img src="/proje1.jpg" alt="Proje 1 ekran görüntüsü" />
              <h3>Proje 1</h3>
              <p>Proje açıklaması (kısa).</p>
              <ul className="skill-tags" role="list" aria-label="Proje 1 teknolojileri">
                <li>React</li>
                <li>Node.js</li>
              </ul>
            </article>

            <article className="project-card">
              <img src="/proje2.jpg" alt="Proje 2 ekran görüntüsü" />
              <h3>Proje 2</h3>
              <p>Proje açıklaması (kısa).</p>
              <ul className="skill-tags" role="list" aria-label="Proje 2 teknolojileri">
                <li>TypeScript</li>
                <li>API</li>
              </ul>
            </article>

            <article className="project-card">
              <img src="/proje3.jpg" alt="Proje 3 ekran görüntüsü" />
              <h3>Proje 3</h3>
              <p>Proje açıklaması (kısa).</p>
              <ul className="skill-tags" role="list" aria-label="Proje 3 teknolojileri">
                <li>JavaScript</li>
              </ul>
            </article>
          </div>
        </section>

        {/* ILETISIM */}
        <section id="iletisim" aria-labelledby="iletisim-baslik">
          <h2 id="iletisim-baslik">İletişim</h2>

          {/* LAB-2 Uygulama-4: Doğrulamalı İletişim Formu */}
          <form action="#" method="POST" noValidate>
            <fieldset>
              <legend>İletişim Formu</legend>

              <div className="form-group">
                <label htmlFor="name">Ad Soyad:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  minLength={2}
                  aria-describedby="name-error"
                />
                <small id="name-error" className="error-msg" role="alert"></small>
              </div>

              <div className="form-group">
                <label htmlFor="email">E-posta:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  aria-describedby="email-error"
                />
                <small id="email-error" className="error-msg" role="alert"></small>
              </div>

              <div className="form-group">
                <label htmlFor="subject">Konu:</label>
                <select
                  id="subject"
                  name="subject"
                  required
                  aria-describedby="subject-error"
                >
                  <option value="">-- Seçiniz --</option>
                  <option value="is">İş Teklifi</option>
                  <option value="soru">Soru</option>
                  <option value="oneri">Öneri</option>
                </select>
                <small id="subject-error" className="error-msg" role="alert"></small>
              </div>

              <div className="form-group">
                <label htmlFor="message">Mesajınız:</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  minLength={10}
                  aria-describedby="message-error"
                />
                <small id="message-error" className="error-msg" role="alert"></small>
              </div>

              <button type="submit">Gönder</button>
            </fieldset>
          </form>
        </section>
      </main>

      <footer>
        <p>&copy; 2025 Ad Soyad. Tüm hakları saklıdır.</p>
      </footer>
    </>
  );
}

export default App;

