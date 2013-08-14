describe("fatDancer", function() {

  var fatDancer;
  var timeBetweenSteps = 100;
  var clock;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    fatDancer = new makeFatDancer(10, 20, timeBetweenSteps);
  });

  it("should have a jQuery $node object", function(){
    expect(fatDancer.$node).to.be.an.instanceof(jQuery);
  });

  it("should have a step function that makes its node blink", function() {
    sinon.spy(fatDancer.$node, 'toggle');
    fatDancer.step();
    expect(fatDancer.$node.toggle.called).to.be.true;
  });

  describe("dance", function(){
    it("should call step at least once per second", function(){
      sinon.spy(fatDancer, "step");
      expect(fatDancer.step.callCount).to.be.equal(0)
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(fatDancer.step.callCount).to.be.equal(2);

      clock.tick(timeBetweenSteps);
      expect(fatDancer.step.callCount).to.be.equal(3);
    });
  });
});
