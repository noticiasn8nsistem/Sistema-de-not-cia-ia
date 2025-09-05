import './globals.css';

export const metadata = {
  title: 'News Subscription App',
  description: 'Seu hub de notícias com IA e pagamentos recorrentes',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        <header style={{ padding: '1rem', background: '#1f2937', color: 'white' }}>
          <h1>🚀 News Subscription App</h1>
        </header>
        <main>{children}</main>
        <footer style={{ padding: '1rem', background: '#f3f4f6', textAlign: 'center' }}>
          <p>Feito com ❤️ e IA</p>
        </footer>
      </body>
    </html>
  );
}
