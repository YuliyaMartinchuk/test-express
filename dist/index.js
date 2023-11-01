"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
app.get('/', (req, res) => {
    res.send('Hello,  this is test');
});
app.get('/about', (req, res) => {
    res.send('This is my about route..... ');
});
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
// Export the Express API
module.exports = app;
