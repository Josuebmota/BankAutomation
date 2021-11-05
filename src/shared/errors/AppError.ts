import { BAD_REQUEST } from '@shared/utils/helpers/httpsStatus';

class AppError {
  public readonly message: string;

  public readonly statusCode: number;

  constructor(message: string, statusCode = BAD_REQUEST) {
    this.message = message;
    this.statusCode = statusCode;
  }
}

export default AppError;