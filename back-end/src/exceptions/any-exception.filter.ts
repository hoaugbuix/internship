import { ExceptionFilter, Catch, ArgumentsHost } from '@nestjs/common';

@Catch()
export class AnyExceptionFilter implements ExceptionFilter {
  catch(exception: any, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const request = ctx.getRequest();
    response
      .status(exception.getStatus() || 500)
      .json({
        statusCode: exception.getStatus(),
        timestamp: new Date().toISOString(),
        path: request.url,
        message: exception.message.message
      });
  }
}
