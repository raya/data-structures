describe("stack", function() {
  var stack;

  beforeEach(function() {
    stack = makeStack();
  });

  describe("The length function", function() {
    it("should have a length function", function() {
      expect(stack.length).toEqual(jasmine.any(Function));
    });

    it("should return 0 when stack is initialized", function() {
      expect(stack.length()).toBe(0);
    });

  });

  describe("Adding", function() {
    beforeEach(function() {
      stack.add("Item-1");
      stack.add("Item-2");
      stack.add("Item-3");
    });

    it("should have a method named 'add'", function() {
      expect(stack.add).toEqual(jasmine.any(Function));
    });

    it("should increase when a new item is added", function() {
      stack.add("Item-4");
      expect(stack.length()).toBe(4);
    });

    it("should have new items appear at top of the stack", function() {
      stack.add("Item-5");
      stack.add("Item-6");
      expect(stack.top()).toBe("Item-6");
    });

  });

  describe("Removing", function() {
    it("should have a remove function", function() {
      expect(stack.remove).toEqual(jasmine.any(Function));
    });

    it("should decrease when an item is removed", function() {
      stack.add("Item-1");
      stack.add("Item-2");
      stack.add("Item-3");
      stack.remove();
      expect(stack.length()).toBe(2);
    });

    it("should return the top element when removing", function() {
      stack.add("Item-1");
      stack.add("Item-2");
      stack.add("Item-3");
      expect(stack.remove()).toBe("Item-3");
      stack.add("Item-4");
      stack.add("Item-5");
      expect(stack.remove()).toBe("Item-5");
    });

  });
});