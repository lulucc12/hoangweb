const sharp = require('sharp');
const path = require('path');

const cardConfigs = [
  {
    name: 'card-facebook-disabled.png',
    backgroundColor: '#E8F4F8',
    icon: '🔒',
    title: 'Tài khoản bị khóa',
  },
  {
    name: 'card-account-hacked.png',
    backgroundColor: '#FDF4F4',
    icon: '⚠️',
    title: 'Bị hack/chiếm quyền',
  },
  {
    name: 'card-content-removed.png',
    backgroundColor: '#FFF8E8',
    icon: '❌',
    title: 'Nội dung bị xóa',
  },
  {
    name: 'card-crisis.png',
    backgroundColor: '#F8E8E8',
    icon: '🚨',
    title: 'Khủng hoảng tin tức',
  },
  {
    name: 'card-ads-issue.png',
    backgroundColor: '#E8ECFF',
    icon: '📢',
    title: 'Ads gặp sự cố',
  },
  {
    name: 'card-reputation.png',
    backgroundColor: '#E8F8F0',
    icon: '✅',
    title: 'Danh tiếng/Thương hiệu',
  }
];

async function createCards() {
  for (const config of cardConfigs) {
    const svg = `
    <svg width="400" height="300" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#ccc" stroke-width="0.5"/>
        </pattern>
      </defs>
      
      <rect width="400" height="300" fill="${config.backgroundColor}"/>
      <rect width="400" height="300" fill="url(#grid)" opacity="0.3"/>
      
      <!-- Decorative circles -->
      <circle cx="80" cy="60" r="40" fill="#0066cc" opacity="0.1"/>
      <circle cx="320" cy="250" r="60" fill="#0066cc" opacity="0.08"/>
      
      <!-- Icon -->
      <text x="200" y="120" font-size="72" text-anchor="middle" font-family="Arial, sans-serif" dominant-baseline="middle">
        ${config.icon}
      </text>
      
      <!-- Title with better styling -->
      <rect x="40" y="160" width="320" height="80" rx="12" fill="rgba(255,255,255,0.7)" stroke="#0066cc" stroke-width="2"/>
      <text x="200" y="210" font-size="24" font-weight="bold" text-anchor="middle" font-family="Arial, sans-serif" fill="#0066cc">
        ${config.title}
      </text>
    </svg>
    `;

    try {
      await sharp(Buffer.from(svg))
        .png()
        .toFile(path.join(__dirname, 'public', config.name));
      console.log(`✓ Created ${config.name}`);
    } catch (error) {
      console.error(`✗ Error: ${config.name} - ${error.message}`);
    }
  }
  console.log('\n✓ All cards created successfully!');
}

createCards();
