var makeFatDancer = function (top, left, timeBetweenSteps) {
  Dancer.apply(this, arguments);
};

makeFatDancer.prototype = Object.create(Dancer.prototype);
makeFatDancer.prototype.constructor = makeFatDancer;

makeFatDancer.prototype.step = function() {
  this.$node.toggle();
  Dancer.prototype.step.call(this);
};