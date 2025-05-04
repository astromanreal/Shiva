export interface KaalBhairavaImage {
  id: number;
  src: string;
  alt: string;
  aiHint: string;
}

// Replace placeholder images with the new provided Google Drive links
// Ensure the links are in the direct view format: 'uc?export=view&id='
export const kaalBhairavaImages: KaalBhairavaImage[] = [
  {
    id: 1,
    // Use direct view link format for Google Drive
    src: "https://drive.google.com/uc?export=view&id=160M27U3DkXhAxrMmiMTtjxWpNe7Xi9A9",
    alt: "Kaal Bhairava fierce form",
    aiHint: "kaal bhairava fierce shiva deity dark intense",
  },
  {
    id: 2,
    // Use direct view link format for Google Drive
    src: "https://drive.google.com/uc?export=view&id=1O0v0O8tO9b--hfRDzlxcLPZ7v7t-ge5H",
    alt: "Kaal Bhairava close up",
    aiHint: "kaal bhairava shiva close up detailed intense",
  },
  {
    id: 3,
    // Use direct view link format for Google Drive
    src: "https://drive.google.com/uc?export=view&id=1UxsXCfcNyxbe1i_WIul2un3_10Mj0Bap",
    alt: "Kaal Bhairava sitting depiction",
    aiHint: "kaal bhairava shiva sitting dog vahana kashi guardian",
  },
  {
    id: 4,
    // Use direct view link format for Google Drive
    src: "https://drive.google.com/uc?export=view&id=1qKgmhm_3DMVpVg7fEo-7V54sMo3P7TNP",
    alt: "Kaal Bhairava painting",
    aiHint: "kaal bhairava painting shiva fierce blue",
  },
];

// Function to get all images
export const getAllKaalBhairavaImages = (): KaalBhairavaImage[] => {
  return kaalBhairavaImages;
};
