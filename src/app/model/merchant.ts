
export interface Merchant {
  id?: string;
  Name: string | null;
  description?: string | null;
  creator? : string | undefined;
  createdAm? : Date;
  attachement? : string ;
  quantity? : boolean;
  Barcode?: string,
  expiredDateTime?: Date
    
  }
  
  export class Product {
    uuid?: string;
    categories?: Category[] | null;
    name?: string;
    description?: string | null ;
    imageLookupKeys?: string[];
    presentation?: Presentation;
    variants?: ProductVariant[];
    externalReference?: string | null;
    etag?: string | null;
    updated?: string | null;
    updatedBy?: string | null;
    created?: string | null;
    unitName?: string | null;
    vatPercentage?: string | null;
    online?: OnlineInfo | null;
    variantOptionDefinitions: any; // You can define a specific type if available
    taxCode?: string | null;
    category?: Category | null;
    metadata: any; // You can define a specific type if available
    taxRates?: any[]; // You can define a specific type if available
    taxExempt: any; // You can define a specific type if available
  }
  
  export class Category {
    uuid?: string | undefined;
    name?: string | null;
  }
  
  export class Presentation {
    imageUrl?: string;
    backgroundColor?: string | null;
    textColor?: string | null;
  }
  
  export class ProductVariant {
    uuid?: string;
    name?: string | null;
    description?: string | null;
    sku?: string | null;
    barcode?: string | null;
    price?: Price | null;
    costPrice?: Price | null;
    vatPercentage?: string | null;
    options: any; // You can define a specific type if available
    presentation: any; // You can define a specific type if available
  }
  
  export class Price {
    amount?: number;
    currencyId?: string | null;
  }
  
  export class OnlineInfo {
    status?: string | null;
    title?: string | null;
    description?: string | null;
    shipping?: string | null;
    presentation: any | null; // You can define a specific type if available
    seo?: SeoInfo | null;
  }
  
  export class SeoInfo {
    title?: string | null;
    metaDescription?: string | null;
    slug?: string | null;
  }
  