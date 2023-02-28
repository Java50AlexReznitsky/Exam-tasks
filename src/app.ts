import { Shape } from "./Shape";
import { Rectangle } from "./rectangle";
import { displaySquarePerimeter } from "./displayProps";
import { Square } from "./square";
import { Container } from "./Container";
const rectangle: Rectangle = new Rectangle(3, 4);
const square = new Square(10);
const container:Container = new Container([rectangle,square])
displaySquarePerimeter(container)


