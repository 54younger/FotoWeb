const { readdirSync, writeFileSync, mkdirSync } = require('fs');
const { join } = require('path');

const baseDir = join(__dirname, '../public/images');
const categories = ['celebrations', 'headshots', 'lifestyle', 'other'];

const gallery = {};

categories.forEach((category) => {
  const categoryPath = join(baseDir, category);
  const files = readdirSync(categoryPath).filter(f =>
    /\.(jpg|jpeg|png|webp)$/i.test(f)
  );

  gallery[category] = files.map((filename, idx) => ({
    id: `${category[0]}${idx + 1}`,
    alt: filename.replace(/\.[^/.]+$/, '').replace(/[-_]/g, ' '),
    src: `/images/${category}/${filename}`,
    full: `/images/${category}/${filename}`,
  }));
});

const outputDir = join(__dirname, '../src/data');
mkdirSync(outputDir, { recursive: true }); // 自动创建目录

const outputPath = join(outputDir, 'galleryData.js');
const content = `export const galleryImages = ${JSON.stringify(gallery, null, 2)};`;

writeFileSync(outputPath, content, 'utf-8');
console.log(`✅ Gallery data written to: ${outputPath}`);