function sides(literals, expressions){
    let newArr = [];
    let area = expressions[0];
    let perimeter = expressions[1];
    let s1 = (perimeter + Math.sqrt(perimeter * perimeter - 16 * area)) / 4;
    let s2 = (perimeter - Math.sqrt(perimeter * perimeter - 16 * area)) / 4;
    newArr.push(s1);
    newArr.push(s2);

    return newArr.sort()
}

const result = sides("2", [140, 48]);
console.log("result: ", result);