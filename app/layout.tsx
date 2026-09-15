// Root layout removed - next-intl uses [locale]/layout.tsx for html/body tags
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
