import { IFAQ } from '../interfaces';
import faqRepository from '../repositories/mongoose.faq.repository';


class FaqService {
    async getFaqs() {
        return faqRepository.find({});
    }

    async getFaqById(id: string) {
        return faqRepository.find({ _id: id });
    }

    async createFaq(data: IFAQ) {
        return faqRepository.create(data);
    }
}

export default new FaqService();
