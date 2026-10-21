export interface RepositoryItem {
  id: string;
  name: string;
  githubRepo: string;
  category: 'messaging' | 'ai-tools' | 'education' | 'systems';
  categoryLabel: string;
  headline: string;
  description: string;
  stars: number;
  forks: number;
  language: string;
  license: string;
  architectureDetails: {
    coreStack: string[];
    keyFeatures: string[];
    ceoContribution: string;
    systemOverview: string;
  };
  githubUrl: string;
}

export interface LeadershipTenet {
  id: string;
  number: string;
  title: string;
  summary: string;
  impact: string;
  techFocus: string;
}

export interface Milestone {
  year: string;
  quarter?: string;
  title: string;
  role: string;
  description: string;
  keyOutcome: string;
}

export const CEO_PROFILE = {
  name: "Yuvkesh Meena",
  title: "Chief Executive Officer & Head of Engineering",
  organization: "Gothwad Tech",
  tagline: "Championing Indian Tech Independence & Swadeshi Software Sovereignty",
  motto: "Developing with Indian Brains for Global Tech Independence",
  location: "India",
  githubHandle: "gothwadtech",
  githubOrgUrl: "https://github.com/gothwadtech",
  email: "contact@gothwadtech.in",
  stats: [
    { label: "Public Repositories", value: "27+", detail: "Open-source architectures & systems" },
    { label: "Community Engineers", value: "15,000+", detail: "Indian developers in our ecosystem" },
    { label: "Core Platforms", value: "5 Flagships", detail: "Privacy, AI, Messaging & EdTech" },
    { label: "Sovereignty Focus", value: "100%", detail: "Swadeshi & Self-Reliant Codebases" },
  ],
  bioOverview: "Yuvkesh Meena is the Chief Executive Officer and engineering visionary steering Gothwad Tech—one of India's most proactive grassroots technology collectives dedicated to digital sovereignty and open-source infrastructure. Grounded in the conviction that national progress requires technological independence, Yuvkesh leads the architectural design and deployment of sovereign alternatives to foreign software monopolies.",
  extendedBio: [
    "Under Yuvkesh Meena's leadership, Gothwad Tech has transitioned from a passionate engineering circle into a recognized force for Swadeshi technological innovation. As CEO, he combines executive strategy with hands-on systems programming, personally architecting platforms like Indigram (a privacy-centric Swadeshi Telegram alternative with local Whisper AI), GrixChat (a high-throughput real-time messaging pipeline), and Gothwad AI Studio (a mobile-first developer workspace).",
    "Yuvkesh advocates for 'Developing with Indian Brains'—empowering indigenous engineers to create production-grade tools, secure communication protocols, and accessible educational infrastructure rather than merely consuming foreign enterprise suites.",
    "His leadership philosophy centers on zero data compromises: on-device artificial intelligence, censorship-resistant communication protocols, and transparent open-source codebases accessible to the public on GitHub."
  ]
};

export const LEADERSHIP_TENETS: LeadershipTenet[] = [
  {
    id: "sovereignty",
    number: "01",
    title: "Technological Independence & Swadeshi Architecture",
    summary: "Refusing reliance on closed foreign software ecosystems. Every critical software layer—from encrypted messaging to developer toolchains—must be independently buildable and deployable on sovereign infrastructure.",
    impact: "Protects Indian user data and establishes self-sustaining domestic tech sovereignty.",
    techFocus: "Sovereign Protocols · Open Infrastructure · Zero Foreign Lock-in"
  },
  {
    id: "privacy",
    number: "02",
    title: "Zero-Compromise Privacy & Local On-Device AI",
    summary: "Pioneering private-by-design communications featuring stealth modes, anti-delete safeguards, and on-device machine learning (such as Whisper AI audio transcription running locally without cloud leaks).",
    impact: "Restores user autonomy over personal conversations and confidential metadata.",
    techFocus: "On-Device Whisper AI · End-to-End Encryption · Anti-Surveillance"
  },
  {
    id: "mobile-first",
    number: "03",
    title: "Mobile-First Developer Workspace Democratization",
    summary: "Recognizing that the majority of India's next million programmers write code and manage systems primarily from smartphones. Creating mobile IDEs and touch-optimized GitHub management platforms like Gothwad AI Studio.",
    impact: "Bridges the hardware gap for tier-2 and tier-3 Indian developers.",
    techFocus: "Touch-First IDEs · Git Tree Syncing · Lightweight LLM Interfaces"
  },
  {
    id: "grassroots-edtech",
    number: "04",
    title: "High-Performance Grassroots Educational Systems",
    summary: "Engineering low-bandwidth, offline-first digital infrastructure for Indian educational institutions, connecting teachers, parents, and students with zero friction.",
    impact: "Democratizes educational governance and digital classrooms across rural and urban institutions.",
    techFocus: "Offline Sync · Multi-Tenant Schemas · Instant Notification Daemons"
  }
];

