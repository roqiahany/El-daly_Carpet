import { v2 as cloudinary } from 'cloudinary';

// 1. إعداد الاتصال بـ Cloudinary
cloudinary.config({
  cloud_name: 'dhhjspn72',
  api_key: '961827964223965',
  api_secret: 'OrVjuozYFs2XYX6bRTPYUGO4sUY',
});

const categories = [
  'kids',
  'reception',
  'hallway',
  'flower',
  'offers',
  'testimonials',
];

async function getAllCategories() {
  try {
    const data = {};

    for (let category of categories) {
      const result = await cloudinary.search
        .expression(`folder:home/products/${category}/*`)
        .sort_by('public_id', 'desc')
        .max_results(100) // لو عايزة تزودي خليها 500
        .execute();

      data[category] = result.resources.map((file) => file.secure_url);
    }

    console.log(JSON.stringify(data, null, 2));
    return data;
  } catch (err) {
    console.error('❌ Error fetching images:', err);
  }
}

// نادينا الفانكشن
getAllCategories();
