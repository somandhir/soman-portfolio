export interface Project {
  slug: string;
  area: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  tags: string[];
  github: string;
  live?: string | null;
  features: string[];
  highlights: { label: string; value: string }[];
}

export const projectsData: Project[] = [
  {
    slug: "api-platform",
    area: "md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]",
    title: "API Platform",
    subtitle: "Scalable Microservices Gateway",
    description:
      "A production-grade API Gateway built with Node.js and TypeScript, orchestrating containerised microservices via Docker Compose with a Redis caching layer and RabbitMQ-decoupled audit logging.",
    longDescription:
      "API Platform is a production-grade API Gateway built with Node.js and TypeScript that sits in front of a containerised microservices architecture orchestrated by Docker Compose. The gateway is designed for high-throughput, low-latency workloads — a Redis caching layer brings P99 response times down from 37 ms to 3 ms and cold-start latency from 501 ms to just 17 ms. Rate limiting is handled by a custom Redis-backed token bucket algorithm, stress-tested with Autocannon at 100 concurrent connections, achieving 3,487 req/sec peak throughput while blocking 99.95% of abusive requests via 429 responses. Audit logging is fully decoupled via a RabbitMQ AUDIT_LOGS queue, meaning the gateway maintains 100% availability even when the Audit Service goes offline.",
    tags: ["Node.js", "TypeScript", "Redis", "Docker", "RabbitMQ"],
    github: "https://github.com/somandhir/api-platform",
    features: [
      "Redis caching layer reducing P99 latency by 91% (37 ms → 3 ms)",
      "Cold-start latency reduced by 96.6% (501 ms → 17 ms)",
      "Custom token bucket rate limiter achieving 3,487 req/sec peak",
      "99.95% of abusive requests blocked via 429 responses",
      "RabbitMQ-decoupled audit logging for 100% gateway availability",
      "Containerised microservices with Docker Compose",
    ],
    highlights: [
      { label: "P99 Latency", value: "3 ms" },
      { label: "Peak Throughput", value: "3,487 req/s" },
      { label: "Latency Reduction", value: "91%" },
      { label: "Abuse Block Rate", value: "99.95%" },
    ],
  },
  {
    slug: "taskflow",
    area: "md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]",
    title: "TaskFlow",
    subtitle: "Distributed Job Queue System",
    description:
      "A distributed job processing system powered by BullMQ over Redis with 5 concurrent workers, exponential backoff retry logic, and full job lifecycle tracking via MongoDB timestamps.",
    longDescription:
      "TaskFlow is a distributed job queue system built using a producer–consumer architecture with BullMQ over Redis and Node.js. It runs 5 concurrent workers achieving 8–9 jobs/sec throughput against a theoretical max of 9.3 jobs/sec, processing 103 jobs at a 97% success rate. Job lifecycle is tracked explicitly via createdAt, startedAt, and completedAt timestamps in MongoDB, enabling precise observability — average execution latency sits at ~535 ms (min 524 ms, max 554 ms) with less than 35 ms of queue overhead over a 500 ms task. The system implements exponential backoff retry logic with a max of 3 attempts under a 30% simulated failure rate, with clear separation of queue wait time versus execution latency for accurate diagnostics.",
    tags: ["Node.js", "BullMQ", "Redis", "MongoDB"],
    github: "https://github.com/somandhir/taskFlow",
    features: [
      "Producer–consumer architecture with BullMQ over Redis",
      "5 concurrent workers at 8–9 jobs/sec (97% of theoretical max)",
      "97% job success rate across 103 jobs",
      "Explicit lifecycle timestamps for queue vs execution observability",
      "Exponential backoff retry with max 3 attempts",
      "30% simulated failure rate for resilience testing",
    ],
    highlights: [
      { label: "Throughput", value: "8–9 jobs/s" },
      { label: "Success Rate", value: "97%" },
      { label: "Avg Latency", value: "535 ms" },
      { label: "Queue Overhead", value: "<35 ms" },
    ],
  },
  {
    slug: "capsulelink",
    area: "md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]",
    title: "CapsuleLink",
    subtitle: "Time-Locked Messaging Platform",
    description:
      "A full-stack Next.js app where messages are sealed server-side until a chosen unlock date, with dual auth, Redis-backed rate limiting, and static pre-rendering for near-zero server compute.",
    longDescription:
      "CapsuleLink is a full-stack Next.js application built in strict TypeScript where users compose messages that are cryptographically sealed until a future unlock date. The key architectural decision is that payload withholding happens at the API layer — not the client — meaning early access via browser network inspection or direct API calls is impossible. The app ships with 10 REST API routes, dual authentication (Google OAuth 2.0 and credentials via NextAuth), and a MongoDB backend. Dashboard and auth pages are statically pre-rendered at build time, eliminating server compute per request. Redis-backed rate limiting enforces a 60-second cooldown on email verification routes, and the useCountdown hook is scoped to the dialog component to prevent unnecessary full-page reconciliation.",
    tags: ["Next.js", "TypeScript", "MongoDB", "Redis", "OAuth 2.0"],
    github: "https://github.com/somandhir/capsuleLink",
    live: "https://capsule-link.vercel.app/",
    features: [
      "Server-side content sealing — payloads withheld at the API layer until unlock date",
      "Dual auth: Google OAuth 2.0 + credentials via NextAuth",
      "10 REST API routes with strict TypeScript throughout",
      "Static pre-rendering for dashboard and auth pages",
      "Redis-backed rate limiting with 60-second cooldown on email routes",
      "Scoped useCountdown hook to avoid full-page reconciliation",
    ],
    highlights: [
      { label: "API Routes", value: "10" },
      { label: "Auth Methods", value: "2" },
      { label: "Server Compute", value: "~0 req" },
      { label: "Rate Limit Window", value: "60s" },
    ],
  },
  {
    slug: "nexusstream",
    area: "md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]",
    title: "NexusStream",
    subtitle: "Video Streaming Platform",
    description:
      "A scalable video platform backend handling uploads, subscriptions, playlists, and engagement analytics with MongoDB aggregation pipelines and Cloudinary for automated media management.",
    longDescription:
      "NexusStream is a scalable video streaming backend built with Node.js, Express.js, and MongoDB that supports video uploads, channel subscriptions, playlist management, and engagement analytics. Authentication uses JWT access/refresh token rotation, securing sessions without storing tokens server-side. MongoDB aggregation pipelines with multi-collection $lookup joins power watch-time metrics and cursor-based pagination across large datasets with sub-100ms query times. A unified interaction schema handles likes and comments via shared reusable controllers, reducing duplicate route logic by 40% across 6+ endpoints. Media uploads are automated via Multer and Cloudinary, completely eliminating local disk I/O.",
    tags: ["Node.js", "Express", "MongoDB", "Cloudinary", "JWT"],
    github: "https://github.com/somandhir/backend-project",
    features: [
      "JWT access/refresh token rotation for stateless auth",
      "Multi-collection $lookup aggregation pipelines",
      "Sub-100ms query times with cursor-based pagination",
      "Unified interaction schema for likes and comments",
      "40% reduction in duplicate route logic across 6+ endpoints",
      "Automated uploads via Multer + Cloudinary, zero local disk I/O",
    ],
    highlights: [
      { label: "Query Time", value: "<100 ms" },
      { label: "Code Reduction", value: "40%" },
      { label: "Endpoints", value: "6+" },
      { label: "Storage", value: "Cloudinary" },
    ],
  },
  {
    slug: "echo-chat",
    area: "md:[grid-area:3/1/4/13] xl:[grid-area:2/8/3/13]",
    title: "ECHO Chat",
    subtitle: "Real-time Messaging Application",
    description:
      "A full-stack real-time chat app with a 3-state delivery pipeline synced via Socket.io, single-round-trip MongoDB aggregation for unread counts, and JWT auth in HTTP-only cookies.",
    longDescription:
      "ECHO Chat is a full-stack real-time messaging application built with Node.js, React.js, and Socket.io. The standout feature is a 3-state message delivery pipeline (sent → delivered → seen) synchronized across all connected clients via WebSocket events with per-event acknowledgment handling, ensuring zero message loss on reconnection. Unread counts are computed in a single MongoDB aggregation round-trip using nested $lookup stages, improving inbox load performance by 60% over the prior N+1 query approach. Authentication is secured with JWT stored in HTTP-only cookies, protecting against both XSS and CSRF attack vectors.",
    tags: ["React", "Node.js", "Socket.io", "MongoDB", "JWT"],
    github: "https://github.com/somandhir/chat-app",
    live: "https://chat-app-5ufs.onrender.com",
    features: [
      "3-state delivery pipeline: sent → delivered → seen",
      "Zero message loss on reconnection via per-event ACK handling",
      "Single-round-trip MongoDB aggregation for unread counts",
      "60% faster inbox load over prior N+1 query approach",
      "JWT in HTTP-only cookies against XSS and CSRF",
      "Real-time bidirectional messaging with Socket.io",
    ],
    highlights: [
      { label: "Delivery States", value: "3" },
      { label: "Inbox Speed", value: "+60%" },
      { label: "Message Loss", value: "Zero" },
      { label: "DB Round-trips", value: "1" },
    ],
  },
];