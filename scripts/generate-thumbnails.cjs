// 自动批量生成所有图片的缩略图，保存在原子文件夹下，文件名不变
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, '../public/images');
const thumbSize = 600; // 缩略图尺寸

function processDir(dir) {
  fs.readdirSync(dir).forEach(file => {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      processDir(filePath);
    } else if (/\.(jpe?g|png)$/i.test(file)) {
      // 只处理原图，跳过已生成的缩略图
      if (file.startsWith('thumb_')) return;
      const outPath = path.join(dir, file); // 缩略图与原图同名覆盖
      sharp(filePath)
        .resize(thumbSize, thumbSize, { fit: 'cover', position: 'center' })
        .toFile(outPath + '.thumb', err => {
          if (err) console.error('Error:', err);
        });
    }
  });
}
processDir(srcDir);
console.log('缩略图批量生成任务已启动。');
