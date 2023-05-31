import { Circle } from './circle';
import { LayoutContext, Position } from './layout';
const LABEL_MAX_HEIGHT = 50;

export class Label {
  constructor(
    private text: string,
    private options: {
      width: number;
      height: number;
      position: Position;
      rotation?: number;
      styles?: { attr: string; value: string }[];
    }
  ) {}

  public static calculateRotation(
    position: Position,
    center: Position
  ): number {
    const angle = Circle.getAngleBetweenPositions(center, position);
    if (angle > 90 && angle <= 180) return angle + 180;
    if (angle < -90 && angle >= -180) return angle - 180;
    return angle;
  }

  public draw(
    layoutContext: LayoutContext
  ): d3.Selection<SVGTextElement, unknown, HTMLElement, any> {
    const transform = this.options.rotation
      ? `rotate(${this.options.rotation}) translate(${this.options.position.x}, ${this.options.position.y}) `
      : `translate(${this.options.position.x}, ${this.options.position.y})`;

    let labelContainer = layoutContext
      .append('g')
      .attr('transform', transform)
      .attr(
        'transform-origin',
        `${this.options.position.x} ${this.options.position.y}`
      )
      .append('foreignObject')
      .attr('width', this.options.width)
      .attr('height', this.options.height)
      .append('xhtml:div');

    if (this.options?.styles) {
      for (const style of this.options.styles) {
        labelContainer.style(style.attr, style.value);
      }
    }

    const textElement = labelContainer
      .attr('class', 'label-container')
      .append('text')
      .text(capitalizeFirst(this.text));

    textElement.raise();
    return textElement;
  }
}

function capitalizeFirst(string: string) {
  return string[0].toUpperCase() + string.slice(1, string.length).toLowerCase();
}
