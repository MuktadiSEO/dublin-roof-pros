import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Expert Roof Chimney & Gutters | Dublin Roofing Experts" },
      { name: "description", content: "Dublin's 24/7 roofing, chimney and gutter specialists." },
      { name: "author", content: "Expert Roof Chimney & Gutters" },
      { property: "og:title", content: "Expert Roof Chimney & Gutters | Dublin Roofing Experts" },
      { property: "og:description", content: "Dublin's 24/7 roofing, chimney and gutter specialists." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:site", content: "@Lovable" },
      { name: "twitter:title", content: "Expert Roof Chimney & Gutters | Dublin Roofing Experts" },
      { name: "twitter:description", content: "Dublin's 24/7 roofing, chimney and gutter specialists." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/0d04ac29-64e4-44a1-9dcf-4f40feeb45ed/id-preview-c859da89--7e51468d-7ca7-4612-b856-5138166e4957.lovable.app-1777230003347.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/0d04ac29-64e4-44a1-9dcf-4f40feeb45ed/id-preview-c859da89--7e51468d-7ca7-4612-b856-5138166e4957.lovable.app-1777230003347.png" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return <Outlet />;
}
