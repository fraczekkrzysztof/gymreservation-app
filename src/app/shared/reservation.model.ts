import { Lesson } from './lesson.model';

export class Reservation {
    id : number;
    lesson : Lesson;
    name : string;
    emial: string;
    confirmed : boolean;
    waiting: number;
    time : string;
    canceled: boolean;
}
