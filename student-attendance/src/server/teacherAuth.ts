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
teacherAuthRouter.post("/teacher_sign_up", async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { admin } = req.body
        const user = await prisma.admin.findUnique({
            where: {
                adminId: admin.id
            },
        });
        const { name, username, password } = req.body
        const hashedPassword = await bcrypt.hash(password, SALT_COUNT)

        const teacher = await prisma.teacher.create({
            data: {
                name: name,
                username: username,
                password: hashedPassword
            }
        });
        delete teacher.password
        const token = jwt.sign({ id: teacher.id, role: "teacher" }, process.env.JWT_SECRET);
        res.send({ token });
        console.log("Teacher successful!");
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
        const reqUser = req as any;
        const user = await prisma.user.findUnique({
            where: { id: reqUser.user.id }
        });
        delete user.password
        res.send(user);
    } catch (error) {
        next(error)
    }
});

module.exports = teacherAuthRouter;