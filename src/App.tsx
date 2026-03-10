import { useState, useEffect } from 'react';
import './App.css';
import Button from './components/Button';
import Input from './components/Input';
import Card from './components/Card';
import Alert from './components/Alert';
import UIKit from './pages/UIKit';

function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);
  const [formStatus, setFormStatus] = useState<'idle' | 'success' | 'error'>('idle');

  useEffect(() => {
    const handleLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };
    window.addEventListener('popstate', handleLocationChange);
    return () => window.removeEventListener('popstate', handleLocationChange);
  }, []);

  if (currentPath === '/ui-kit') {
    return <UIKit onBack={() => { window.history.pushState({}, '', '/'); setCurrentPath('/'); }} />;
  }

  const toggleDarkMode = () => {
    document.documentElement.classList.toggle('dark');
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('success');
  };

  const navigateToUiKit = (e: React.MouseEvent) => {
    e.preventDefault();
    window.history.pushState({}, '', '/ui-kit');
    setCurrentPath('/ui-kit');
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors">
      <button
        onClick={toggleDarkMode}
        className="fixed top-4 right-4 z-50 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 p-2 rounded-full shadow-lg hover:scale-110 transition-transform"
        aria-label="Tema değiştir"
      >
        <span className="dark:hidden">&#9790;</span>
        <span className="hidden dark:inline">&#9728;</span>
      </button>

      <a href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 bg-blue-800 text-white p-2 z-50">
        Ana içeriğe atla
      </a>

      <header className="sticky top-0 z-40 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-6xl mx-auto px-4 py-3 flex flex-col sm:flex-row justify-between items-center gap-3">
          <h1 className="text-xl font-bold text-blue-800 dark:text-blue-300">
            Zilan Fidan
          </h1>
          <nav aria-label="Ana navigasyon">
            <ul className="flex flex-wrap gap-2">
              <li><a href="#hakkimda" className="px-3 py-1 rounded-md text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-gray-800 transition-colors">Hakkımda</a></li>
              <li><a href="#projeler" className="px-3 py-1 rounded-md text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-gray-800 transition-colors">Projeler</a></li>
              <li><a href="#iletisim" className="px-3 py-1 rounded-md text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-gray-800 transition-colors">İletişim</a></li>
              <li><a href="/ui-kit" onClick={navigateToUiKit} className="px-3 py-1 rounded-md text-blue-600 dark:text-blue-400 font-medium hover:bg-blue-100 dark:hover:bg-gray-800 transition-colors">UI Kit</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main id="main-content">
        <section id="hakkimda" className="py-16 px-4">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-8">
            <figure className="shrink-0">
              <img src="/profil.jpg" alt="Zilan Fidan profil fotoğrafı" className="w-40 h-40 rounded-full object-cover shadow-lg" />
            </figure>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 text-center md:text-left">
                Hakkımda
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed text-center md:text-left">
                Frontend geliştirici olarak modern web teknolojileriyle kullanıcı dostu arayüzler oluşturuyorum.
              </p>
              <ul className="flex flex-wrap justify-center md:justify-start gap-2">
                <li className="bg-blue-800 text-white px-3 py-1 rounded-full text-sm">HTML5</li>
                <li className="bg-blue-800 text-white px-3 py-1 rounded-full text-sm">CSS3</li>
                <li className="bg-blue-800 text-white px-3 py-1 rounded-full text-sm">JavaScript</li>
                <li className="bg-blue-800 text-white px-3 py-1 rounded-full text-sm">React</li>
                <li className="bg-blue-800 text-white px-3 py-1 rounded-full text-sm">TypeScript</li>
                <li className="bg-blue-800 text-white px-3 py-1 rounded-full text-sm">Tailwind CSS</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="projeler" className="py-16 px-4 bg-gray-50 dark:bg-gray-900 border-y border-gray-200 dark:border-gray-800">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-10">
              Projelerim
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card variant="elevated" title="E-Ticaret Sitesi" image="/proje1.jpg" imageAlt="E-Ticaret">
                <p className="mb-4">React ve Node.js ile tam kapsamlı uygulama.</p>
                <div className="flex gap-2">
                  <Button size="sm" variant="primary">İncele</Button>
                </div>
              </Card>

              <Card variant="elevated" title="Blog Platformu" image="/proje2.jpg" imageAlt="Blog">
                <p className="mb-4">TypeScript ve harici API entegrasyonu.</p>
                <div className="flex gap-2">
                  <Button size="sm" variant="primary">İncele</Button>
                </div>
              </Card>

              <Card variant="elevated" title="Portföy Sitesi" image="/proje3.jpg" imageAlt="Portföy">
                <p className="mb-4">Tailwind CSS ile geliştirilmiş modern tasarım.</p>
                <div className="flex gap-2">
                  <Button size="sm" variant="primary">İncele</Button>
                </div>
              </Card>
            </div>
          </div>
        </section>

        <section id="iletisim" className="py-16 px-4">
          <div className="max-w-lg mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">
              İletişim
            </h2>

            {formStatus === 'success' && (
              <div className="mb-6">
                <Alert variant="success" title="Başarılı!" dismissible onDismiss={() => setFormStatus('idle')}>
                  Mesajınız başarıyla gönderildi.
                </Alert>
              </div>
            )}

            <form className="space-y-4" onSubmit={handleFormSubmit}>
              <Input id="name" label="Ad Soyad" required />
              <Input id="email" label="E-posta" type="email" required />

              <div className="space-y-1">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Mesajınız
                </label>
                <textarea
                  id="message"
                  rows={5}
                  required
                  className="w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 focus:outline-none dark:bg-gray-800 dark:text-gray-100"
                />
              </div>

              <Button variant="primary" size="lg" type="submit" className="w-full">
                Gönder
              </Button>
            </form>
          </div>
        </section>
      </main>

      <footer className="bg-gray-100 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 text-center py-6 px-4 text-gray-500 dark:text-gray-400 text-sm">
        <p>&copy; 2025 Zilan Fidan. Tüm hakları saklıdır.</p>
      </footer>
    </div>
  );
}

export default App;
