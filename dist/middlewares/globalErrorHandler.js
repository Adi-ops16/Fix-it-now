import config from "../config";
import { ZodError } from "zod";
const globalErrorHandler = (err, req, res, next) => {
    let code = err.code || 500;
    let message = err.message || 'Internal Server Error';
    const errorResponse = {
        success: false,
        message: message,
    };
    // Handle Zod validation errors
    if (err instanceof ZodError) {
        code = 400;
        message = 'Validation Error';
        errorResponse.message = message;
        errorResponse.error = err.issues.reduce((acc, issue) => {
            const path = issue.path.join('.');
            if (!acc[path]) {
                acc[path] = [];
            }
            acc[path].push(issue.message);
            return acc;
        }, {});
    }
    if (config.node_env === 'development') {
        errorResponse['error'] = err.stack;
    }
    res.status(code).json(errorResponse);
};
export default globalErrorHandler;
//# sourceMappingURL=globalErrorHandler.js.map