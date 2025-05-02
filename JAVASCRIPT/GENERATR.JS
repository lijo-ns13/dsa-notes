function* fibonacci(){
    let [prev,cur]=[0,1];
    while(true){
        yield cur;
        [prev,cur]=[cur,prev+cur];
    }
}

const fib=fibonacci();
console.log(fib.next().value);
console.log(fib.next().value);
console.log(fib.next().value)

// 1. What is a factory function, and how is it different from a constructor function?
// Factory Function:

// A factory function is a function that returns an object. It is a design pattern used to create and return objects without using the new keyword.

// It encapsulates the object creation logic and can return different types of objects based on input parameters.

// Constructor Function:

// A constructor function is used with the new keyword to create objects. It typically uses the this keyword to assign properties and methods to the newly created object.

// Constructor functions are often used with the class syntax in modern JavaScript.




// Factory Functions:
// What is a factory function, and how is it different from a constructor function?

// How can you create private variables in a factory function?

// Write a factory function to create a car object with properties like make, model, and year.

// Generator Functions:
// What is a generator function, and how does it work?

// How is yield different from return?

// Write a generator function to generate an infinite sequence of even numbers.

// How can generator functions be used to handle asynchronous operations?