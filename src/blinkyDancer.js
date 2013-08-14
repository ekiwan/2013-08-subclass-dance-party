var makeBlinkyDancer = function(top, left, timeBetweenSteps) {
  Dancer.apply(this,arguments);
};

makeBlinkyDancer.prototype = Object.create(Dancer.prototype);
makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;

makeBlinkyDancer.prototype.step = function() {
  this.$node.toggle();
  Dancer.prototype.step.call(this);
};
