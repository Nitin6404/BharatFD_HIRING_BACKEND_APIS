import { Schema, model, Document } from 'mongoose';

export interface IFAQ extends Document {
    question: {
        en: string;
        hi?: string;
        bn?: string;
    };
    answer: string;
    getTranslatedQuestion(lang: string): string;
}

const faqSchema = new Schema<IFAQ>({
    question: {
        en: { type: String, required: true },
        hi: String,
        bn: String,
    },
    answer: { type: String, required: true },
});

// Dynamic translation getter
faqSchema.methods.getTranslatedQuestion = function (lang: string): string {
    return this.question[lang as keyof typeof this.question] || this.question.en;
};

export const FAQ = model<IFAQ>('FAQ', faqSchema);
