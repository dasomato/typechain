type Player<T> = {
  name:string,
  extraInfo: T
};

type NicoExtra = {
  favFood:string,
}

type NicoPlayer = Player<NicoExtra>;

const nico: NicoPlayer = {
  name: 'nico',
  extraInfo: {
    favFood: 'kimchi'
  }
};

type A<T> = Array<T>;

type PrintNumbers = {
  <T>(arr: A<T>) : T
};

type PrintNumbers2 = <T>(arr: A<T>) => T;

const printAllNumbers : PrintNumbers = (arr) => arr[0];