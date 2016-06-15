// a vector type

function Vector(x, y) {
  this.x = x;
  this.y = y;
}

Vector.prototype.plus = function (vector) {
  x = this.x + vector.x;
  y = this.y + vector.y;
  return new Vector(x,y);
};

Vector.prototype.minus = function (vector) {
  x = this.x - vector.x;
  y = this.y - vector.y;
  return new Vector(x,y);
};

Object.defineProperty(Vector.prototype, "length", {
  get: function() {
    return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
  }
});

console.log(new Vector(1, 2).plus(new Vector(2, 3)));
// → Vector{x: 3, y: 5}
console.log(new Vector(1, 2).minus(new Vector(2, 3)));
// → Vector{x: -1, y: -1}
console.log(new Vector(3, 4).length);
// → 5

// another cell
// didn't feel like including all the book code defining TextCell etc.
// this won't run on its own but it will run in the sandbox

function StretchCell(inner, width, height) {
  this.inner = inner;
  this.minWidth = function () {
    return Math.max(this.inner.minWidth(), width);
  }
  this.minHeight = function () {
    return Math.max(this.inner.minHeight(), height);
  }
  this.draw = function(width, height) {
    return this.inner.draw(width, height);
  }
}
