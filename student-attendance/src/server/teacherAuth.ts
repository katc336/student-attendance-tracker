export { };
const express = require('express');
const teacherAuthRouter = express.Router();

const { requireUser } = require("./utils")

const jwt = require("jsonwebtoken")

require("dotenv").config();
const { JWT_SECRET } = process.env

const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const bcrypt = require("bcrypt");
const SALT_COUNT = 10;

import { Request, Response, NextFunction } from 'express';
//<--------------------------------REGISTER TEACHER-------------------------------->
// POST /auth/register
teacherAuthRouter.post("/teacher_register", async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { teacherCode, name, username, password } = req.body
        // Find the school based on the teacher code
        const schoolCode = await prisma.admin.findUnique({
            where: {
                teacherCode: teacherCode
            },
        });
        if (!schoolCode) {
            return res.status(401).send("Admin not found with the provided teacher code.");
        }
        const hashedPassword = await bcrypt.hash(password, SALT_COUNT)
        // Create teacher and associated with the admin/school
        const teacher = await prisma.teacher.create({
            data: {
                name: name,
                username: username,
                password: hashedPassword,
                school: {
                    connect: { id: schoolCode.id }
                }
            }
        });
        delete teacher.password
        const token = jwt.sign({ id: teacher.id, role: "teacher" }, process.env.JWT_SECRET);
        res.send({ token });
        console.log("Teacher successfully registered!");
    } catch (error) {
        next(error)
    }
})

//<--------------------------------LOGIN TEACHER-------------------------------->
//POST /auth/login
teacherAuthRouter.post("/teacher_login", async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { username, password } = req.body
        const user = await prisma.teacher.findUnique({
            where: {
                username: username
            },
        });
        const validPassword = await bcrypt.compare(
            password,
            user?.password ?? ""
        );
        //Check user and password
        if (!user) {
            return res.status(401).send("There is no user with that username.");
        } else if (!validPassword) {
            return res.status(401).send("Incorrect password.");
        }
        //Create token
        const token = jwt.sign({ id: user.id, role: "teacher" }, process.env.JWT_SECRET);
        res.send({ token });
        console.log("Login successful!");
    } catch (error) {
        next(error);
    }
})

//<--------------------------------GET TEACHER ACCOUNT-------------------------------->
//GET /auth/my_account
teacherAuthRouter.get("/teacher_account", requireUser, async (req: Request, res: Response, next: NextFunction) => {
    try {
        const teacher = req as any;
        const teacher_user = await prisma.teacher.findUnique({
            where: { id: teacher.teacher.id }
        });
        delete teacher_user.password
        res.send(teacher_user);
    } catch (error) {
        next(error)
    }
});

// adminAuthRouter.get("/admin_account", requireUser, async (req: Request, res: Response, next: NextFunction) => {
//     try {
//         const reqAdmin = req as any;
//         const admin = await prisma.admin.findUnique({
//             where: { id: reqAdmin.admin.id } 
//         });
//         delete admin.password
//         res.send(admin);
//     } catch (error) {
//         next(error)
//     }
//  });

module.exports = teacherAuthRouter;