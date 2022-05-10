export interface Recipe {
  id: number;
  name: string;
  category: string;
  difficulty: Array<number>;
  imgSrc: string;
  slug: string;
  bookmarked: boolean;
  ingredients: Array<string>;
  preparation: string;
}