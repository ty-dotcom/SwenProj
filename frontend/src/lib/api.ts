const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export async function fetchFromApi(endpoint: string, options: RequestInit = {}) {
  const res = await fetch(`${BASE_URL}${endpoint}`, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...(options.headers || {}),
    },
    credentials: 'include', // if using cookies
  });

  if (!res.ok) {
    const errorData = await res.json();
    throw new Error(errorData.detail || 'API Error');
  }

  return res.json();
}
