import { loginUserIntoDB } from "./auth.service";

const loginUser = async (req, res) => {
    const result = await loginUserIntoDB(req.body);
}

export { loginUser };