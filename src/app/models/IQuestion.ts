import { IAnswer } from "./IAnswer";

export interface IQuestion{
    questionId:string;
    title:string;
    description:string;
    listOfAnswers: IAnswer[];

}