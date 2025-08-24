import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Artpia",
  description: "アート愛好家用アプリケーション",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="ja">
      <body className="min-h-screen bg-gray-100">
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
