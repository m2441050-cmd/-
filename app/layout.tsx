import './globals.css';

export const metadata = {
  title: 'microbio-iwa',
  description: '微生物学の小テストアプリ',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
