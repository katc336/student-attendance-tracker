export { };
const express = require('express');
const adminAuthRouter = express.Router();

const { requireUser } = require("./utils")

const jwt = require("jsonwebtoken")

require("dotenv").config();
const { JWT_SECRET } = process.env

const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const bcrypt = require("bcrypt");
const SALT_COUNT = 10;

const { v4: uuidv4 } = require('uuid')


import { Request, Response, NextFunction } from 'express';

//<--------------------------------REGISTER SCHOOL ADMIN-------------------------------->
// POST /auth/register
adminAuthRouter.post("/school_register", async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { name, username, password } = req.body
        const hashedPassword = await bcrypt.hash(password, SALT_COUNT)
        const teacherCode = uuidv4(); // Generate a random teacher code
        const admin = await prisma.admin.create({
            data: {
                name: name,
                username: username,
                password: hashedPassword,
                teacherCode: teacherCode
            }
        });
        delete admin.password
        const token = jwt.sign({ id: admin.id, username, role: "admin" }, process.env.JWT_SECRET);
        res.send({ token });
        console.log("School Registration successful!");
    } catch (error) {
        next(error)
    }
})

//<--------------------------------LOGIN SCHOOL ADMIN-------------------------------->
//POST /auth/login
adminAuthRouter.post("/school_login", async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { username, password } = req.body
        const admin = await prisma.admin.findUnique({
            where: {
                username: username
            },
        });

        const validPassword = await bcrypt.compare(
            password,
            admin?.password ?? ""
        );
        //Check user and password
        if (!admin) {
            return res.status(401).send("There is school registerd with that username.");
        } else if (!validPassword) {
            return res.status(401).send("The password is incorrect password.");
        }

        //Create token
        const token = jwt.sign({ id: admin.id, role: "admin" }, process.env.JWT_SECRET);
        res.send({ token });
        console.log("Login successful!");
    } catch (error) {
        next(error);
    }
})

//<--------------------------------GET ADMIN ACCOUNT-------------------------------->
//GET /auth/my_account
adminAuthRouter.get("/admin_account", requireUser, async (req: Request, res: Response, next: NextFunction) => {
    try {
        const reqAdmin = req as any;
        const admin = await prisma.admin.findUnique({
            where: { id: reqAdmin.admin.id } 
        });
        delete admin.password
        res.send(admin);
    } catch (error) {
        next(error)
    }
 });
 

module.exports = adminAuthRouter;