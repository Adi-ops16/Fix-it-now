import status from "http-status";
import { prisma } from "../lib/prisma";
import { AppError, hashPassword } from "../utils";
const getAllCustomers = async () => {
    const result = await prisma.user.findMany({
        omit: { password: true }
    });
    return result;
};
const createCustomer = async (payload) => {
    const isCustomerExist = await prisma.user.findUnique({
        where: { email: payload.email }
    });
    if (isCustomerExist) {
        throw new AppError(status.CONFLICT, "Account already exists, please login");
    }
    const hashedPassword = await hashPassword(payload.password);
    const result = await prisma.user.create({
        data: {
            name: payload.name,
            email: payload.email,
            password: hashedPassword,
            role: payload.role,
            photo_url: payload.photo_url || null,
        },
        omit: { password: true },
    });
    return result;
};
const getCustomerById = async (id) => {
    const result = await prisma.user.findUnique({
        where: { id },
        omit: { password: true }
    });
    if (!result) {
        throw new AppError(status.NOT_FOUND, "Customer doesn't exist");
    }
    return result;
};
const updateCustomerById = async (id, payload) => {
    const { name, photo_url } = payload;
    const result = await prisma.user.update({
        where: { id },
        data: {
            ...(name !== undefined && { name }),
            ...(photo_url !== undefined && { photo_url })
        },
        omit: { password: true }
    });
    if (!result) {
        throw new AppError(status.NOT_FOUND, "Failed to update customer, check your id and try again");
    }
    return result;
};
const deleteCustomerById = async (id) => {
    const customer = await prisma.user.findUnique({
        where: { id }
    });
    if (!customer) {
        throw new AppError(status.NOT_FOUND, "Customer not found, check your id and try again");
    }
    await prisma.user.delete({
        where: { id }
    });
    return true;
};
export const customerService = { getAllCustomers, getCustomerById, createCustomer, updateCustomerById, deleteCustomerById };
//# sourceMappingURL=customer.service.js.map