export const SAFE_FALLBACK_IMAGE = 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=80';

export function getSafeImageUrl(url: string | undefined | null): string {
  if (!url || typeof url !== 'string') {
    return SAFE_FALLBACK_IMAGE;
  }
  const lower = url.toLowerCase();
  if (lower.includes('ibb.co') || lower.includes('imgbb')) {
    return SAFE_FALLBACK_IMAGE;
  }
  return url;
}
