// Note: don't use javascript's native array functions to do this.
var makeQueue = function(){
  var queue = {
    queue_items: {},
    size: 0,                  //current size of queue
    orig_size: 0,             //original size if nothing is ever deleted
    first_item: 0,            //position of first item in queue
    add: function(item) {
      this.queue_items[this.orig_size] = item;
      this.size = this.size + 1;
      this.orig_size += 1;
    },
    remove: function() {
      delete this.queue_items[this.first_item];
      this.size = this.size - 1;
      this.first_item += 1; //move head up a number

    },
    length: function() {
      return this.size;
    },
    first: function() {
      return this.queue_items[this.first_item];     
    }
  };

  return queue;
}