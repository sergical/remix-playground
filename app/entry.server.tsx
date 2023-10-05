import * as Sentry from "@sentry/remix";
import { handleRequest } from "@vercel/remix";
import { RemixServer } from "@remix-run/react";
import type { DataFunctionArgs, EntryContext } from "@vercel/remix";

export function handleError(error: unknown, { request }: DataFunctionArgs) {
  Sentry.captureRemixServerException(error, "remix.server", request);
}

Sentry.init({
  dsn: process.env.SENTRY_DSN,
  tracesSampleRate: 1,
});

export default function (
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  remixContext: EntryContext
) {
  const remixServer = <RemixServer context={remixContext} url={request.url} />;
  return handleRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixServer
  );
}
