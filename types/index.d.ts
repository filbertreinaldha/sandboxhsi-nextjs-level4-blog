type TArticleMeta = {
  pagination: {
    page: number;
    perPage: number;
    totalPages: number;
  };
  sort: string;
  categoryId: null | number;
  excludedArticleId: null | number;
};

type TArticleData = {
  id: number;
  category: {
    id: number;
    name: string;
  };
  author: {
    id: number;
    firstName: string;
    middleName: string;
    lastName: string;
  };
  thumbnail: string;
  slug: string;
  title: string;
  summary: string;
};

type TArticleList = {
  meta: TArticleMeta;
  data: TArticleData[];
};

type TArticleDetail = {
  data: TArticleData & {
    content: string;
  };
};

type TInfinitePage = {
  data: TArticleList;
};

type TInfiniteArticle = {
  pageParams: (string | undefined)[];
  pages: TInfinitePage[];
};

type TRelatesParam = {
  categoryId: number;
  excludedArticleId: number;
};

type TSearchParam = {
  sort: "new" | "popular" | undefined;
};
