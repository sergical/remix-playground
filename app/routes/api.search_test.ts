import { type ActionFunctionArgs, json } from "@remix-run/node";

export const action = async ({ request }: ActionFunctionArgs) => {
  return json({ hello: "world", url: request.url });
};
