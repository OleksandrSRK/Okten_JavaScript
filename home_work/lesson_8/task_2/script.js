function jsonClone(obj){
    if (obj){
        let functions = [];

        for (const key in obj){
            if (typeof obj[key] === `function`){
                const functionClone = obj[key].bind({});
                functions.push({functionClone, key});
            }
        }

        const objClone = JSON.parse(JSON.stringify(obj));

        for (const func of functions){
            objClone[func.key] = func.functionClone;
        }
        return objClone;
    }
    throw new Error(`!!!ERROR!!!`);
}

let user = {
    name: 'Ivan',
    age: 33,
    hello(){
        console.log(`Привіт`);
    }
}


console.log(user);
console.log(jsonClone(user));

