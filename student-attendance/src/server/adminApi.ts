export { };
const express = require('express');
const adminApiRouter = express.Router();

const { requireAdmin } = require("./utils")

const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

import { Request, Response, NextFunction } from 'express';

adminApiRouter.post("/add_teacher", async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { teacherName, teacherCode } = req.body
        const admin = await prisma.admin.findUnique({
            where: {
                teacherCode: teacherCode
            }
        })
        if (!admin) {
            return res.status(404).send({ message: "Admin with the specified teacher code not found" })
        }
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

module.exports = adminApiRouter;