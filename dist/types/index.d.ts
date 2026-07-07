export type { ICreateCustomerPayload, IUpdateCustomerPayload } from "../schemas/customer.schema";
export type TResponseHandler<T> = {
    success?: boolean;
    code: number;
    message: string;
    data?: T;
};
//# sourceMappingURL=index.d.ts.map