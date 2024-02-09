type IError = {
  message: string;
  name: string;
  response: {
    data: {
      non_field_errors: string[];
    };
  };
};

type Pagination<T> = {
  count: number;
  next: string;
  previous: string;
  results: T[];
};
