import { Router, Request, Response } from 'express';
import swaggerUi from 'swagger-ui-express';
import swaggerDocs from '@shared/docs/swagger';

const routes = Router();

routes.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerDocs));


export default routes;