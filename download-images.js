const https = require('https');
const fs = require('fs');
const path = require('path');

const images = [
  {
    name: 'card-facebook-disabled.png',
    url: 'https://images.unsplash.com/photo-1633356122544-f134324ef6db?w=400&h=300&fit=crop&q=80',
    desc: 'Account locked/security'
  },
  {
    name: 'card-account-hacked.png',
    url: 'https://images.unsplash.com/photo-1633356122544-f134324ef6db?w=400&h=300&fit=crop&q=80',
    desc: 'Security breach'
  },
  {
    name: 'card-content-removed.png',
    url: 'https://images.unsplash.com/photo-1633356122544-f134324ef6db?w=400&h=300&fit=crop&q=80',
    desc: 'Content moderation'
  },
  {
    name: 'card-crisis.png',
    url: 'https://images.unsplash.com/photo-1633356122544-f134324ef6db?w=400&h=300&fit=crop&q=80',
    desc: 'Crisis communication'
  },
  {
    name: 'card-ads-issue.png',
    url: 'https://images.unsplash.com/photo-1633356122544-f134324ef6db?w=400&h=300&fit=crop&q=80',
    desc: 'Advertising issues'
  },
  {
    name: 'card-reputation.png',
    url: 'https://images.unsplash.com/photo-1633356122544-f134324ef6db?w=400&h=300&fit=crop&q=80',
    desc: 'Reputation management'
  }
];

async function downloadImage(url, filePath) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(filePath);
    https.get(url, (response) => {
      response.pipe(file);
      file.on('finish', () => {
        file.close();
        resolve(true);
      });
    }).on('error', (err) => {
      fs.unlink(filePath, () => {});
      reject(err);
    });
  });
}

async function downloadAllImages() {
  for (const img of images) {
    try {
      const filePath = path.join(__dirname, 'public', img.name);
      await downloadImage(img.url, filePath);
      console.log(`✓ Downloaded ${img.name} (${img.desc})`);
    } catch (error) {
      console.error(`✗ Failed ${img.name}: ${error.message}`);
    }
  }
}

downloadAllImages();
