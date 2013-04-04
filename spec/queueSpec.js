describe("queue", function() {
  var queue;

  beforeEach(function() {
    queue = makeQueue();
  });

  describe("Available methods", function() {

    it("should have a method named 'add'", function() {
      expect(queue.add).toEqual(jasmine.any(Function));
    });

    it("should have a length method", function() {
      expect(queue.length).toEqual(jasmine.any(Function));
    });

    it("should have a remove method", function() {
      expect(queue.remove).toEqual(jasmine.any(Function));
    });
  });

  describe("Adding or removing items to queue", function() {
    
    beforeEach(function() {
      queue.add("First Item");
      queue.add("Second Item");
      queue.add("Third Item");
      queue.add("Fourth Item");
    });

    it("should have a first method to see the first item in the queue", function() {
      
      expect(queue.first()).toEqual("First Item");
    });

    it("should increase in size when items are added to the queue", function() {
      expect(queue.length()).toEqual(4);
    });

    it("should decrease in size when items are removed from the queue", function() {
      queue.remove();
      expect(queue.length()).toEqual(3);    
    })

    it("should only remove the first element when remove is called", function() {
      queue.remove();
      expect(queue.first()).toEqual("Second Item");
      queue.add("Fourth Item");
      expect(queue.first()).toEqual("Second Item");
    });
  });
});