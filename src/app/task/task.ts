import { Attachment } from "../model/attachement";

export interface Task {
    id?: string;
    title: string;
    description: string;
    deadline : Date;
    creator : string | undefined;
    createdAm : string;
    frequency : string; 
    assignedTo: string;
    attachements : Attachment[];
    isforked: boolean ; 
  }