# 🧩 Linked List Assignment (The Odin Project)

This project implements a **Linked List** data structure in **JavaScript** — following the [Odin Project](https://www.theodinproject.com) curriculum for practicing classes, recursion, and data manipulation.

You’ll build your own linked list with `Node` and `LinkedList` classes, and implement common operations such as append, prepend, pop, insert, remove, and search.

## 🔗 LinkedList Class

This class represents the entire linked list and provides various methods to manipulate nodes.

### Core Methods
| Method              | Description                                                                  |
| ------------------- | ---------------------------------------------------------------------------- |
| **append(value)**   | Adds a new node containing `value` to the end of the list                    |
| **prepend(value)**  | Adds a new node containing `value` to the start of the list                  |
| **size()**          | Returns the total number of nodes in the list                                |
| **head()**          | Returns the **first node** in the list                                       |
| **tail()**          | Returns the **last node** in the list                                        |
| **at(index)**       | Returns the **node at the given index**                                      |
| **pop()**           | Removes the last element from the list                                       |
| **contains(value)** | Returns `true` if `value` exists in the list, `false` otherwise              |
| **find(value)**     | Returns the **index** of the node containing `value`, or `null` if not found |
| **toString()**      | Prints the list in the format `( value ) -> ( value ) -> null`               |


### Extra Credit Methods
| Method                     | Description                                                        |
| -------------------------- | ------------------------------------------------------------------ |
| **insertAt(value, index)** | Inserts a new node with the given `value` at the specified `index` |
| **removeAt(index)**        | Removes the node at the specified `index`                          |

## 🧠 Key Concepts Practiced
- Class creation and modular export/import
- Working with linked data structures
- Managing node references and memory links
- Traversing and manipulating lists
- Handling edge cases (empty list, invalid index)
- Applying Odin Project data structure fundamentals

## 🪄 Developer Notes

Built by a mid-level developer learning from The Odin Project — practicing fundamental data structures through hands-on JavaScript implementation.
Happy coding! 👩🏻‍💻✨