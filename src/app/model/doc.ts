
export interface Doc {
  id?: string |undefined;
  name: string;
  description: string;
  creator : string | undefined;
  createdAm : Date;
  docsArt : string;
  attachements : Attachment[]; 
  paid : boolean;
    
  }
  export interface Attachment{

    name : string, 
    creator : string ,
  }
  