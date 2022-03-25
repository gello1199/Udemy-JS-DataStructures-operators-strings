'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

  const weekdays = ['mon', 'tues', 'wed', 'thurs', 'fri', 'sat', 'sun']

  const openingHours = {
    [weekdays[3]]: {
      open: 12,
      close: 22,
    },
    [weekdays[4]]: {
      open: 11,
      close: 23,
    },
    [weekdays[5]]: {
      open: 0, // Open 24 hours
      close: 24,
    },
  }

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  
  // before ES6
  // openingHours: openingHours,

  // Using ES6 enhanced object literals
  openingHours,

  // before ES6
  // order: function(starterIndex, mainIndex) {
  //   return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  //   },

  // using ES6 enhanced literals
    order(starterIndex, mainIndex) {
      return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
      },

    orderDelivery({starterIndex = 1, mainIndex = 0, time = '20:00', address}) {
      console.log(`Order Received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}.`)
    },

    orderPasta(ing1, ing2, ing3) {
      console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`);

    },

    orderPizza(mainIngredient, ...otherIngredients) {
      console.log(mainIngredient)
      console.log(otherIngredients)
    }
};

// Maps - Data structure that we can use to map values to keys

const rest = new Map()
rest.set('name', 'Classico Italiano')
rest.set(1, 'Firenze, Italy')
console.log(rest.set(2, 'Lisbon, Portugal'))

rest
.set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
.set('open', 11)
.set('close', 23)
.set(true, 'We are open')
.set(false, 'We are closed')

console.log(rest.get('name'))
console.log(rest.get(true))
console.log(rest.get(1))

const time = 21
console.log(rest.get(time > rest.get('open') && time < rest.get('close')))

console.log(rest.has('categories'))
rest.delete(2)
// console.log(rest.clear())
const arr = [1,2]
rest.set(arr, 'Test')
rest.set(document.querySelector('h1'), 'Heading')
console.log(rest)
console.log(rest.size)

console.log(rest.get(arr))


// Sets

// const ordersSet = new Set(['Pasta', 'Pizza', 'Pizza', 'Risotto', 'Pasta', 'Pizza'])

// console.log(ordersSet)
// console.log(new Set('Jonas'))

// console.log(ordersSet.size)
// console.log(ordersSet.has('Pizza'))
// console.log(ordersSet.has('Bread'))

// ordersSet.add('Garlic Bread')
// ordersSet.add('Garlic Bread')
// ordersSet.delete('Risotto')
// // ordersSet.clear()
// console.log(ordersSet)

// for(const order of ordersSet) console.log(order)

// // Example 
// const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']
// const staffUnique = [...new Set(staff)]
// console.log(staffUnique)
// console.log(new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size)

// console.log(new Set('jonasschmedtmann').size)

// Property Names
// const properties = Object.keys(openingHours)
// console.log(properties)

// let openStr = `We are open on ${properties.length} days: `

// for (const day of properties) {
//   openStr += `${day}, `
// }

// console.log(openStr)

// // Property Values
// const values = Object.values(openingHours)
// console.log(openingHours)

// // Entire Object
// const entries = Object.entries(openingHours)
// // console.log(entries)

// // could have named key, day. Can use any name for the variables below
// for(const [key, {open, close}] of entries) {
//   console.log(`On ${key} we open at ${open} and close at ${close}`)
// }

// if(restaurant.openingHours && restaurant.openingHours.mon)
// console.log(restaurant.openingHours.mon.open)

// console.log(restaurant.openingHours.mon.open)

// With Optional Chaining

// console.log(restaurant.openingHours.mon?.open)
// console.log(restaurant.openingHours?.mon?.open)

// Example

// const days = ['mon', 'tues', 'wed', 'thurs', 'fri', 'sat', 'sun']
// for(const day of days) {
//   // console.log(day)
//   const open = restaurant.openingHours[day]?.open ?? 'closed'
//   console.log(`On ${day}, we open at ${open}`)
// } 

// Methods 

// console.log(restaurant.order?.(0,1) ?? 'Method does not exist')
// console.log(restaurant.orderRisotto?.(0,1) ?? 'Method does not exist')

// Arrays

// const users = [
//   {name: 'Jonas', email: 'hello@jonas.io'}
// ]

// const users = []

// console.log(users[0]?.name ?? 'User array empty')


// Enhanced Object Literals



// For-of Loop

// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu]

// for (const item of menu)
// console.log(item)

// for (const [item] of menu.entries()) {
//   console.log(`${item[0] + 1}: ${item[1]}`)
// }

// can destructure above code

// for (const [i, el] of menu.entries()) {
//   console.log(`${i + 1}: ${el}`)
// }

// console.log([...menu.entries()])

// The Logical Assignemt Operators

// const rest1 = {
//   name: 'Capri',
//   // numGuests: 20,
//   numGuests: 0,
// }

// const rest2 = {
//   name: 'La Piazza',
//   owner: 'Giovanni Rossi',
// }

// OR assignment operator
// rest1.numGuests = rest1.numGuests || 10
// rest2.numGuests = rest2.numGuests || 10

// rest1.numGuests ||= 10
// rest2.numGuests ||= 10

// Nullish assignment operator (null or undefined)
// rest1.numGuests ??= 10
// rest2.numGuests ??= 10

// AND assignment operator
// rest1.owner = rest1.owner && '<ANONYMOUS>'
// rest2.owner = rest2.owner && '<ANONYMOUS>'

// rest1.owner &&= '<ANONYMOUS>'
// rest2.owner &&= '<ANONYMOUS>'

// console.log(rest1)
// console.log(rest2)

// The Nullish Coalescing Operator 

// restaurant.numGuests = 0
// const guests = restaurant.numGuests || 10
// console.log(guests)

// // Nullish: null and undefined (Not 0 or '')
// const guestsCorrect = restaurant.numGuests ?? 10
// console.log(guestsCorrect)

// Logical Operators

// console.log('---- OR ----')

// // Use any data type, return any data type, short-circuiting
// // short-circuiting - if first value is truthy, it will immediately return that first value
// console.log(3 || 'Jonas')
// console.log('' || 'Jonas')
// console.log(true || 0)
// console.log(undefined || null)

// console.log(undefined || 0 || "" || "hello" || 23 || null)

// restaurant.numGuests = 23
// const guests1 = restaurant.numGuests ? restaurant.numGuests : 10
// console.log(guests1)

// const guests2 = restaurant.numGuests || 10
// console.log(guests2)

// console.log('---- AND ----')

// console.log(0 && 'Jonas')
// console.log(7 && 'Jonas')

// console.log('Hello' && 23 && null && 'Jonas')

// // Practical example
// if (restaurant.orderPizza) {
//   restaurant.orderPizza('mushrooms', 'spinach')
// }

// restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach')

// 1) Destructuring

// Spread, because on Right side of = 
// const arr = [1, 2, ...[3, 4]]

// Rest, because on Left side of =
// const [a, b, ...others] = [1, 2, 3, 4, 5]
// console.log(a, b, others)

// const [pizza, ,risotto, ...otherFood] = [...restaurant.mainMenu, ...restaurant.starterMenu]
// console.log(pizza, risotto, otherFood)

// Objects
// const { sat, ...weekdays } = restaurant.openingHours
// console.log(weekdays)
 
// 2) Functions
// const add = function(...numbers) {
//   let sum = 0
//   for(let i = 0; i < numbers.length; i++) sum += numbers[i]
//   console.log(sum)
// }

// add(2, 3)
// add(5, 3, 7, 2)
// add(8, 2, 5, 3, 2, 1, 4)

// const x = [23, 5, 7]
// add(...x)

// restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach')
// restaurant.orderPizza('mushrooms')

// Spread Operator - used where we would otherwise write values separated by a comma.

// Rest Pattern - used where we would otherwise write variable names separated by commas.

// The Spread Operator

// const arr = [7, 8, 9];
// const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
// console.log(badNewArr)
// const goodNewarr = [1, 2, ...arr];
// console.log(goodNewarr);
// console.log(...goodNewarr)

// const newMenu = [...restaurant.mainMenu, "Gnocci"];
// console.log(newMenu);

// Copy array

// const mainMenuCopy = [...restaurant.mainMenu];

// Join two or more arrays together

// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(menu);

//Iterables are arrays, strings, maps, sets. Not objects

// const str = 'Jonas';
// const letters = [...str, ' ', 'S.'];
// console.log(letters);
// console.log(...str);

// Real World Example

// const ingredients = [
//   // prompt(`Let's make pasta! Ingredient 1?`), prompt(`Ingredient 2?`), prompt(`Ingredient 3?`)
// ];
// console.log(ingredients);

// restaurant.orderPasta(...ingredients);

//Objects

// const newRestaurant = {foundedIn: 1998, ...restaurant, founder: `Tony`};
// console.log(newRestaurant);

// const restaurantCopy = {...restaurant};
// restaurantCopy.name = `Ristorante Roma`;
// console.log(restaurantCopy.name);
// console.log(restaurant.name);


// restaurant.orderDelivery({
//   time: '22.30',
//   address: '2020 Main Street',
//   mainIndex: 2,
//   starterIndex: 2,
// })

// restaurant.orderDelivery({
//   address: '2020 Main Street',
//   starterIndex: 1,
// })

// const {name, openingHours, categories} = restaurant;
// console.log(name, openingHours, categories);

// const {name: restaurantName, openingHours: hours, categories: tags} = restaurant;
// console.log(restaurantName, hours, tags);

//default values
// const { menu = [], starterMenu: starters = []} = restaurant;
// console.log(menu, starters);

// mutating variables
// let a = 111;
// let b = 999;

// const obj = {a: 23, b: 7, c: 14};

// ({a, b} = obj);
// console.log(a, b);

//nested objects
// const { 
//   fri: {open: o, close: c},
// } = openingHours;
// console.log(o, c);

// Destructuring Arrays

// const arr = [2, 3, 4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// const [x, y, z] = arr;
// console.log(x, y, z);

// console.log(arr);

// let [main, , secondary] = restaurant.categories;

// console.log(main, secondary);

// switching variables
// [main, secondary] = [secondary, main] 
// console.log(main, secondary);

// Receive 2 return values from a function
// const [starter, mainCourse] = restaurant.order(2, 0);
// console.log(starter, mainCourse);

//Nested Destructuring
// const nested = [2, 4, [5, 6]];

// const [i, , j] = nested;
// console.log(i, j);
// const [i, , [j, k]] = nested;
// console.log(i, j, k);

// Default Values 

// const [p=1, q=1, r=1] = [8, 9];
// console.log(p, q, r);

// Coding Challenge #1

/* 
We're building a football betting app (soccer for my American friends 😅)!

Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:

1. Create one player array for each team (variables 'players1' and 'players2')
2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored

GOOD LUCK 😀
*/
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// // 1)
// const [players1, players2] = game.players
// console.log(players1, players2)
// // 2)
// const [gk, ...fieldPlayers] = players1
// console.log(gk, fieldPlayers)

// //3
// const allPlayers = [...players1, ...players2]
// console.log(allPlayers)

// //4
// const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic']
// console.log(players1Final)

// //5
// const {odds: {team1, x: draw, team2}} = game
// console.log(team1, draw, team2)

// //6 
// const printGoals = function(...players) {
//   console.log(`${players.length} goals were scored`)
//   console.log(...players)
// }

// printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich')
// printGoals('Davies', 'Muller')
// printGoals(...game.scored)

// //7

// team1 < team2 && console.log('Team 1 is more likely to win')

// Coding Challenge #2

/* 
Let's continue with our football betting app!

1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
      Odd of victory Bayern Munich: 1.33
      Odd of draw: 3.25
      Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉

BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }

GOOD LUCK 😀
*/

// // 1)
// for(const [i, player] of game.scored.entries()) 
// console.log(`Goal ${i + 1}: ${player} `)

// //2) 
// const odds = Object.values(game.odds)
// let average = 0;
// for (const odd of odds) average += odd
//   average /= odds.length
//   console.log(average)

// // 3
// for (const [team, odd] of Object.entries(game.odds)) {
//   const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`
//   console.log(`Odd of ${teamStr} ${odd}`) 
// }
