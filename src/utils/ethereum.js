export const initializeEthereum = () => {
  // Only run in browser environment
  if (typeof window === 'undefined') return;

  // Skip if ethereum is already properly defined
  if (window.ethereum) return;

  try {
    // Get the existing descriptor if any
    const descriptor = Object.getOwnPropertyDescriptor(window, 'ethereum');
    
    // If the property is already defined but configurable, remove it first
    if (descriptor && descriptor.configurable) {
      delete window.ethereum;
    }

    // Only define if we successfully removed it or it didn't exist
    if (!Object.getOwnPropertyDescriptor(window, 'ethereum')) {
      Object.defineProperty(window, 'ethereum', {
        value: null,
        writable: true,
        configurable: true,
        enumerable: true
      });
    }
  } catch (error) {
    // Silently fail if we can't modify the property
    console.debug('Ethereum property already exists and cannot be modified');
  }
}; 