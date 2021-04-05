export interface Items {
  quantity: number;
  product: {
    imageObjects: {
      extraLarge: string;
      featured: boolean;
      large: string;
      medium: string;
      small: string;
      thumbnail: string;
      valid: boolean;
    };
    name: string;
    priceSpecification: {
      discount: number;
      maxPrice: number;
      originalPrice: number;
      percent: number;
      price: number;
      sku: string;
    };
  };
}

export interface ImageObject {
  extraLarge: string;
  featured: boolean;
  large: string;
  medium: string;
  small: string;
  thumbnail: string;
  valid: boolean;
}
export interface IData {
  cell: string;
  dob: {
    date: string;
    age: number;
  };
  email: string;
  gender: string;
  id: {
    name: string;
    value: boolean;
  };
  location: {
    city: string;
    coordinates: {
      latitude: string;
      longitude: string;
      country: string;
      postcode: number;
      state: string;
    };
    country: string;
    postcode: number;
    state: string;
    street: {
      number: number;
      name: string;
    };
    timezone: {
      offset: string;
      description: string;
    };
  };
  login: {
    md5: string;
    password: string;
    salt: string;
    sha1: string;
    sha256: string;
    username: string;
    uuid: string;
  };
  name: {
    title: string;
    first: string;
    last: string;
  };
  nat: string;
  phone: string;
  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  };
  registered: {
    date: string;
    age: number;
  };
}
