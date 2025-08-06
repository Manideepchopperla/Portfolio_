// src/utils/performanceUtils.ts
/**
 * Optimizes image URLs for better performance
 */
export const optimizeImageUrl = (url: string, width: number = 400): string => {
  if (!url || typeof url !== 'string') return '';
  
  if (url.includes('cloudinary')) {
    if (url.includes('/upload/w_')) return url;
    return url.replace('/upload/', `/upload/w_${width},c_scale,q_auto,f_auto/`);
  }
  
  if (url.includes('unsplash.com')) {
    return url.includes('?')
      ? `${url}&w=${width}&q=80&auto=format`
      : `${url}?w=${width}&q=80&auto=format`;
  }
  
  return url;
};

/**
 * Determines if device should use simplified animations
 */
export const shouldUseSimplifiedAnimations = (): boolean => {
  if (typeof window === 'undefined') return false;

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const isMobile = window.innerWidth < 768;
  
  return prefersReducedMotion || isMobile;
};

/**
 * Creates a debounced function
 */
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: ReturnType<typeof setTimeout> | null = null;

  return function (this: any, ...args: Parameters<T>) {
    const context = this;
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(context, args), wait);
  };
}

/**
 * Creates a throttled function
 */
export function throttle<T extends (...args: any[]) => any>(
  func: T,
  limit: number
): (...args: Parameters<T>) => void {
  let inThrottle = false;

  return function (this: any, ...args: Parameters<T>) {
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}