
module.exports = class Calculator {
    static add(n1: number, n2: number): Number {
        return n1+n2;
    }

    static sub(n1: number, n2: number): Number {
        return n1-n2;
    }

    static multiply(n1: number, n2: number): Number {
        return n1*n2;
    }
    
    static divide(n1: number, n2: number): Number {
        if(n2 == 0) throw new Error('Attempt to divide by zero');
        return n1/n2;
    }
}