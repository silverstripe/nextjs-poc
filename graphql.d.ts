export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Query = {
  __typename?: 'Query';
  readPages?: Maybe<ReadPagesConnection>;
  readOnePage?: Maybe<Page>;
};


export type QueryReadPagesArgs = {
  versioning?: Maybe<VersionedInputType>;
  filter?: Maybe<PageFilterFields>;
  sort?: Maybe<PageSortFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type QueryReadOnePageArgs = {
  versioning?: Maybe<VersionedInputType>;
  filter?: Maybe<PageFilterFields>;
  sort?: Maybe<PageSortFields>;
  link?: Maybe<Scalars['String']>;
};

export type VersionedInputType = {
  mode?: Maybe<VersionedQueryMode>;
  /** The date to use for archive */
  archiveDate?: Maybe<Scalars['String']>;
  /** If mode is STATUS, specify which versioned statuses */
  status?: Maybe<Array<Maybe<VersionedStatus>>>;
  version?: Maybe<Scalars['Int']>;
};

/** The versioned mode to use */
export enum VersionedQueryMode {
  /** Read from a specific date of the archive */
  Archive = 'ARCHIVE',
  /** Read the latest version */
  Latest = 'LATEST',
  /** Reads all versionse */
  AllVersions = 'ALL_VERSIONS',
  /** Read from the draft stage */
  Draft = 'DRAFT',
  /** Read from the live stage */
  Live = 'LIVE',
  /** Read only records with a specific status */
  Status = 'STATUS',
  /** Read a specific version */
  Version = 'VERSION'
}

/** The stage to read from or write to */
export enum VersionedStatus {
  /** Only published records */
  Published = 'PUBLISHED',
  /** Only draft records */
  Draft = 'DRAFT',
  /** Only records that have been archived */
  Archived = 'ARCHIVED',
  /** Only records that have unpublished changes */
  Modified = 'MODIFIED'
}

export type PageFilterFields = {
  id?: Maybe<QueryFilterIdComparator>;
  lastEdited?: Maybe<QueryFilterStringComparator>;
  created?: Maybe<QueryFilterStringComparator>;
  canViewType?: Maybe<QueryFilterStringComparator>;
  canEditType?: Maybe<QueryFilterStringComparator>;
  version?: Maybe<QueryFilterIntComparator>;
  urlSegment?: Maybe<QueryFilterStringComparator>;
  title?: Maybe<QueryFilterStringComparator>;
  menuTitle?: Maybe<QueryFilterStringComparator>;
  content?: Maybe<QueryFilterStringComparator>;
  metaDescription?: Maybe<QueryFilterStringComparator>;
  extraMeta?: Maybe<QueryFilterStringComparator>;
  showInMenus?: Maybe<QueryFilterBooleanComparator>;
  showInSearch?: Maybe<QueryFilterBooleanComparator>;
  sort?: Maybe<QueryFilterIntComparator>;
  relationFieldsTestPageID?: Maybe<QueryFilterIdComparator>;
  parentID?: Maybe<QueryFilterIdComparator>;
  elementalAreaID?: Maybe<QueryFilterIdComparator>;
  relationFieldsTestPage?: Maybe<RelationFieldsTestPageFilterFields>;
};

export type QueryFilterIdComparator = {
  contains?: Maybe<Scalars['ID']>;
  eq?: Maybe<Scalars['ID']>;
  ne?: Maybe<Scalars['ID']>;
  gt?: Maybe<Scalars['ID']>;
  lt?: Maybe<Scalars['ID']>;
  gte?: Maybe<Scalars['ID']>;
  lte?: Maybe<Scalars['ID']>;
  in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  endswith?: Maybe<Scalars['ID']>;
  startswith?: Maybe<Scalars['ID']>;
};

export type QueryFilterStringComparator = {
  contains?: Maybe<Scalars['String']>;
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  endswith?: Maybe<Scalars['String']>;
  startswith?: Maybe<Scalars['String']>;
};

export type QueryFilterIntComparator = {
  contains?: Maybe<Scalars['Int']>;
  eq?: Maybe<Scalars['Int']>;
  ne?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  lt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  endswith?: Maybe<Scalars['Int']>;
  startswith?: Maybe<Scalars['Int']>;
};

export type QueryFilterBooleanComparator = {
  contains?: Maybe<Scalars['Boolean']>;
  eq?: Maybe<Scalars['Boolean']>;
  ne?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['Boolean']>;
  lt?: Maybe<Scalars['Boolean']>;
  gte?: Maybe<Scalars['Boolean']>;
  lte?: Maybe<Scalars['Boolean']>;
  in?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
  endswith?: Maybe<Scalars['Boolean']>;
  startswith?: Maybe<Scalars['Boolean']>;
};

export type RelationFieldsTestPageFilterFields = {
  id?: Maybe<QueryFilterIdComparator>;
  lastEdited?: Maybe<QueryFilterStringComparator>;
  created?: Maybe<QueryFilterStringComparator>;
  canViewType?: Maybe<QueryFilterStringComparator>;
  canEditType?: Maybe<QueryFilterStringComparator>;
  version?: Maybe<QueryFilterIntComparator>;
  urlSegment?: Maybe<QueryFilterStringComparator>;
  title?: Maybe<QueryFilterStringComparator>;
  menuTitle?: Maybe<QueryFilterStringComparator>;
  content?: Maybe<QueryFilterStringComparator>;
  metaDescription?: Maybe<QueryFilterStringComparator>;
  extraMeta?: Maybe<QueryFilterStringComparator>;
  showInMenus?: Maybe<QueryFilterBooleanComparator>;
  showInSearch?: Maybe<QueryFilterBooleanComparator>;
  sort?: Maybe<QueryFilterIntComparator>;
  relationFieldsTestPageID?: Maybe<QueryFilterIdComparator>;
  parentID?: Maybe<QueryFilterIdComparator>;
  elementalAreaID?: Maybe<QueryFilterIdComparator>;
  relationFieldsTestPage?: Maybe<RelationFieldsTestPageFilterFields>;
  parent?: Maybe<SiteTreeFilterFields>;
  elementalArea?: Maybe<ElementalAreaFilterFields>;
  viewerGroups?: Maybe<GroupFilterFields>;
};

export type SiteTreeFilterFields = {
  id?: Maybe<QueryFilterIdComparator>;
  version?: Maybe<QueryFilterIntComparator>;
};

export type ElementalAreaFilterFields = {
  id?: Maybe<QueryFilterIdComparator>;
  lastEdited?: Maybe<QueryFilterStringComparator>;
  created?: Maybe<QueryFilterStringComparator>;
  version?: Maybe<QueryFilterIntComparator>;
  ownerClassName?: Maybe<QueryFilterStringComparator>;
  elements?: Maybe<BaseElementFilterFields>;
};

export type BaseElementFilterFields = {
  id?: Maybe<QueryFilterIdComparator>;
  lastEdited?: Maybe<QueryFilterStringComparator>;
  created?: Maybe<QueryFilterStringComparator>;
  version?: Maybe<QueryFilterIntComparator>;
  title?: Maybe<QueryFilterStringComparator>;
  showTitle?: Maybe<QueryFilterBooleanComparator>;
  sort?: Maybe<QueryFilterIntComparator>;
  extraClass?: Maybe<QueryFilterStringComparator>;
  style?: Maybe<QueryFilterStringComparator>;
  parentID?: Maybe<QueryFilterIdComparator>;
};

export type GroupFilterFields = {
  id?: Maybe<QueryFilterIdComparator>;
};

export type PageSortFields = {
  id?: Maybe<SortDirection>;
  lastEdited?: Maybe<SortDirection>;
  created?: Maybe<SortDirection>;
  canViewType?: Maybe<SortDirection>;
  canEditType?: Maybe<SortDirection>;
  version?: Maybe<SortDirection>;
  urlSegment?: Maybe<SortDirection>;
  title?: Maybe<SortDirection>;
  menuTitle?: Maybe<SortDirection>;
  content?: Maybe<SortDirection>;
  metaDescription?: Maybe<SortDirection>;
  extraMeta?: Maybe<SortDirection>;
  showInMenus?: Maybe<SortDirection>;
  showInSearch?: Maybe<SortDirection>;
  sort?: Maybe<SortDirection>;
  relationFieldsTestPageID?: Maybe<SortDirection>;
  parentID?: Maybe<SortDirection>;
  elementalAreaID?: Maybe<SortDirection>;
  relationFieldsTestPage?: Maybe<RelationFieldsTestPageSortFields>;
};

export enum SortDirection {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type RelationFieldsTestPageSortFields = {
  id?: Maybe<SortDirection>;
  lastEdited?: Maybe<SortDirection>;
  created?: Maybe<SortDirection>;
  canViewType?: Maybe<SortDirection>;
  canEditType?: Maybe<SortDirection>;
  version?: Maybe<SortDirection>;
  urlSegment?: Maybe<SortDirection>;
  title?: Maybe<SortDirection>;
  menuTitle?: Maybe<SortDirection>;
  content?: Maybe<SortDirection>;
  metaDescription?: Maybe<SortDirection>;
  extraMeta?: Maybe<SortDirection>;
  showInMenus?: Maybe<SortDirection>;
  showInSearch?: Maybe<SortDirection>;
  sort?: Maybe<SortDirection>;
  relationFieldsTestPageID?: Maybe<SortDirection>;
  parentID?: Maybe<SortDirection>;
  elementalAreaID?: Maybe<SortDirection>;
  relationFieldsTestPage?: Maybe<RelationFieldsTestPageSortFields>;
  parent?: Maybe<SiteTreeSortFields>;
  elementalArea?: Maybe<ElementalAreaSortFields>;
  viewerGroups?: Maybe<GroupSortFields>;
};

export type SiteTreeSortFields = {
  id?: Maybe<SortDirection>;
  version?: Maybe<SortDirection>;
};

export type ElementalAreaSortFields = {
  id?: Maybe<SortDirection>;
  lastEdited?: Maybe<SortDirection>;
  created?: Maybe<SortDirection>;
  version?: Maybe<SortDirection>;
  ownerClassName?: Maybe<SortDirection>;
  elements?: Maybe<BaseElementSortFields>;
};

export type BaseElementSortFields = {
  id?: Maybe<SortDirection>;
  lastEdited?: Maybe<SortDirection>;
  created?: Maybe<SortDirection>;
  version?: Maybe<SortDirection>;
  title?: Maybe<SortDirection>;
  showTitle?: Maybe<SortDirection>;
  sort?: Maybe<SortDirection>;
  extraClass?: Maybe<SortDirection>;
  style?: Maybe<SortDirection>;
  parentID?: Maybe<SortDirection>;
};

export type GroupSortFields = {
  id?: Maybe<SortDirection>;
};

export type ReadPagesConnection = {
  __typename?: 'ReadPagesConnection';
  edges: Array<Maybe<ReadPagesConnectionEdge>>;
  nodes: Array<Maybe<Page>>;
  pageInfo: PageInfo;
};

/** The collections edge */
export type ReadPagesConnectionEdge = {
  __typename?: 'ReadPagesConnectionEdge';
  /** The node at the end of the collections edge */
  node?: Maybe<Page>;
};

export type Page = {
  __typename?: 'Page';
  id?: Maybe<Scalars['ID']>;
  lastEdited?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['String']>;
  canViewType?: Maybe<Scalars['String']>;
  canEditType?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['Int']>;
  urlSegment?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  menuTitle?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  metaDescription?: Maybe<Scalars['String']>;
  extraMeta?: Maybe<Scalars['String']>;
  showInMenus?: Maybe<Scalars['Boolean']>;
  showInSearch?: Maybe<Scalars['Boolean']>;
  sort?: Maybe<Scalars['Int']>;
  relationFieldsTestPageID?: Maybe<Scalars['ID']>;
  parentID?: Maybe<Scalars['ID']>;
  elementalAreaID?: Maybe<Scalars['ID']>;
  relationFieldsTestPage?: Maybe<RelationFieldsTestPage>;
  parent?: Maybe<SiteTree>;
  elementalArea?: Maybe<ElementalArea>;
  viewerGroups?: Maybe<Array<Maybe<Group>>>;
  editorGroups?: Maybe<Array<Maybe<Group>>>;
  link?: Maybe<Scalars['String']>;
  _extend?: Maybe<SiteTreeDescendants>;
  versions?: Maybe<Array<Maybe<PageVersion>>>;
};

export type RelationFieldsTestPage = {
  __typename?: 'RelationFieldsTestPage';
  id?: Maybe<Scalars['ID']>;
  lastEdited?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['String']>;
  canViewType?: Maybe<Scalars['String']>;
  canEditType?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['Int']>;
  urlSegment?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  menuTitle?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  metaDescription?: Maybe<Scalars['String']>;
  extraMeta?: Maybe<Scalars['String']>;
  showInMenus?: Maybe<Scalars['Boolean']>;
  showInSearch?: Maybe<Scalars['Boolean']>;
  sort?: Maybe<Scalars['Int']>;
  relationFieldsTestPageID?: Maybe<Scalars['ID']>;
  parentID?: Maybe<Scalars['ID']>;
  elementalAreaID?: Maybe<Scalars['ID']>;
  relationFieldsTestPage?: Maybe<RelationFieldsTestPage>;
  parent?: Maybe<SiteTree>;
  elementalArea?: Maybe<ElementalArea>;
  viewerGroups?: Maybe<Array<Maybe<Group>>>;
  editorGroups?: Maybe<Array<Maybe<Group>>>;
  link?: Maybe<Scalars['String']>;
  _extend?: Maybe<SiteTreeDescendants>;
  versions?: Maybe<Array<Maybe<RelationFieldsTestPageVersion>>>;
};

export type SiteTree = {
  __typename?: 'SiteTree';
  id?: Maybe<Scalars['ID']>;
  _extend?: Maybe<SiteTreeDescendants>;
  version?: Maybe<Scalars['Int']>;
  versions?: Maybe<Array<Maybe<SiteTreeVersion>>>;
};

export type SiteTreeDescendants = {
  __typename?: 'SiteTreeDescendants';
  page?: Maybe<PageExtensionType>;
  testPage?: Maybe<TestPageExtensionType>;
  registryPage?: Maybe<RegistryPageExtensionType>;
  redirectorPage?: Maybe<RedirectorPageExtensionType>;
  virtualPage?: Maybe<VirtualPageExtensionType>;
  multiTabPage?: Maybe<MultiTabPageExtensionType>;
  basicFieldsTestPage?: Maybe<BasicFieldsTestPageExtensionType>;
  gridFieldTestPage?: Maybe<GridFieldTestPageExtensionType>;
  relationFieldsTestPage?: Maybe<RelationFieldsTestPageExtensionType>;
};

export type PageExtensionType = {
  __typename?: 'PageExtensionType';
  elementalAreaID?: Maybe<Scalars['ID']>;
  elementalArea?: Maybe<ElementalArea>;
  link?: Maybe<Scalars['String']>;
};

export type ElementalArea = {
  __typename?: 'ElementalArea';
  id?: Maybe<Scalars['ID']>;
  lastEdited?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['Int']>;
  ownerClassName?: Maybe<Scalars['String']>;
  elements?: Maybe<ElementsConnection>;
  versions?: Maybe<Array<Maybe<ElementalAreaVersion>>>;
};


export type ElementalAreaElementsArgs = {
  filter?: Maybe<BaseElementFilterFields>;
  sort?: Maybe<BaseElementSortFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export type ElementsConnection = {
  __typename?: 'ElementsConnection';
  edges: Array<Maybe<ElementsConnectionEdge>>;
  nodes: Array<Maybe<BaseElement>>;
  pageInfo: PageInfo;
};

/** The collections edge */
export type ElementsConnectionEdge = {
  __typename?: 'ElementsConnectionEdge';
  /** The node at the end of the collections edge */
  node?: Maybe<BaseElement>;
};

export type BaseElement = {
  __typename?: 'BaseElement';
  id?: Maybe<Scalars['ID']>;
  lastEdited?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  showTitle?: Maybe<Scalars['Boolean']>;
  sort?: Maybe<Scalars['Int']>;
  extraClass?: Maybe<Scalars['String']>;
  style?: Maybe<Scalars['String']>;
  parentID?: Maybe<Scalars['ID']>;
  parent?: Maybe<ElementalArea>;
  _extend?: Maybe<BaseElementDescendants>;
  versions?: Maybe<Array<Maybe<BaseElementVersion>>>;
};

export type BaseElementDescendants = {
  __typename?: 'BaseElementDescendants';
  elementContent?: Maybe<ElementContentExtensionType>;
  fileBlock?: Maybe<FileBlockExtensionType>;
  bannerBlock?: Maybe<BannerBlockExtensionType>;
};

export type ElementContentExtensionType = {
  __typename?: 'ElementContentExtensionType';
  html?: Maybe<Scalars['String']>;
};

export type FileBlockExtensionType = {
  __typename?: 'FileBlockExtensionType';
  fileID?: Maybe<Scalars['ID']>;
  file?: Maybe<File>;
};

export type File = {
  __typename?: 'File';
  id?: Maybe<Scalars['ID']>;
  lastEdited?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['Int']>;
  canViewType?: Maybe<Scalars['String']>;
  canEditType?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  showInSearch?: Maybe<Scalars['Boolean']>;
  companyID?: Maybe<Scalars['ID']>;
  basicFieldsTestPageID?: Maybe<Scalars['ID']>;
  testPageID?: Maybe<Scalars['ID']>;
  parentID?: Maybe<Scalars['ID']>;
  ownerID?: Maybe<Scalars['ID']>;
  fileHash?: Maybe<Scalars['String']>;
  fileFilename?: Maybe<Scalars['String']>;
  fileVariant?: Maybe<Scalars['String']>;
  file?: Maybe<DbFile>;
  company?: Maybe<Company>;
  basicFieldsTestPage?: Maybe<BasicFieldsTestPage>;
  testPage?: Maybe<BasicFieldsTestPage>;
  parent?: Maybe<File>;
  owner?: Maybe<Member>;
  backLinks?: Maybe<Array<Maybe<FileLink>>>;
  viewerGroups?: Maybe<Array<Maybe<Group>>>;
  editorGroups?: Maybe<Array<Maybe<Group>>>;
  versions?: Maybe<Array<Maybe<FileVersion>>>;
};

export type DbFile = {
  __typename?: 'DBFile';
  filename?: Maybe<Scalars['String']>;
  hash?: Maybe<Scalars['String']>;
  variant?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type Company = {
  __typename?: 'Company';
  id?: Maybe<Scalars['ID']>;
  version?: Maybe<Scalars['Int']>;
  versions?: Maybe<Array<Maybe<CompanyVersion>>>;
};

export type CompanyVersion = {
  __typename?: 'CompanyVersion';
  author?: Maybe<Member>;
  publisher?: Maybe<Member>;
  published?: Maybe<Scalars['Boolean']>;
  liveVersion?: Maybe<Scalars['Boolean']>;
  deleted?: Maybe<Scalars['Boolean']>;
  draft?: Maybe<Scalars['Boolean']>;
  latestDraftVersion?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['ID']>;
  version?: Maybe<Scalars['Int']>;
};

export type Member = {
  __typename?: 'Member';
  id?: Maybe<Scalars['ID']>;
};

export type BasicFieldsTestPage = {
  __typename?: 'BasicFieldsTestPage';
  id?: Maybe<Scalars['ID']>;
  lastEdited?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['String']>;
  canViewType?: Maybe<Scalars['String']>;
  canEditType?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['Int']>;
  urlSegment?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  menuTitle?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  metaDescription?: Maybe<Scalars['String']>;
  extraMeta?: Maybe<Scalars['String']>;
  showInMenus?: Maybe<Scalars['Boolean']>;
  showInSearch?: Maybe<Scalars['Boolean']>;
  sort?: Maybe<Scalars['Int']>;
  relationFieldsTestPageID?: Maybe<Scalars['ID']>;
  parentID?: Maybe<Scalars['ID']>;
  elementalAreaID?: Maybe<Scalars['ID']>;
  relationFieldsTestPage?: Maybe<RelationFieldsTestPage>;
  parent?: Maybe<SiteTree>;
  elementalArea?: Maybe<ElementalArea>;
  viewerGroups?: Maybe<Array<Maybe<Group>>>;
  editorGroups?: Maybe<Array<Maybe<Group>>>;
  link?: Maybe<Scalars['String']>;
  _extend?: Maybe<SiteTreeDescendants>;
  versions?: Maybe<Array<Maybe<BasicFieldsTestPageVersion>>>;
};

export type Group = {
  __typename?: 'Group';
  id?: Maybe<Scalars['ID']>;
};

export type BasicFieldsTestPageVersion = {
  __typename?: 'BasicFieldsTestPageVersion';
  author?: Maybe<Member>;
  publisher?: Maybe<Member>;
  published?: Maybe<Scalars['Boolean']>;
  liveVersion?: Maybe<Scalars['Boolean']>;
  deleted?: Maybe<Scalars['Boolean']>;
  draft?: Maybe<Scalars['Boolean']>;
  latestDraftVersion?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['ID']>;
  lastEdited?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['String']>;
  canViewType?: Maybe<Scalars['String']>;
  canEditType?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['Int']>;
  urlSegment?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  menuTitle?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  metaDescription?: Maybe<Scalars['String']>;
  extraMeta?: Maybe<Scalars['String']>;
  showInMenus?: Maybe<Scalars['Boolean']>;
  showInSearch?: Maybe<Scalars['Boolean']>;
  sort?: Maybe<Scalars['Int']>;
  relationFieldsTestPageID?: Maybe<Scalars['ID']>;
  parentID?: Maybe<Scalars['ID']>;
  elementalAreaID?: Maybe<Scalars['ID']>;
  relationFieldsTestPage?: Maybe<RelationFieldsTestPage>;
  parent?: Maybe<SiteTree>;
  elementalArea?: Maybe<ElementalArea>;
  viewerGroups?: Maybe<Array<Maybe<Group>>>;
  editorGroups?: Maybe<Array<Maybe<Group>>>;
  link?: Maybe<Scalars['String']>;
  _extend?: Maybe<SiteTreeDescendants>;
};

export type FileLink = {
  __typename?: 'FileLink';
  id?: Maybe<Scalars['ID']>;
};

export type FileVersion = {
  __typename?: 'FileVersion';
  author?: Maybe<Member>;
  publisher?: Maybe<Member>;
  published?: Maybe<Scalars['Boolean']>;
  liveVersion?: Maybe<Scalars['Boolean']>;
  deleted?: Maybe<Scalars['Boolean']>;
  draft?: Maybe<Scalars['Boolean']>;
  latestDraftVersion?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['ID']>;
  lastEdited?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['Int']>;
  canViewType?: Maybe<Scalars['String']>;
  canEditType?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  showInSearch?: Maybe<Scalars['Boolean']>;
  companyID?: Maybe<Scalars['ID']>;
  basicFieldsTestPageID?: Maybe<Scalars['ID']>;
  testPageID?: Maybe<Scalars['ID']>;
  parentID?: Maybe<Scalars['ID']>;
  ownerID?: Maybe<Scalars['ID']>;
  fileHash?: Maybe<Scalars['String']>;
  fileFilename?: Maybe<Scalars['String']>;
  fileVariant?: Maybe<Scalars['String']>;
  file?: Maybe<DbFile>;
  company?: Maybe<Company>;
  basicFieldsTestPage?: Maybe<BasicFieldsTestPage>;
  testPage?: Maybe<BasicFieldsTestPage>;
  parent?: Maybe<File>;
  owner?: Maybe<Member>;
  backLinks?: Maybe<Array<Maybe<FileLink>>>;
  viewerGroups?: Maybe<Array<Maybe<Group>>>;
  editorGroups?: Maybe<Array<Maybe<Group>>>;
};

export type BannerBlockExtensionType = {
  __typename?: 'BannerBlockExtensionType';
  content?: Maybe<Scalars['String']>;
  callToActionLink?: Maybe<Scalars['String']>;
};

export type BaseElementVersion = {
  __typename?: 'BaseElementVersion';
  author?: Maybe<Member>;
  publisher?: Maybe<Member>;
  published?: Maybe<Scalars['Boolean']>;
  liveVersion?: Maybe<Scalars['Boolean']>;
  deleted?: Maybe<Scalars['Boolean']>;
  draft?: Maybe<Scalars['Boolean']>;
  latestDraftVersion?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['ID']>;
  lastEdited?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  showTitle?: Maybe<Scalars['Boolean']>;
  sort?: Maybe<Scalars['Int']>;
  extraClass?: Maybe<Scalars['String']>;
  style?: Maybe<Scalars['String']>;
  parentID?: Maybe<Scalars['ID']>;
  parent?: Maybe<ElementalArea>;
  _extend?: Maybe<BaseElementDescendants>;
};

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  totalCount: Scalars['Int'];
  hasNextPage?: Maybe<Scalars['Boolean']>;
  hasPreviousPage?: Maybe<Scalars['Boolean']>;
};

export type ElementalAreaVersion = {
  __typename?: 'ElementalAreaVersion';
  author?: Maybe<Member>;
  publisher?: Maybe<Member>;
  published?: Maybe<Scalars['Boolean']>;
  liveVersion?: Maybe<Scalars['Boolean']>;
  deleted?: Maybe<Scalars['Boolean']>;
  draft?: Maybe<Scalars['Boolean']>;
  latestDraftVersion?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['ID']>;
  lastEdited?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['Int']>;
  ownerClassName?: Maybe<Scalars['String']>;
  elements?: Maybe<ElementsConnection>;
};


export type ElementalAreaVersionElementsArgs = {
  filter?: Maybe<BaseElementFilterFields>;
  sort?: Maybe<BaseElementSortFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export type TestPageExtensionType = {
  __typename?: 'TestPageExtensionType';
  elementalAreaID?: Maybe<Scalars['ID']>;
  elementalArea?: Maybe<ElementalArea>;
  link?: Maybe<Scalars['String']>;
};

export type RegistryPageExtensionType = {
  __typename?: 'RegistryPageExtensionType';
  link?: Maybe<Scalars['String']>;
};

export type RedirectorPageExtensionType = {
  __typename?: 'RedirectorPageExtensionType';
  link?: Maybe<Scalars['String']>;
};

export type VirtualPageExtensionType = {
  __typename?: 'VirtualPageExtensionType';
  link?: Maybe<Scalars['String']>;
};

export type MultiTabPageExtensionType = {
  __typename?: 'MultiTabPageExtensionType';
  link?: Maybe<Scalars['String']>;
};

export type BasicFieldsTestPageExtensionType = {
  __typename?: 'BasicFieldsTestPageExtensionType';
  link?: Maybe<Scalars['String']>;
};

export type GridFieldTestPageExtensionType = {
  __typename?: 'GridFieldTestPageExtensionType';
  link?: Maybe<Scalars['String']>;
};

export type RelationFieldsTestPageExtensionType = {
  __typename?: 'RelationFieldsTestPageExtensionType';
  link?: Maybe<Scalars['String']>;
};

export type SiteTreeVersion = {
  __typename?: 'SiteTreeVersion';
  author?: Maybe<Member>;
  publisher?: Maybe<Member>;
  published?: Maybe<Scalars['Boolean']>;
  liveVersion?: Maybe<Scalars['Boolean']>;
  deleted?: Maybe<Scalars['Boolean']>;
  draft?: Maybe<Scalars['Boolean']>;
  latestDraftVersion?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['ID']>;
  _extend?: Maybe<SiteTreeDescendants>;
  version?: Maybe<Scalars['Int']>;
};

export type RelationFieldsTestPageVersion = {
  __typename?: 'RelationFieldsTestPageVersion';
  author?: Maybe<Member>;
  publisher?: Maybe<Member>;
  published?: Maybe<Scalars['Boolean']>;
  liveVersion?: Maybe<Scalars['Boolean']>;
  deleted?: Maybe<Scalars['Boolean']>;
  draft?: Maybe<Scalars['Boolean']>;
  latestDraftVersion?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['ID']>;
  lastEdited?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['String']>;
  canViewType?: Maybe<Scalars['String']>;
  canEditType?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['Int']>;
  urlSegment?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  menuTitle?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  metaDescription?: Maybe<Scalars['String']>;
  extraMeta?: Maybe<Scalars['String']>;
  showInMenus?: Maybe<Scalars['Boolean']>;
  showInSearch?: Maybe<Scalars['Boolean']>;
  sort?: Maybe<Scalars['Int']>;
  relationFieldsTestPageID?: Maybe<Scalars['ID']>;
  parentID?: Maybe<Scalars['ID']>;
  elementalAreaID?: Maybe<Scalars['ID']>;
  relationFieldsTestPage?: Maybe<RelationFieldsTestPage>;
  parent?: Maybe<SiteTree>;
  elementalArea?: Maybe<ElementalArea>;
  viewerGroups?: Maybe<Array<Maybe<Group>>>;
  editorGroups?: Maybe<Array<Maybe<Group>>>;
  link?: Maybe<Scalars['String']>;
  _extend?: Maybe<SiteTreeDescendants>;
};

export type PageVersion = {
  __typename?: 'PageVersion';
  author?: Maybe<Member>;
  publisher?: Maybe<Member>;
  published?: Maybe<Scalars['Boolean']>;
  liveVersion?: Maybe<Scalars['Boolean']>;
  deleted?: Maybe<Scalars['Boolean']>;
  draft?: Maybe<Scalars['Boolean']>;
  latestDraftVersion?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['ID']>;
  lastEdited?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['String']>;
  canViewType?: Maybe<Scalars['String']>;
  canEditType?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['Int']>;
  urlSegment?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  menuTitle?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  metaDescription?: Maybe<Scalars['String']>;
  extraMeta?: Maybe<Scalars['String']>;
  showInMenus?: Maybe<Scalars['Boolean']>;
  showInSearch?: Maybe<Scalars['Boolean']>;
  sort?: Maybe<Scalars['Int']>;
  relationFieldsTestPageID?: Maybe<Scalars['ID']>;
  parentID?: Maybe<Scalars['ID']>;
  elementalAreaID?: Maybe<Scalars['ID']>;
  relationFieldsTestPage?: Maybe<RelationFieldsTestPage>;
  parent?: Maybe<SiteTree>;
  elementalArea?: Maybe<ElementalArea>;
  viewerGroups?: Maybe<Array<Maybe<Group>>>;
  editorGroups?: Maybe<Array<Maybe<Group>>>;
  link?: Maybe<Scalars['String']>;
  _extend?: Maybe<SiteTreeDescendants>;
};
