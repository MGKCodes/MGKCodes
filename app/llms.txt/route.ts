import { projects } from "@/lib/projects";

// /llms.txt is generated from lib/projects.ts so the product list cannot drift
// from the rest of the site. Statically rendered at build time.
export const dynamic = "force-static";

const SITE = "https://mgkcodes.com";

export function GET() {
  const products = projects
    .map((p) => `- [${p.name}](${p.copy.llms.url}): ${p.copy.llms.line}`)
    .join("\n");

  const body = `# MGKCodes

> Independent software studio. Builds and ships its own software products from first sketch to launch: design, engineering, release, and marketing in-house.

MGKCodes (MGKCodes Ltd) is a solo-run, product-led software studio. It is product-led and partnership-style, not a client-volume web shop.

## Products

${products}

## Pages

- [Studio](${SITE}/studio): how the studio works.
- [Projects](${SITE}/projects): all products.
- [Contact](${SITE}/contact): hello@mgkcodes.com

## Contact

- Email: hello@mgkcodes.com
- LinkedIn: https://www.linkedin.com/company/mgkcodes/
`;

  return new Response(body, {
    headers: { "content-type": "text/plain; charset=utf-8" },
  });
}
