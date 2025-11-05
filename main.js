import { LinkedList } from "./LinkedList.js";

const list = new LinkedList();

// Populate the list
list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");

// Display the list
console.log(list.toString());
// Expected: ( dog ) -> ( cat ) -> ( parrot ) -> ( hamster ) -> ( snake ) -> ( turtle ) -> null

// Example tests
console.log("Size:", list.size()); // 6
console.log("Head:", list.head().value); // dog
console.log("Tail:", list.tail().value); // turtle
console.log("At index 2:", list.at(2).value); // parrot
console.log("Contains 'snake':", list.contains("snake")); // true
console.log("Find 'hamster':", list.find("hamster")); // 3

// Test insertAt and removeAt
list.insertAt("rabbit", 2);
console.log("After insertAt:", list.toString());

list.removeAt(4);
console.log("After removeAt:", list.toString());

list.pop();
console.log("After pop:", list.toString());