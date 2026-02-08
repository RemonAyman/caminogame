export const normalizeArabic = (text) => {
  if (!text) return '';
  return text
    .trim()
    .replace(/[\u064B-\u0652]/g, '')      // Remove Tashkeel (Harakat)
    .replace(/[^\w\s\u0600-\u06FF]/g, '') // Remove punctuation
    .replace(/\s+/g, ' ')               // Normalize spaces
    .replace(/أ|إ|آ|ا/g, 'ا')              // Normalize ALL Alefs to bare Alef
    .replace(/ة/g, 'ه')                  // Normalize Ta Marbuta to Ha
    .replace(/ى/g, 'ي')                  // Normalize Alef Maqsura to Ya
    .replace(/^ال/, '')                 // Remove 'Al' definite article prefix
    .replace(/\sال/g, ' ')              // Remove 'Al' in middle of sentence
    .replace(/ؤ/g, 'و')                 // Normalize Waw variations
    .replace(/ئ/g, 'ي');                // Normalize Yeh variations
};
