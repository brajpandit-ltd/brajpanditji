export const apiHandler = async (
  url: string,
  options?: RequestInit
): Promise<any> => {
  const res = await fetch(url, options);

  if (!res.ok) {
    return {
      success: false,
      data: null,
    };
  }

  const data = await res.json();
  return data;
};
