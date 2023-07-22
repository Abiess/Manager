export interface Task {
    id?: string;
    title: string;
    description: string;
    deadline : Date;
    creator : string | undefined;
    createdAm : Date;
    frequency : string; 
  }