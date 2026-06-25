import Header from './Header';
import Footer from './Footer';
import { ReactNode } from 'react';
import { useTheme } from '../contexts/ThemeContext';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const { theme } = useTheme();
  const bgImage = theme === 'dark' ? '/image/hero_bg_dark.webp' : '/image/hero_bg.webp';

  return (
    <div
      className="min-h-screen bg-white dark:bg-slate-950 relative"
      style={{
        backgroundImage: `url('${bgImage}')`,
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
      {/* Overlay adapté au mode sombre */}
      <div className="fixed inset-0 bg-white/0 dark:bg-slate-950/40 pointer-events-none z-0" />
      
      {/* Contenu */}
      <div className="relative z-10">
        <Header />
        {children}
        
      </div>
    </div>
  );
}
