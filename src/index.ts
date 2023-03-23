class Block {
  constructor(
    private data:string,
  ) {}
  hello(): string {
    return this.data;
  }
}

const block = new Block("abc");
console.log(block.hello());