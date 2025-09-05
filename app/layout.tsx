import './globals.css';

export const metadata = {
  title: 'News Subscription App',
  description: 'Reúne notícias relevantes para o usuário',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className="bg-gray-100 text-gray-800">
        <header className="p-4 bg-white shadow">
          <h1 className="text-xl font-bold">🚀 News Subscription App</h1>
        </header>
        <main className="p-4">{children}</main>
        <footer className="p-4 text-center text-gray-500">
          © 2025 News Subscription App
        </footer>
      </body>
    </html>
  );
}
