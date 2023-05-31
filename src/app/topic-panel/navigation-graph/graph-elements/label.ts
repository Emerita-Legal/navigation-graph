import { Circle } from './circle';
import { LayoutContext, Position } from './layout';
const LABEL_MAX_HEIGHT = 50;

export class Label {
  constructor(
    private text: string,
    private position: Position,
    private width: number,
    private options?: {
      rotation?: number;
      styles?: { attr: string; value: string }[];
    }
  ) {}

  public static calculateRotation(position: Position, center: Position) {
    const angle = Circle.getAngleBetweenPositions(center, position);
    if (angle > 90 && angle <= 180) return angle + 180;
    if (angle < -90 && angle >= -180) return angle - 180;
    return angle;
  }

  public draw(layoutContext: LayoutContext): void {
    const transform = this.options?.rotation
      ? `rotate(${this.options.rotation}) translate(${this.position.x}, ${this.position.y}) `
      : `translate(${this.position.x}, ${this.position.y})`;

    const drawnLabel = layoutContext
      .append('g')
      .attr('transform', transform)
      .attr('transform-origin', `${this.position.x} ${this.position.y}`)
      .append('foreignObject')
      .attr('width', this.width)
      .attr('height', LABEL_MAX_HEIGHT)
      .append('xhtml:div');

    if (this.options?.styles) {
      for (const style of this.options.styles) {
        drawnLabel.style(style.attr, style.value);
      }
    }

    drawnLabel
      .attr('class', 'label-container')
      .append('text')
      .text(capitalizeFirst(this.text));

    drawnLabel.raise();
  }
}

function capitalizeFirst(string: string) {
  return string[0].toUpperCase() + string.slice(1, string.length).toLowerCase();
}
