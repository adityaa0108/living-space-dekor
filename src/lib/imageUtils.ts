// List of available background images from the public folder
const backgroundImages = [
  // Commercial/Conference
  ...Array.from({ length: 30 }, (_, i) => `/photos/comm/conf/${i + 1}.jpg`),
  // Commercial/Corporate
  ...Array.from({ length: 6 }, (_, i) => `/photos/comm/corporate/${i + 1}.jpg`),
  // Residential/Bathroom
  ...Array.from({ length: 30 }, (_, i) => `/photos/res/bathroom/${i + 1}.jpg`),
  // Founder and logo
  '/founder/1.jpg',
  '/logo/hero.jpg'
].filter(Boolean); // Remove any undefined entries

// Function to get a random image from the list
export const getRandomImage = (): string => {
  const randomIndex = Math.floor(Math.random() * backgroundImages.length);
  return backgroundImages[randomIndex];
};

// Function to get multiple unique random images
export const getRandomImages = (count: number): string[] => {
  const shuffled = [...backgroundImages].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, Math.min(count, backgroundImages.length));
};

// Function to get a random image from a specific category
export const getRandomImageFromCategory = (category: 'comm' | 'res' | 'all' = 'all'): string => {
  let filteredImages = backgroundImages;
  
  if (category === 'comm') {
    filteredImages = backgroundImages.filter(img => img.includes('/comm/'));
  } else if (category === 'res') {
    filteredImages = backgroundImages.filter(img => img.includes('/res/'));
  }
  
  const randomIndex = Math.floor(Math.random() * filteredImages.length);
  return filteredImages[randomIndex];
};