export const GOTHWAD_REPOSITORIES: RepositoryItem[] = [
  {
    id: "indigram",
    name: "indigram",
    githubRepo: "gothwadtech/indigram",
    category: "messaging",
    categoryLabel: "Privacy & Messaging",
    headline: "Privacy-First Swadeshi Telegram Client with On-Device Whisper AI",
    description: "An advanced, self-reliant Swadeshi client engineered with anti-delete preservation, message edit tracking, stealth mode browsing, and local offline Whisper AI speech-to-text audio transcriptions.",
    stars: 142,
    forks: 38,
    language: "Kotlin / C++",
    license: "GPL-3.0",
    architectureDetails: {
      coreStack: ["Android NDK", "MTProto Protocol", "Whisper AI (ONNX Runtime)", "SQLite Cipher"],
      keyFeatures: [
        "Anti-Delete: Incoming messages remain visible even if sender invokes remote delete",
        "Anti-Edit History: Preserves pre-edited versions of incoming transmissions",
        "Stealth Mode: Read messages and listen to voice notes without triggering read receipts or online states",
        "Local Whisper Audio Transcriptions: Transcribes voice notes completely on-device without cloud API exposure"
      ],
      ceoContribution: "Architected the MTProto state management layer and spearheaded integration of the quantized on-device Whisper model running through local hardware acceleration.",
      systemOverview: "Indigram intercepts the protocol stream at the transport layer, decoupling user consumption from sender-triggered telemetry while maintaining full MTProto protocol compliance."
    },
    githubUrl: "https://github.com/gothwadtech/indigram"
  },
  {
    id: "grixchat",
    name: "grixchat",
    githubRepo: "gothwadtech/grixchat",
    category: "messaging",
    categoryLabel: "Social & Messaging",
    headline: "High-Throughput Hybrid Social & Messaging Engine",
    description: "Combines real-time instant messaging with rich multimedia streams, dynamic story feeds, and high-concurrency group channels engineered for Indian network resilience.",
    stars: 89,
    forks: 21,
    language: "TypeScript / Go",
    license: "MIT",
    architectureDetails: {
      coreStack: ["Go (Golang)", "WebSocket / WebRTC", "React Native", "Redis Pub/Sub"],
      keyFeatures: [
        "Hybrid Architecture: Unifies ephemeral social feeds with low-latency messaging",
        "Adaptive Bitrate Engine: Dynamically balances media compression over variable 3G/4G connections",
        "Peer-to-Peer Media Channels: Direct WebRTC pipelines for low server overhead",
        "Encrypted Backups: Sovereign client-side encrypted vault for chat records"
      ],
      ceoContribution: "Formulated the distributed messaging state machine and designed the adaptive packet compression protocol.",
      systemOverview: "GrixChat employs an asynchronous Go pub/sub backbone coupled with Redis streaming queues to achieve sub-40ms message dispatch under heavy concurrency."
    },
    githubUrl: "https://github.com/gothwadtech/grixchat"
  },
  {
    id: "ai-studio",
    name: "ai",
    githubRepo: "gothwadtech/ai",
    category: "ai-tools",
    categoryLabel: "AI & Developer Tools",
    headline: "Gothwad AI Studio - Mobile-First Developer IDE & Git Workspace",
    description: "A developer environment optimized for mobile and desktop screens, enabling programmers to inspect GitHub repositories, commit branch changes, edit code syntax, and collaborate with AI assistants.",
    stars: 210,
    forks: 54,
    language: "TypeScript",
    license: "MIT",
    architectureDetails: {
      coreStack: ["TypeScript", "Monaco Editor Engine", "GitHub GraphQL API", "Virtual FS"],
      keyFeatures: [
        "Mobile Touch Keyboard Extensions: Swift brackets, symbol rows, and cursor navigation for smartphones",
        "Direct GitHub Synchronizer: Instant branch creation, file diffing, and PR management",
        "Offline Buffer Cache: Code uninterrupted during network dropouts; sync when connected",
        "Intelligent Code Summarizer: Local LLM integration for contextual file refactoring"
      ],
      ceoContribution: "Lead architect of the virtual filesystem abstraction layer and the mobile viewport editor interface.",
      systemOverview: "Constructed to make software creation universal, eliminating the prerequisite of high-end laptop hardware for young programmers across India."
    },
    githubUrl: "https://github.com/gothwadtech/ai"
  },
  {
    id: "gxchatindia",
    name: "gxchatindia",
    githubRepo: "gothwadtech/gxchatindia",
    category: "messaging",
    categoryLabel: "Social & Messaging",
    headline: "Lightweight Indian Communication Network with Resilient Transport",
    description: "An ultra-lean messaging platform designed for maximum battery longevity, microscopic APK footprints (<15MB), and uninterrupted connectivity under low-bandwidth rural cellular transitions.",
    stars: 67,
    forks: 16,
    language: "Java / Kotlin",
    license: "Apache-2.0",
    architectureDetails: {
      coreStack: ["Kotlin", "Protobuf Serialization", "Room DB", "WorkManager"],
      keyFeatures: [
        "Micro Footprint: Compact binary size suitable for entry-level smartphones",
        "Protobuf Network Envelopes: Extreme bandwidth savings over standard JSON APIs",
        "Smart Queue Retry: Offline message queuing with exponential backoff and jitter protection",
        "Zero Background Battery Drain: Strict alignment with Android power management policies"
      ],
      ceoContribution: "Designed the Protobuf wire schema and optimized battery-efficient socket keepalive mechanisms.",
      systemOverview: "GXChatIndia addresses the infrastructural reality of tier-2/3 Indian telecommunications, ensuring reliable connectivity where standard apps fail."
    },
    githubUrl: "https://github.com/gothwadtech/gxchatindia"
  },
  {
    id: "education",
    name: "education",
    githubRepo: "gothwadtech/education",
    category: "education",
    categoryLabel: "EdTech & Systems",
    headline: "Mobile-First School Management & Digital Learning Ecosystem",
    description: "A unified operating system for schools and academic institutions encompassing attendance tracking, digital fee management, automated report cards, and parent-teacher communication.",
    stars: 118,
    forks: 32,
    language: "TypeScript / Node.js",
    license: "MIT",
    architectureDetails: {
      coreStack: ["React", "Node.js Express", "PostgreSQL", "Tailwind CSS"],
      keyFeatures: [
        "Role-Based Access: Dedicated portals for Principals, Faculty, Students, and Guardians",
        "Automated Gradebook Engine: Instant GPA, marksheets, and ranking generation",
        "Low-Cost SMS & WhatsApp Alerts: Direct notification dispatch to parent mobile devices",
        "Offline Attendance Logging: Conduct roll-calls in remote classrooms without internet"
      ],
      ceoContribution: "Designed the multi-tenant institutional database schema and offline synchronization routines.",
      systemOverview: "Eliminates cumbersome paperwork and expensive foreign SaaS fees for Indian schools through an accessible, open architecture."
    },
    githubUrl: "https://github.com/gothwadtech/education"
  },
  {
    id: "community-tooling",
    name: "community-core",
    githubRepo: "gothwadtech/community-core",
    category: "systems",
    categoryLabel: "Systems & Infrastructure",
    headline: "Automated Developer Community Engine & Verification Bots",
    description: "The core orchestration software powering the Gothwad Tech ecosystem, providing automated contributor onboarding, code review alerts, and Telegram community moderation bots.",
    stars: 94,
    forks: 27,
    language: "Python / Rust",
    license: "MIT",
    architectureDetails: {
      coreStack: ["Python", "AsyncIO", "Telegram Bot API", "GitHub Webhooks"],
      keyFeatures: [
        "Automated PR Triage: Evaluates incoming open-source pull requests from community coders",
        "Community Anti-Spam Gate: Neural verification filter defending technical forums",
        "Leaderboards & Badging: Spotlights top contributors across the Gothwad Tech ecosystem",
        "Continuous Deployment Hooks: Triggers automated builds upon merged repository commits"
      ],
      ceoContribution: "Architected the webhook dispatcher and designed the community contribution reward pipeline.",
      systemOverview: "Serves as the operational spine connecting thousands of developers building under Gothwad Tech's umbrella."
    },
    githubUrl: "https://github.com/gothwadtech"
  }
];

