import config from "../config";

type ErrorResponse = {
    success: boolean
    message: string;
    error?: string;
}

const globalErrorHandler = (err: any, req: any, res: any, next: any) => {
    const code = err.code || 500;
    const message = err.message || 'Internal Server Error';

    const errorResponse: ErrorResponse = {
        success: false,
        message: message,
    }

    if (config.node_env === 'development') {
        errorResponse['error'] = err.stack;
    }

    res.status(code).json(errorResponse);
}

export default globalErrorHandler;