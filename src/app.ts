export type myType = number;
import express from 'express';

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

// app.listen(8080, () => {
//     console.log(`My Web API is running ${8080}`);
// })