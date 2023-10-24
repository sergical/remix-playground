import { Links, Meta, Scripts } from "@remix-run/react";
import type { LoaderFunctionArgs, MetaFunction } from "@vercel/remix";

export const config = { runtime: "edge" };

export const meta: MetaFunction = () => [
  { title: "Remix@Edge | New Remix App" },
];

export async function loader({ request }: LoaderFunctionArgs) {
  const params = new URLSearchParams(request.url.split("?")[1]);
  const error = params.get("error");
  if (error) {
    throw new Response("Oh no! Something went wrong!", {
      status: 500,
    });
  }
  return null;
}

export default function Edge() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1>Welcome to Remix@Edge</h1>
    </div>
  );
}

export function ErrorBoundary() {
  return (
    <html>
      <head>
        <title>Oh no!</title>
        <Meta />
        <Links />
      </head>
      <body>
        {/* add the UI you want your users to see */}
        <h1>Edge Error</h1>
        <Scripts />
      </body>
    </html>
  );
}
