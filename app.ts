import * as dotenv from 'dotenv';
import express, {Request, Response} from 'express';
import *  as bodyParser from 'body-parser';
import { orderRouter } from './src/routes/orderRouter';
import {db} from './db';
import swaggerUi from 'swagger-ui-express';
import * as swaggerDocument from './src/swagger.json';