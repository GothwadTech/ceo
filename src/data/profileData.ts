export const PROFILE = {
  name: 'Yuvkesh Meena',
  role: 'Founder & Chief Executive Officer',
  organization: 'Gothwad Tech',
  birthplace: 'Dausa, Rajasthan, India',
  githubUrl: 'https://github.com/GothwadTech',
  docsUrl: 'https://docs.gothwadtech.com',
  companyUrl: 'https://www.gothwadtech.com',
  email: 'gothwadtech@gmail.com',
  description:
    'Yuvkesh Meena is the founder and CEO of Gothwad Tech. Born in Dausa, Rajasthan, India, he leads a portfolio of software products across communication, digital services, media, developer tools and education.',
  introduction:
    'Yuvkesh Meena is the founder and chief executive officer of Gothwad Tech. Born in Dausa, Rajasthan, India, he leads the company’s product work across web and Android software, communication, digital services, developer tools and education.',
  biography:
    'Gothwad Tech’s public portfolio brings together connected services and standalone products for everyday digital use. Its repositories span account services, email and storage, messaging and video meetings, media applications, Android utilities, software tools and education technology. As founder and CEO, Yuvkesh leads the work behind this product ecosystem.',
  workNote:
    'Project summaries on this page are based on Gothwad Tech’s public repository descriptions and developer documentation. They describe the projects, not a claim that one person authored every line of code. Release availability and licensing can differ by repository.',
} as const;

export type ProjectCategory =
  | 'Communication'
  | 'Identity & productivity'
  | 'Media & devices'
  | 'Developer tools'
  | 'Education';

export interface RepositoryReference {
  name: string;
  url: string;
}

export interface ProductProject {
  id: string;
  name: string;
  category: ProjectCategory;
  description: string;
  platform: string;
  icon: string;
  repositories: RepositoryReference[];
  note?: string;
}

const repository = (name: string): RepositoryReference => ({
  name,
  url: `https://github.com/GothwadTech/${name}`,
});

export const PROJECT_CATEGORIES = [
  'All work',
  'Communication',
  'Identity & productivity',
  'Media & devices',
  'Developer tools',
  'Education',
] as const;

export type ProjectFilter = (typeof PROJECT_CATEGORIES)[number];

