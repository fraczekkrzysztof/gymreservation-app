import { Trainer } from './trainer.model';
import { Activity } from './activity.model';

export class Lesson {
    id:number;
    name:string;
    date: string;
    max:number;
    available:number;
    trainer:Trainer;
    activity:Activity
}

