import { NextFunction, Request, Response } from 'express';

import {CustomError} from "./app";

export function notFound(req: Request, res: Response, next: NextFunction) {
  res.status(404);
  const error = new Error(`🔍 - Not Found - ${req.originalUrl}`);
  next(error);
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const errorHandler = (err: CustomError, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);

  res.status(err.status || 500).json({
    error: true,
    message: err.message || 'An unexpected error occurred',
  });
}
