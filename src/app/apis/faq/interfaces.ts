import { Document } from 'mongoose';

export interface IFAQ extends Document {
    question: {
        en: string;
        hi?: string;
        bn?: string;
    };
    answer: string;
    createdAt: Date;
    getTranslatedQuestion(lang: string): string;
}