import { Page } from "./graphql";

declare module "*.svg" {
  const content: string;
  export default content;
}

interface NavigationItem {
  title: string,
  link: string,
  isCurrent: boolean | null | undefined,
  isSection: boolean | null | undefined,
  children?: Array<NavigationItem>,
}

interface BlogPost {
  title: string,
  link: string,
  publishDate: string,
  excerpt?: string,
  featuredImage?: string,
}

interface BlogSettings {
  pagination: PaginationSettings;
}

interface PaginationSettings {
  totalPages: number,
  start: number,
  pageLength: number,
}

/**
 * Global state as passed by the backend
 */
interface GlobalState {
  global: {
    navigation?: Array<NavigationItem>
  },
  page: Page
}

