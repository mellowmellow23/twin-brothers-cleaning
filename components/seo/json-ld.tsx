/**
 * Renders one or more schema.org objects as a single JSON-LD <script> tag.
 * Centralizing this avoids repeating dangerouslySetInnerHTML boilerplate
 * (and its escaping pitfalls) across every page.
 */
export function JsonLd({
  data,
}: {
  data: Record<string, unknown> | Record<string, unknown>[];
}) {
  const payload = Array.isArray(data) ? data : [data];
  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(payload.length === 1 ? payload[0] : payload).replace(
          /</g,
          "\\u003c"
        ),
      }}
    />
  );
}
