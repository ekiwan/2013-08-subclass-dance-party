var makeSquareDancer = function (top, left, timeBetweenSteps) {
  Dancer.apply(this, arguments);
};

makeSquareDancer.prototype = Object.create(Dancer.prototype);
makeSquareDancer.prototype.constructor = makeSquareDancer;

makeSquareDancer.prototype.step = function() {
  this.$node.toggle();
  Dancer.prototype.step.call(this);
};