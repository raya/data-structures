// Note: don't use javascript's native array functions to do stack.
var makeStack = function(){
  
  var stack = {
    items: { }, 
    size: 0,
    add: function(item) {
      stack.items[stack.size] = item;
      stack.size = stack.size + 1;
    },
    remove: function() {
      var top_item = stack.items[stack.size-1];
      delete stack.items[stack.size-1];
      stack.size = stack.size - 1;
      return top_item;
    },
    length: function() {
      return stack.size;
    },
    top: function() {
      return stack.items[stack.size-1];
    }

  }
  return stack;
}