// function decides which vegetable is best based on judging characteristic
// function receives a list of veggies as an array of objects and a characteristic to judge the veggies by (redness/plumpness for tomates)
// return name of person who submitted the vegetable with highest ranking

const judgeVegetable = function (vegetables, metric) {
  // Your code in here ...
  let highestSubmitter
  let highestMetric = 0
  for (let i = 0; i < vegetables.length; i++) {
    if (vegetables[i][metric] > highestMetric) {
      highestMetric = vegetables[i][metric]
      highestSubmitter = vegetables[i]['submitter']
    }
  }
  return highestSubmitter
}

const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
]

const metric = 'redness'

console.log(judgeVegetable(vegetables, metric));