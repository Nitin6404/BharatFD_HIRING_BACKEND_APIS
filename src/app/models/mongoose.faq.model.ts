import { Schema, model } from 'mongoose';
import { IFAQ } from '../apis/faq/interfaces';

const faqSchema = new Schema<IFAQ>({
    question: {
        en: { type: String, required: true },
        hi: String,
        bn: String,
    },
    answer: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
});

// Dynamic translation getter
faqSchema.methods.getTranslatedQuestion = function(lang: string): string {
    return this.question[lang as keyof typeof this.question] || this.question.en;
};

export const FAQ = model<IFAQ>('FAQ', faqSchema);