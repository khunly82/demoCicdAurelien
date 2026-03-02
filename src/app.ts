export type myType = number;
import express from 'express';

const port = Number(process.env.PORT) || 8080;
const host = process.env.IP || '::';

export function myFunction(): myType {
    const value: myType = 43;
    return value;
}

const app = express();

app.get('/', (_req, res) => {

    const msg = `Message : ${myFunction()}`;

    res.json({
        msg
    });
})

app.listen(port, host, () => {
    console.log(`My Web API is running ${port}`);
})