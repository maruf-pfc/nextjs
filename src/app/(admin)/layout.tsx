export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <h2>Admin Layout</h2>
        <main>{children}</main>
      </body>
    </html>
  );
}
