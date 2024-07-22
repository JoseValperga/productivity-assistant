import '../app/globals.css';

export const metadata = {
  title: 'My Productivity Assistant',
  description: 'Manage your tasks efficiently with AI support',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <div className="min-h-screen text-gray-900 bg-gray-100">
          <main className="container p-4 mx-auto">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
