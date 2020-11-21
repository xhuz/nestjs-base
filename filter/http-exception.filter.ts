import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException
} from '@nestjs/common';
import {isObject, isString} from '@nestjs/common/utils/shared.utils';

@Catch(HttpException)
export class HttpExceptionFilter<T extends HttpException, Request, Response>
  implements ExceptionFilter {
  public catch(exception: T, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const res = ctx.getResponse<Response>();
    const req = ctx.getRequest<Request>();

    const code = exception.getStatus();

    const errorResponse = exception.getResponse();
    let message: string | undefined;
    let error: string | undefined;

    if (isString(errorResponse)) {
      message = errorResponse;
    } else if (isObject(errorResponse)) {
      const errMessage = (errorResponse as Record<string, any>).message;
      error = (errorResponse as Record<string, any>).error;
      if (isString(errMessage)) {
        message = errMessage;
      } else if (Array.isArray(errMessage)) {
        message = errMessage[0];
      }
    }

    res.status(code).json({
      statusCode: code,
      error,
      message
    });
  }
}
