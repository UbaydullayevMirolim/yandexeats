"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerSchema = void 0;
const joi_1 = __importDefault(require("joi"));
const registerSchema = (payload) => {
    return joi_1.default.object({
        name: joi_1.default.string().required(),
        email: joi_1.default.string()
            .email().required(),
        password: joi_1.default.string()
            .regex(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/)
            .required(),
    }).validate(payload);
};
exports.registerSchema = registerSchema;
