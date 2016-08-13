class Rect {
  constructor(width, height, color) {
    this.width = width;
    this.height = height;
    this.color = color;
  }

  /**
   * coordinate duple to the top left corner
   */
  render(ctx, pos) {
    let [x, y] = pos;

    ctx.fillStyle = this.color;
    ctx.fillRect(x, y, this.width, this.height);
  }

  toString() {
    return `${this.width}x${this.height}`;
  }
}
