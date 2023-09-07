const calculator = {
     a : null,
     b : null,
    read(){
        return (
            this.a = +prompt("Enter First Integer Number", ""),

            this.b = +prompt("Enter Second Integer Number", "")
        );
    },
    sum(){
        return this.a + this.b;
    },
    mul(){
        return this.a * this.b;
    }
}; 
calculator.read();
alert(calculator.sum());
alert(calculator.mul());