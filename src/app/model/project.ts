
export interface Project {
    id?: string;
    name: string;
    description: string;
    budget: string;
    tasks: string[];
    deadline : Date;
    members : string[];
    creator : string | undefined;
    createdAm: Date;

    
  }
  