interface SStorage<T> {
  [key:string]: T,
}
class LocalStorage<T> {
  private storage: SStorage<T> = {};
  set(key:string, value: T) {
    this.storage[key] = value;
  }
  remove(key:string) {
    delete this.storage[key];
  }
  get(key:string): T {
    return this.storage[key];
  }
  clear() {
    this.storage = {};
  }
}

const stringStorage = new LocalStorage<string>();
stringStorage.set("korea", "kimchi");
stringStorage.set("italy", "pizza");
console.log(stringStorage.get("korea"));
console.log(stringStorage.get("italy"));
stringStorage.remove("italy");
console.log(stringStorage.get("italy"));
stringStorage.clear();
console.log(stringStorage.get("korea"));