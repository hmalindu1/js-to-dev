export interface TAuthor {
  id: string;
  body: string;
  collection: string;
  data: {
    title: string;
    image: string;
    description: string;
    social: {
      facebook: string;
      twitter: string;
      instagram: string;
    }
  };
}

export interface TPost {
  id: string;
  body: string;
  collection: string;
  data: {
    title: string;
    description: string;
    date: any;
    image: string;
    authors: string[];
    categories: string[];
    tags: string[];
    draft: boolean;
  };
}