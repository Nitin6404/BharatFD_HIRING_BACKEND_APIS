import { FAQ } from '../../../models/mongoose.faq.model';

class FAQRepository {
    async find(filter: {}) {
        return FAQ.findOne(filter).exec();
    }

    async create(data: any) {
        return FAQ.create(data);
    }
}

export default new FAQRepository();
