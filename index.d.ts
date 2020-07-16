declare module "*.svg" {
  const content: string;
  export default content;
}

interface NavigationItem {
  Title: string,
  Link: string,
  IsCurrent: boolean | null | undefined,
  IsSection: boolean | null | undefined,
  Children?: Array<NavigationItem>,
}

interface BlogPost {
  Title: string,
  Link: string,
  PublishDate: string,
  Excerpt?: string,
  FeaturedImage?: string,
}

interface BlogSettings {
  Pagination: PaginationSettings;
}

interface PaginationSettings {
  TotalPages: number,
  Start: number,
  PageLength: number,
}

/**
 * Global state as passed by the backend
 */
interface GlobalState {
  global: {
    navigation?: Array<NavigationItem>
  },
  page: {
    Title: string,
    Type: PageType,
    Content?: string,
    BlogPosts?: Array<BlogPost>,
    BlogSettings?: BlogSettings,
    Blocks?: Array,
  }
}

