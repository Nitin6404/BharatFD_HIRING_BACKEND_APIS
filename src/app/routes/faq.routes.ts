import { Router } from 'express';

const router = Router();

// Define your FAQ routes here
router.get('/', (req, res) => {
    res.json({ message: 'FAQ routes working' });
});

export default (app: any) => {
    app.use('/api/faqs', router);
};
