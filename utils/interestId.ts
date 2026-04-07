/** Stable DOM id for scroll + interest flow (URL hash safe) */
export function makeInterestId(kind: "course" | "training" | "job" | "domain", title: string): string {
  const slug = title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 56);
  if (slug.length > 0) return `interest-${kind}-${slug}`;
  let h = 0;
  for (let i = 0; i < title.length; i++) h = (h * 31 + title.charCodeAt(i)) | 0;
  return `interest-${kind}-${Math.abs(h).toString(36)}`;
}
