export { };
const express = require('express');
const adminApiRouter = express.Router();

const { requireAdmin } = require("./utils")

const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

import { Request, Response, NextFunction } from 'express';

adminApiRouter.post("/add_teacher", async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { teacherName } = req.body
        const reqAdmin = req as any;
        const admin = await prisma.admin.findUnique({
            where: { id: reqAdmin.admin.id }
        });
        delete admin.password
        const newTeacher = await prisma.teacher.create({
            data: {
                name: teacherName,
                school: {
                    connect: { id: admin.id }
                }
            }
        })
        res.status(200).send({ message: "Teacher added successfully", data: newTeacher })
    } catch (error) {
        next(error);
    }
});
adminApiRouter.post("/add_class", async (req: Request, res: Response, next: NextFunction) => {
    try {

        res.status(200).send({ message: "Teacher added successfully" })
    } catch (error) {
        next(error);
    }
});
adminApiRouter.post("/add_students", async (req: Request, res: Response, next: NextFunction) => {
    try {

        res.status(200).send({ message: "Teacher added successfully" })
    } catch (error) {
        next(error);
    }
});
module.exports = adminApiRouter;