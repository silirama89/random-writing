const key = '94e8bd4e-6d31-42b8-b991-02fec8748bd0'


const nounBtn = document.querySelector('#noun-btn')
const adjBtn = document.querySelector('#adj-btn')
const verbBtn = document.querySelector('#verb-btn')
const advBtn = document.querySelector('#adv-btn')
const genBtn = [nounBtn, adjBtn, verbBtn, advBtn]

const nounList = document.querySelector('#noun-list')
const adjList = document.querySelector('#adj-list')
const verbList = document.querySelector('#verb-list')
const advList = document.querySelector('#adv-list')
const genList = [nounList, adjList, verbList, advList]

// let functionalLabel = ${wordData.fl}

//required parameter: random "word"
import randomWords from 'https://cdn.skypack.dev/random-words';

const word = randomWords();

console.log(word)
genBtn.forEach(element => {
  element.addEventListener('click', function () {
    const functionalLabel = `${element}.innerText`
    fetchWord(word())
  })
};

nounBtn.addEventListener('click', fetchWord(word))
adjBtn.addEventListener('click', fetchWord(word))
verbBtn.addEventListener('click', fetchWord(word))
advBtn.addEventListener('click', fetchWord(word))

// if (adjBtn.addEventListener('click', fetchWord(word))
// verbBtn.addEventListener('click', fetchWord(word))
advBtn.addEventListener('click', displayWord())

function displayWord() {
  fetchWord(word())
  const newItem = document.createElement('li')
  newItem.innerText = `${word}.value`
  document.getElementById(genList[i].value)

}

// async fx
// async function fetchWord(word) {
//   try {
//     let notFound = true;
//     while (notFound) {
//       let res = await axios.get(`https://dictionaryapi.com/api/v3/references/collegiate/json/${word}?&key=94e8bd4e-6d31-42b8-b991-02fec8748bd0&sort`);
//       let wordData = res.data;
//       let foundMatches = wordData.filter(def => {
//         if (def.fl === `'adverb') {
//           return def
//         }
//       })
//       console.log(foundMatches[0])
//       if (typeof foundMatches[0] != 'undefined') {
//         notFound = false
//       } else {
//         word = randomWords()
//       }
//     }
//   } catch (error) {
//     console.log(error);
//     displayError(error)
//   } finally {
//     console.log("DONE");
//   }
// }


// fetchWord(randWord.value)

