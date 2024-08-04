import { createStream } from 'rotating-file-stream';
import { fileURLToPath } from 'url';
import fs from 'fs';
import path, { dirname } from 'path';
import dotenv from 'dotenv'



dotenv.config('../')
const __filename=fileURLToPath(import.meta.url);
const __dirname=dirname(__filename);

const loggerPath=path.join(__dirname,`../${process.env.loggerDir}`)
fs.existsSync(loggerPath) || fs.mkdirSync(loggerPath);

// create file
export const accessLogStream= createStream(process.env.loggerFileName,{
    path:loggerPath,
    interval:'1d',
    compress:'gzip'
})


