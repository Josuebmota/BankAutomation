import 'reflect-metadata';
import 'dotenv';
import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import { errors } from 'celebrate';
import 'express-async-errors';

import AppError from '@shared/errors/AppError';
import routes from '@shared/infra/http/routes';

import '@shared/infra/typeorm';
import '@shared/container';
import { INTERNAL_SERVER_ERROR } from '@shared/utils/helpers/httpsStatus';

const app = express();

app.use(cors());
app.use(express.json());
app.use('bankautomation/api/v1/', routes);
app.use(errors());

app.use((err: Error, request: Request, response: Response, _: NextFunction) => {
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({
      status: 'error',
      message: err.message,
    });
  }

  return response.status(INTERNAL_SERVER_ERROR).json({
    status: 'error',
    message: 'Internal server error',
    err,
  });
});

app.listen(process.env.PORT || 3333, () => {
  console.log('🚀 CadUnicoApi started!!!');
});