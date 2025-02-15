import MasterController from '../../../utils/MasterController';
import RequestBuilder from '../../../utils/RequestBuilder';
import Joi from 'joi';
import { IFAQ } from '../interfaces';
import faqService from '../services/faq.service';
import ResponseBuilder from '../../../utils/ResponseBuilder';
import { StatusCodes } from '../../../enums/StatusCodes';

export default class CreateFaqController extends MasterController<any, any, IFAQ> {
    static doc() {
        return {
            tags: ['FAQ'],
            summary: 'Create FAQ',
            description: 'Create FAQ',
        };
    }

    public static validate() {
        const payload = new RequestBuilder();

        payload.addToBody(
            Joi.object().keys({
                question: Joi.object().keys({
                    en: Joi.string().required(),
                    hi: Joi.string().optional(),
                    bn: Joi.string().optional(),
                }),
                answer: Joi.string().required(),
            })
        );

        return payload;
    }

    async restController(
        params: null,
        query: null,
        body: IFAQ,
        headers: any,
        allData: any
    ): Promise<ResponseBuilder> {
        const { question, answer } = body;

        const response = await faqService.createFaq({
            question, answer
        });

        return new ResponseBuilder(StatusCodes.SUCCESS, response, 'FAQ created successfully');
    }
}
