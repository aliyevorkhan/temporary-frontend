type Error = {
  message: string;
};

type Pagination<T> = {
  count: number;
  next: string;
  previous: string;
  results: T[];
};
