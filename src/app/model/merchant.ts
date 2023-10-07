
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
  