interface ILoginPayload {
    email: string;
    password: string;
}
declare const loginUserIntoDB: (payload: ILoginPayload) => Promise<{
    accessToken: string;
}>;
export { loginUserIntoDB };
//# sourceMappingURL=auth.service.d.ts.map