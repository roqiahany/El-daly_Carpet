import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs';
// 1. إعداد الاتصال بـ Cloudinary
cloudinary.config({
  cloud_name: 'dhhjspn72',
  api_key: '961827964223965',
  api_secret: 'OrVjuozYFs2XYX6bRTPYUGO4sUY',
});

// الكاتيجوريات بتاعتك
const categories = [
  'products/testimonials',
  'products/kids',
  'products/reception',
  'products/hallway',
  'products/flowers',
  'products/offers',
];

async function fetchImages() {
  let resultData = {};

  for (let folder of categories) {
    console.log(`Fetching images from: ${folder}`);
    const result = await cloudinary.search
      .expression(`folder:${folder}/*`)
      .sort_by('public_id', 'desc')
      .max_results(100)
      .execute();

    // نضيف الصور في الـ JSON
    resultData[folder.split('/')[1]] = result.resources.map(
      (r) => r.secure_url
    );
  }

  // نخزن في ملف products.json
  fs.writeFileSync('src/products.json', JSON.stringify(resultData, null, 2));
  console.log('✅ Images saved to src/products.json');
}

fetchImages();
