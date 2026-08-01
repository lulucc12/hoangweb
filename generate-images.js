const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const imageConfigs = [
  {
    name: 'card-facebook-disabled.png',
    colors: { start: '#FF6B6B', end: '#EE5A6F', text: '#FFFFFF' },
    text: 'Tài khoản\nFacebook Vô Hiệu Hóa'
  },
  {
    name: 'card-account-hacked.png',
    colors: { start: '#FF4757', end: '#FF6348', text: '#FFFFFF' },
    text: 'Tài khoản Bị\nHack/Chiếm Quyền'
  },
  {
    name: 'card-content-removed.png',
    colors: { start: '#FFB347', end: '#FF9800', text: '#FFFFFF' },
    text: 'Nội dung Bị\nGỡ Nhầm'
  },
  {
    name: 'card-crisis.png',
    colors: { start: '#FC5C65', end: '#FF6348', text: '#FFFFFF' },
    text: 'Khủng hoảng\nTruyền Thông'
  },
  {
    name: 'card-ads-issue.png',
    colors: { start: '#3867D6', end: '#4A90E2', text: '#FFFFFF' },
    text: 'Fanpage / Ads\nGặp Sự Cố'
  },
  {
    name: 'card-reputation.png',
    colors: { start: '#2ECC71', end: '#27AE60', text: '#FFFFFF' },
    text: 'Danh tiếng Cá nhân\n& Thương Hiệu'
  }
];

async function generateImages() {
  for (const config of imageConfigs) {
    // Escape XML special characters
    const escapedText = config.text
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&apos;');
    
    const svg = `<svg width="400" height="300" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:${config.colors.start};stop-opacity:1" /><stop offset="100%" style="stop-color:${config.colors.end};stop-opacity:1" /></linearGradient></defs><rect width="400" height="300" fill="url(#grad)"/><rect width="400" height="300" fill="rgba(255,255,255,0.08)"/><text x="200" y="140" font-size="32" font-weight="bold" text-anchor="middle" fill="${config.colors.text}" font-family="Arial, sans-serif">${escapedText.split('\n').map((line, i) => `<tspan x="200" dy="${i === 0 ? 0 : 42}">${line}</tspan>`).join('')}</text></svg>`;
    try {
      await sharp(Buffer.from(svg))
        .png()
        .toFile(path.join(__dirname, 'public', config.name));
      console.log(`✓ Created ${config.name}`);
    } catch (error) {
      console.error(`✗ Failed to create ${config.name}:`, error.message);
    }
  }
  console.log('\nAll images generated successfully!');
}

generateImages().catch(console.error);
