export type TError = {
  data: {
    error: string;
    message: string;
    success: boolean;
  };

  status: number;
};

export type TMeta = {
  limit: number;
  page: number;
  total: number;
  totalPage: number;
};

export type TResponse<T> = {
  data?: T;
  error?: TError;
  meta?: TMeta;
  message: string;
  success: boolean;
};

export type TQueryParams = {
  name: string;
  value: boolean | React.Key;
};
// export type TResponseRedux = TResponse & TMeta
export type TCar = {
  _id:string;
  name: string;
  description: string;
  brand: string;
  model: string;
  year: number;
  color: string;
  isElectric: boolean;
  carType: "sedan" | "SUV" | "truck" | "van" | "coupe" | "electric"; // Enum for car type
  seats: number;
  mileage: number;
  status: "available" | "unavailable"; // Enum for car status
  location: string;
  features: string[];
  pricePerHour: number;
  pricePerDay?: number; // Optional field
  imageUrl?: string[]; // Optional field
  isDeleted: boolean;
};