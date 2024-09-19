// interface TransactionOBj {
//   Pizza: number,
//   Books: number,
//   Job: number
// }

interface TransactionObj {
  [index: string]: number
}

const todaysTransactions = {
  Pizza: -10,
  Books: -5,
  Job: 50
}

console.log(todaysTransactions.Pizza)
console.log(todaysTransactions['Pizza'])

let prop: string = 'Pizza'
console.log(todaysTransactions[prop])

const todaysNet = (transactions: TransactionObj):
number => {
  let total = 0
  for (const transaction in transactions){
    total += transactions[transaction]
  }
  return total
}