export interface KaalBhairavaImage {
  id: number;
  src: string;
  alt: string;
  aiHint: string;
}

// Generate 65 placeholder images for Kaal Bhairava slider
export const kaalBhairavaImages: KaalBhairavaImage[] = Array.from({ length: 65 }, (_, i) => ({
  id: i + 1,
  // Using picsum photos with a consistent seed prefix and index for variety
  src: `https://picsum.photos/seed/kaalbhairava${i + 1}/600/400`,
  alt: `Kaal Bhairava Image ${i + 1}`,
  // Generic hints as specific images aren't available
  aiHint: `kaal bhairava fierce shiva deity ${i % 5 === 0 ? 'kashi' : ''} ${i % 3 === 0 ? 'dog' : ''} ${i % 7 === 0 ? 'trident' : ''}`.trim(),
}));

// Function to get all images
export const getAllKaalBhairavaImages = (): KaalBhairavaImage[] => {
  return kaalBhairavaImages;
};