export const TIMELINE_MILESTONES: Milestone[] = [
  {
    year: "2026",
    quarter: "Q1-Q2",
    title: "Scaling Sovereign AI & On-Device Privacy",
    role: "CEO, Gothwad Tech",
    description: "Integrated on-device local Whisper AI models into Indigram and launched Gothwad AI Studio for mobile-first software engineers across India.",
    keyOutcome: "Over 27 active public repositories and tens of thousands of active community participants."
  },
  {
    year: "2025",
    quarter: "All Year",
    title: "Community Growth & Swadeshi Tech Expansion",
    role: "CEO, Gothwad Tech",
    description: "Expanded Gothwad Tech's developer reach across Indian universities and regional developer hubs under the banner 'Developing with Indian Brains'.",
    keyOutcome: "Solidified India's biggest independent developer collective focused on tech sovereignty."
  },
  {
    year: "2024",
    quarter: "Q2-Q4",
    title: "Deploying High-Concurrency Messaging Stacks",
    role: "Founder & Lead Architect",
    description: "Released GrixChat and GXChatIndia to solve bandwidth constraints and privacy deficits in mainstream messaging applications.",
    keyOutcome: "Engineered ultra-lean protobuf protocols achieving sub-40ms delivery."
  },
  {
    year: "2023",
    quarter: "Inception",
    title: "Founding Gothwad Tech",
    role: "Chief Executive Officer",
    description: "Established Gothwad Tech with the fundamental mission of achieving technological self-reliance and breaking dependence on foreign monopoly platforms.",
    keyOutcome: "Began publishing open-source software libraries and core protocol experiments on GitHub."
  }
];
