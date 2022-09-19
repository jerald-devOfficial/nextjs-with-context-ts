export interface ItemsContext {
  items: {};
  setItems: () => null;
}

export interface Items {
  id: string;
  name: string;
  price: number;
  picture: string;
}

export type Reduce = {
  x: number;
  y: number;
};
