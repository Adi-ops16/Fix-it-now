import status from "http-status";
import { catchAsync, sendResponse } from "../utils";
import { loginUserIntoDB } from "./auth.service";
import { LoginSchema } from "../schemas/LoginSchema";

const loginUser = catchAsync(async (req, res, next) => {
    const parsedData = LoginSchema.parse(req.body)
    const result = await loginUserIntoDB(parsedData);

    res.cookie('accessToken', result.accessToken, {
        httpOnly: true,
        maxAge: 1000 * 60 * 60 * 24,
        secure: false,
        sameSite: 'lax'
    })

    sendResponse(res, {
        code: status.OK,
        message: "User logged in successfully",
        data: result
    })
})

export { loginUser };