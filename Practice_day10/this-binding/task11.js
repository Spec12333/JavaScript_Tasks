const obj = {
    value: 100,
    get() {
        let inner = () =>  {
            return this.value;
        }    
        return inner();
    }
};

console.log(obj.get());