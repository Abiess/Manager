
export interface Merchant {
  id?: string;
  Name: string;
  description?: string;
  creator? : string | undefined;
  createdAm? : Date;
  attachement? : string ;
  quantity? : boolean;
  Barcode?: string,
  expiredDateTime?: Date
    
  }
  
  export class Product {
    uuid?: string;
    categories?: Category[];
    name?: string;
    description?: string;
    imageLookupKeys?: string[];
    presentation?: Presentation;
    variants?: ProductVariant[];
    externalReference?: string;
    etag?: string;
    updated?: string;
    updatedBy?: string;
    created?: string;
    unitName?: string;
    vatPercentage?: string;
    online?: OnlineInfo;
    variantOptionDefinitions: any; // You can define a specific type if available
    taxCode?: string;
    category?: Category;
    metadata: any; // You can define a specific type if available
    taxRates?: any[]; // You can define a specific type if available
    taxExempt: any; // You can define a specific type if available
  }
  
  export class Category {
    uuid?: string;
    name?: string;
  }
  
  export class Presentation {
    imageUrl?: string;
    backgroundColor?: string;
    textColor?: string;
  }
  
  export class ProductVariant {
    uuid?: string;
    name?: string;
    description?: string;
    sku?: string;
    barcode?: string;
    price?: Price;
    costPrice?: Price;
    vatPercentage?: string;
    options: any; // You can define a specific type if available
    presentation: any; // You can define a specific type if available
  }
  
  export class Price {
    amount?: number;
    currencyId?: string;
  }
  
  export class OnlineInfo {
    status?: string;
    title?: string;
    description?: string;
    shipping?: string;
    presentation: any; // You can define a specific type if available
    seo?: SeoInfo;
  }
  
  export class SeoInfo {
    title?: string;
    metaDescription?: string;
    slug?: string;
  }
  