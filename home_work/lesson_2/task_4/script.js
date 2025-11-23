let users_array = [
    {name: "John", username: "John1243", password: "JohnPassword65"},
    {name: "Alice", username: "Alice345", password: "AlicePassword56"},
    {name: "Bob", username: "Bob3643", password: "BobPassword54"},
    {name: "Maria", username: "Maria346", password: "MariaPassword45"},
    {name: "Dmytro", username: "Dmytro436456", password: "DmytroPassword43"},
    {name: "Olivia", username: "Olivia3456", password: "OliviaPassword34"},
    {name: "Alex", username: "Alex35654", password: "AlexPassword32"},
    {name: "Svetlana", username: "Svetlana456", password: "SvetlanaPassword23"},
    {name: "Mark", username: "Mark546", password: "MarkPassword21"},
    {name: "Nina", username: "Nina56765", password: "NinaPassword12"}
];


console.log(users_array[0].password);
console.log(users_array[1].password);
console.log(users_array[2].password);
console.log(users_array[3].password);
console.log(users_array[4].password);
console.log(users_array[5]["password"]);
console.log(users_array[6]["password"]);
console.log(users_array[7]["password"]);
console.log(users_array[8]["password"]);
console.log(users_array[9]["password"]);