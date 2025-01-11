export { };
const express = require('express');
const teacherApiRouter = express.Router();

const { requireAdmin } = require("./utils")

const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

import { Request, Response, NextFunction } from 'express';




module.exports =teacherApiRouter;