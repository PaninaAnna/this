import readlineSync from 'readline-sync';

const calculator = {
  a: 0,
  b: 0,
  
  read() {
    this.a = parseFloat(readlineSync.question('Введите первое число: '));
    this.b = parseFloat(readlineSync.question('Введите второе число: '));
  },
  
  sum() {
    return this.a + this.b;
  },
  
  mul() {
    return this.a * this.b;
  }
};

export default calculator;