
export interface Group {
  id?: string;
  name: string;
  description: string;
  deadline : Date;
  creator : string | undefined;
  createdAm : Date;
  frequency : string;
  members: string[] 
}
