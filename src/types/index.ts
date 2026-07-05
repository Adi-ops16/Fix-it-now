import e from "express";
import type { Role } from "../prisma/generated/prisma/enums";

export interface ICreateUserPayload {
    name: string;
    email: string;
    password: string;
    role: Role;
    photo_url: string
}

export interface IUpdateUserPayload extends Partial<
    Omit<Omit<ICreateUserPayload, "password">, "email">
> { }

export type TResponseHandler<T> = {
    success?: boolean;
    code: number;
    message: string;
    data?: T;
}