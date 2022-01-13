const logger = (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
    const value = descriptor.value;
    descriptor.value = function(...args: any[]){
        console.log(`Object ${args[0].name} created!`);
        return value.apply(this, args);
    }
}

export class Factory {
    @logger
    create<T>(type: { new (...args: any[]): T }, ...args: any[]): T {
        return new type(...args);
    }
}