export const GOTHWAD_PROJECTS: ProductProject[] = [
  {
    id: 'grixchat',
    name: 'GrixChat',
    category: 'Communication',
    description:
      'A messaging and calling product with chats, stories, search and private audio/video calls.',
    platform: 'Web · Android',
    icon: 'messages',
    repositories: [repository('grixchat'), repository('grixchatapp')],
  },
  {
    id: 'indogram',
    name: 'Indogram',
    category: 'Communication',
    description:
      'An Android Telegram client that connects with Gothwad Tech’s Indogram web experience.',
    platform: 'Android',
    icon: 'send',
    repositories: [repository('indogramapp')],
  },
  {
    id: 'gxchat-india',
    name: 'GXChat India',
    category: 'Communication',
    description:
      'A social and messaging application combining direct conversations, profiles, posts, stories and short-form video.',
    platform: 'Web · Mobile-first',
    icon: 'message',
    repositories: [repository('gxchatindia')],
  },
  {
    id: 'gothwad-meet',
    name: 'Gothwad Meet',
    category: 'Communication',
    description:
      'A browser-based audio and video meeting experience built around WebRTC and peer-to-peer connections.',
    platform: 'Web',
    icon: 'video',
    repositories: [repository('meet')],
  },
  {
    id: 'accounts',
    name: 'Gothwad Accounts',
    category: 'Identity & productivity',
    description:
      'An identity service for Gothwad products, covering account sign-in, sessions and OAuth integrations.',
    platform: 'Web · Cloudflare Workers',
    icon: 'identity',
    repositories: [repository('accounts'), repository('accountsapp')],
  },
  {
    id: 'mail',
    name: 'Gothwad Mail',
    category: 'Identity & productivity',
    description:
      'A web email product supported by a Cloudflare Worker and D1 storage.',
    platform: 'Web · Cloudflare Workers',
    icon: 'mail',
    repositories: [repository('mail')],
  },
  {
    id: 'drive',
    name: 'Gothwad Drive',
    category: 'Identity & productivity',
    description:
      'A browser-based file workspace combining direct Telegram transfers with an edge-backed service layer.',
    platform: 'Web · Cloudflare Workers',
    icon: 'drive',
    repositories: [repository('drive')],
  },
  {
    id: 'kiwi-store',
    name: 'Kiwi Store',
    category: 'Identity & productivity',
    description:
      'An app-store ecosystem with web surfaces and an Android app for discovering software.',
    platform: 'Web · Android',
    icon: 'store',
    repositories: [repository('store'), repository('storeapp'), repository('storefiles')],
  },
  {
    id: 'plustube',
    name: 'Gothwad Tube · PlusTube',
    category: 'Media & devices',
    description:
      'A privacy-respecting Android video and music client with a recommendation engine designed to run on-device.',
    platform: 'Android · Web',
    icon: 'play',
    repositories: [repository('tubeapp'), repository('tubeweb')],
  },
  {
    id: 'browser',
    name: 'Gothwad Browser',
    category: 'Media & devices',
    description:
      'An Android browser for phones, tablets and TVs, with support for remote and keyboard navigation.',
    platform: 'Android · Android TV',
    icon: 'globe',
    repositories: [repository('browser')],
  },
  {
    id: 'launcher',
    name: 'Gothwad TV Launcher',
    category: 'Media & devices',
    description:
      'A native home-screen launcher designed for Android TVs and tablets, including remote-friendly navigation.',
    platform: 'Android TV · Tablets',
    icon: 'monitor',
    repositories: [repository('launcher')],
  },
  {
    id: 'manager',
    name: 'Gothwad Manager',
    category: 'Media & devices',
    description:
      'A file-management application for Android phones, tablets and TV devices.',
    platform: 'Android · Android TV',
    icon: 'folder',
    repositories: [repository('manager')],
  },
  {
    id: 'internet',
    name: 'Gothwad Internet',
    category: 'Media & devices',
    description:
      'A lightweight browser application for Android phones.',
    platform: 'Android',
    icon: 'wifi',
    repositories: [repository('internet')],
  },
  {
    id: 'computer',
    name: 'Gothwad Computer',
    category: 'Media & devices',
    description:
      'An Android application with TV and desktop-style interfaces for larger screens and external input.',
    platform: 'Android · Android TV',
    icon: 'computer',
    repositories: [repository('computer')],
  },
  {
    id: 'ai-studio',
    name: 'Gothwad AI Studio',
    category: 'Developer tools',
    description:
      'A mobile-first developer workspace for browsing GitHub repositories, managing files and editing code.',
    platform: 'Web · Mobile',
    icon: 'code',
    repositories: [repository('ai')],
  },
  {
    id: 'remote-desktop',
    name: 'Gothwad Remote Desktop',
    category: 'Developer tools',
    description:
      'A browser portal for Windows remote access and support, paired with a dedicated host setup flow.',
    platform: 'Web · Windows',
    icon: 'remote',
    repositories: [repository('remotedesk')],
  },
  {
    id: 'education',
    name: 'Gothwad Education',
    category: 'Education',
    description:
      'A school-management and learning platform with experiences for administrators, teachers, students and parents.',
    platform: 'Web · Android',
    icon: 'education',
    repositories: [
      repository('education'),
      repository('educationapp'),
      repository('pwparent'),
      repository('pwparentapp'),
    ],
  },
  {
    id: 'clash-drive',
    name: 'Clash Drive',
    category: 'Identity & productivity',
    description:
      'A browser-based storage workspace built around Telegram supergroup forum topics.',
    platform: 'Web',
    icon: 'drive',
    repositories: [repository('Clashdrive')],
    note: 'Fork / adaptation',
  },
];

export const LEADERSHIP_THEMES = [
  {
    title: 'A connected product ecosystem',
    description:
      'Accounts, Mail, Drive, Meet and Store sit alongside standalone products in Gothwad Tech’s public app directory and documentation.',
    icon: 'network',
  },
  {
    title: 'Web and mobile, side by side',
    description:
      'The public portfolio spans browser-based services, Cloudflare-powered projects and native Android applications for phones, tablets and TVs.',
    icon: 'devices',
  },
  {
    title: 'A public record of the work',
    description:
      'Project repositories and developer documentation give readers a direct way to explore implementation, licensing and release details.',
    icon: 'book',
  },
] as const;
