import { UUID } from "angular2-uuid";

export interface Comment {
  id: UUID;
  text: string | undefined;
  TaskId : string | undefined ;
}