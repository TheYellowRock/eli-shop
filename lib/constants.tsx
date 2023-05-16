export type SortFilterItem = {
  title: string;
  slug: string | null;
  sortKey: 'RELEVANCE' | 'BEST_SELLING' | 'CREATED_AT' | 'PRICE';
  reverse: boolean;
};

export const defaultSort: SortFilterItem = {
  title: 'Pertinence',
  slug: null,
  sortKey: 'RELEVANCE',
  reverse: false
};

export const sorting: SortFilterItem[] = [
  defaultSort,
  { title: 'Tendance', slug: 'trending-desc', sortKey: 'BEST_SELLING', reverse: false }, // asc
  { title: 'Dernières arrivées', slug: 'latest-desc', sortKey: 'CREATED_AT', reverse: true },
  {
    title: 'Prix : du plus bas au plus élevé',
    slug: 'price-asc',
    sortKey: 'PRICE',
    reverse: false
  }, // asc
  { title: 'Prix : du plus élevé au plus bas', slug: 'price-desc', sortKey: 'PRICE', reverse: true }
];

export const HIDDEN_PRODUCT_TAG = 'nextjs-frontend-hidden';
export const DEFAULT_OPTION = 'Default Title';
export const SHOPIFY_GRAPHQL_API_ENDPOINT = '/api/2023-01/graphql.json';
