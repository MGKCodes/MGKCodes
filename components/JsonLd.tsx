// Renders a JSON-LD <script>. The `<` escape prevents the JSON string from
// breaking out of the script tag (XSS guard), per the Next.js JSON-LD guide.
export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
