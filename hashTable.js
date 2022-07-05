//HASH TABLE PRACTICE
class HashTable {
    // amount of shelves in memory
    constructor(size) {
      this.data = new Array(size);
    }
    // function to create a small hash table
    _hash(key) {
      let hash = 0;
      for (let i = 0; i < key.length; i++) {
        // charCodeAt gives an integer between 0 to 65535 representing the UTF-16 code
        hash = (hash + key.charCodeAt(i) * i) % this.data.length;
      }
      return hash;
    }
    set(key, value) {
      let address = this._hash(key);
      if (!this.data[address]) {
        this.data[address] = [];
        this.data[address].push([key, value]);
      }
      this.data[address].push([key, value]);
      return this.data;
    }
    get(key) {
      let address = this._hash(key);
      let currentBucket = this.data[address];
      if (currentBucket) {
        for (let i = 0; i < currentBucket.length; i++) {
          if (currentBucket[i][0] === key) {
            return currentBucket[i][1];
          }
        }
        return undefined;
      }
    }
    keys() {
      const keysArray = [];
      for (let i = 0; i < this.data.length; i++) {
        if (this.data[i]) {
          keysArray.push(this.data[i][0][0]);
        }
      }
      return keysArray;
    }
  }
  
  const table = new HashTable(50);
  table.set("grapes", 10000);
  table.set("apples", 54);
  table.set("oranges", 2);
  table.get("grapes");
  console.log(table.keys());