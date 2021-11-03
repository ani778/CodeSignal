function add(param1, param2) {
    if (param1 >= -1000 && param1 <= 1000 && param2 <= 1000 && param2 >= -1000) {
        console.log("Sum of two params");
        return param1 + param2;
    } else {
        console.log("Input valid params");
    }
}