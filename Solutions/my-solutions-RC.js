//identity(x) ⇒ any
//Write a function identity that takes an argument and returns that argument

identity = (x) => {
    return x;
};

//addb(a, b) ⇒ number
//Write a binary function addb that takes two numbers and returns their sum

addb = (a, b) => {
    return a+b;
};

//subb(a, b) ⇒ number
//Write a binary function subb that takes two numbers and returns their difference

subb  = (a, b) => {
    return a-b;
};

//mulb(a, b) ⇒ number
//Write a binary function mulb that takes two numbers and returns their product

mulb = (a, b) => {
    return a*b;
};

//minb(a, b) ⇒ number
//Write a binary function minb that takes two numbers and returns the smaller one

minb = (a, b) => {
    return (a > b) ? b : a;
};

//maxb(a, b) ⇒ number
//Write a binary function maxb that takes two numbers and returns the larger one

maxb = (a, b) => {
    return (a >b) ? a : b;
};

// add(...nums) ⇒ number
//Write a function add that is generalized for any amount of arguments

add = (...nums) => {
    return nums.reduce((a, b) => a + b)
};

// sub(...nums) ⇒ number
//Write a function sub that is generalized for any amount of arguments

sub = (...nums) => {
    return nums.reduce((a, b) => a-b)
};

// mul(...nums) ⇒ number
//Write a function mul that is generalized for any amount of arguments

mul = (...nums) => {
    return nums.reduce((a, b) => a*b)
};

// min(...nums) ⇒ number
//Write a function min that is generalized for any amount of arguments

// max(...nums) ⇒ number
//Write a function max that is generalized for any amount of arguments

// addRecurse(...nums) ⇒ number
//Write a function addRecurse that is the generalized add function but uses recursion

// mulRecurse(...nums) ⇒ number
//Write a function mulRecurse that is the generalized mul function but uses recursion

// minRecurse(...nums) ⇒ number
//Write a function minRecurse that is the generalized min function but uses recursion

// maxRecurse(...nums) ⇒ number
//Write a function maxRecurse that is the generalized max function but uses recursion


