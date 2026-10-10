import { existsSync } from "fs";
import path from "path";

export type ProjectItem = {
  slug: string;
  category: string;
  title: string;
  body: string;
  href: string | null;
  imagePath: string;
};

const PROJECTS: Omit<ProjectItem, "imagePath">[] = [
  {
    slug: "unified-e-wallet",
    category: "Fintech",
    title: "Unified E-Wallet",
    body: "Web wallet for cash-in, cash-out, balance checks, and transaction history with validation and audit-friendly records. Built for high-volume use—clear user flows on the front and operational visibility for admins on the back.",
    href: "https://www.unifiedproducts.com/",
  },
  {
    slug: "global-pinoy",
    category: "Travel",
    title: "Global Pinoy Travel & Tours",
    body: "Travel site and mobile experience for browsing packages, limited offers, and building or viewing trip itineraries. Customers explore and book on their device; staff manage packages and booking details across web and mobile in one system.",
    href: "https://www.globalpinoytravel.com/",
  },
  {
    slug: "skincarebud",
    category: "E-commerce",
    title: "Skincarebud",
    body: "Customer-facing skincare store with collections, product pages, cart, and secure checkout, tuned for mobile shoppers. Backend supports catalog updates, promotions, and order handling so the brand can run the store without juggling separate tools.",
    href: "https://skincarebud.ph/",
  },
  {
    slug: "ptc-smart-library",
    category: "Education",
    title: "PTC Smart Library",
    body: "Web platform for cataloging titles, managing members, and tracking loans and returns. Staff get a single admin view for circulation, overdue items, and inventory—replacing manual logs and scattered spreadsheets.",
    href: null,
  },
];

export function getProjects(): ProjectItem[] {
  const projectsDir = path.join(process.cwd(), "public", "projects");

  return PROJECTS.map((project) => {
    const filename = `${project.slug}.png`;
    const absolute = path.join(projectsDir, filename);
    const imagePath = existsSync(absolute) ? `/projects/${filename}` : "";

    return { ...project, imagePath };
  });
}
