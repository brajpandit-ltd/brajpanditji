// Helper function to create a slug
export function slugify(text: string): string {
  if (!text) return "";

  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");
}

export function formatDate(dateString: string) {
  const options: any = { year: "numeric", month: "long", day: "numeric" };
  return new Date(dateString).toLocaleDateString(undefined, options);
}

export const trimWords = (text: string, maxWords: number): string => {
  if (!text) return "";

  const words = text.split(" ");
  if (words.length <= maxWords) return text;
  return words.slice(0, maxWords).join(" ") + "...";
};

export function debounce<T extends (...args: any[]) => void>(
  func: T,
  delay: number
): (...args: Parameters<T>) => void {
  let timeoutId: ReturnType<typeof setTimeout>;

  return (...args: Parameters<T>) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func(...args), delay);
  };
}

export const getUrl = (search: string, isServer: boolean = true) => {
  const base = isServer
    ? process.env.API_BASE_URL
    : process.env.NEXT_PUBLIC_API_BASE_URL;

  if (!base) {
    throw new Error(
      `API base URL is not defined (${isServer ? "API_BASE_URL" : "NEXT_PUBLIC_API_BASE_URL"})`
    );
  }

  // Ensure base ends with no trailing slash
  const normalizedBase = base.replace(/\/+$/, "");

  return new URL(`${normalizedBase}/${search}`);
};
