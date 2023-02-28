"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rectangle_1 = require("./rectangle");
const displayProps_1 = require("./displayProps");
const square_1 = require("./square");
const Container_1 = require("./Container");
const rectangle = new rectangle_1.Rectangle(3, 4);
const square = new square_1.Square(10);
const container = new Container_1.Container([rectangle, square]);
(0, displayProps_1.displaySquarePerimeter)(container);
//# sourceMappingURL=app.js.map