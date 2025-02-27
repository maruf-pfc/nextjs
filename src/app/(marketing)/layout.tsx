export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <h2 className="p-4">Marketing Layout</h2>
        <main>{children}</main>
      </body>
    </html>
  );
}
