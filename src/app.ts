export type myType = number;
import express from 'express';

const port = process.env.PORT || 8080;

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

app.listen(port, () => {
    console.log(`My Web API is running ${port}`);
})