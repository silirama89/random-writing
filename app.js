// API key

const key = '94e8bd4e-6d31-42b8-b991-02fec8748bd0'


// buttons

const nounBtn = document.querySelector('#noun-btn')
const adjBtn = document.querySelector('#adj-btn')
const verbBtn = document.querySelector('#verb-btn')
const advBtn = document.querySelector('#adv-btn')
const clearBtn = document.querySelector('#clear-btn')

// lists
const nounList = document.querySelector('#noun-list')
const adjList = document.querySelector('#adj-list')
const verbList = document.querySelector('#verb-list')
const advList = document.querySelector('#adv-list')

// let functionalLabel = ${wordData.fl}

// clear button
clearBtn.addEventListener("click", function () {
  let nouns = document.getElementById('noun-list')
  while (nouns.firstChild) {
    nouns.removeChild(nouns.firstChild)
  }
  let adjs = document.getElementById('adj-list')
  while (adjs.firstChild) {
    adjs.removeChild(adjs.firstChild)
  }
  const verbs = document.getElementById('verb-list')
  while (verbs.firstChild) {
    verbs.removeChild(verbs.firstChild)
  }
  const advs = document.getElementById('adv-list')
  while (advs.firstChild) {
    advs.removeChild(advs.firstChild)
  }
  const txtTitle = document.getElementById('txt-title')
  txtTitle.value = ''
  const txtStory = document.getElementById('txt-story')
  txtStory.value = ''
})


// getting required parameter ("word") through random-word module

import randomWords from 'https://cdn.skypack.dev/random-words';
const word = randomWords()

// event listeners for generator buttons

nounBtn.addEventListener("click", async function () {
  let foundword = await fetchNoun(word)
  let forWord = foundword.split(':')[0]
  const newItem = document.createElement('li')
  nounList.appendChild(newItem)
  newItem.innerText = forWord
})
adjBtn.addEventListener("click", async function () {
  let foundword = await fetchAdj(word)
  let forWord = foundword.split(':')[0]
  const newItem = document.createElement('li')
  adjList.appendChild(newItem)
  newItem.innerText = forWord
})
verbBtn.addEventListener("click", async function () {
  let foundword = await fetchVerb(word)
  let forWord = foundword.split(':')[0]
  const newItem = document.createElement('li')
  verbList.appendChild(newItem)
  newItem.innerText = forWord
})
advBtn.addEventListener("click", async function () {
  let foundword = await fetchAdv(word)
  let forWord = foundword.split(':')[0]
  const newItem = document.createElement('li')
  advList.appendChild(newItem)
  newItem.innerText = forWord
})

// async functions

async function fetchNoun(word) {
  word = randomWords()
  try {
    let notFound = true;
    let foundWord
    while (notFound) {
      let res = await axios.get(`https://dictionaryapi.com/api/v3/references/collegiate/json/${word}?&key=94e8bd4e-6d31-42b8-b991-02fec8748bd0&sort`);
      let foundMatches = res.data;
      console.log(foundMatches)
      if (foundMatches[0].fl === 'noun') {
        const match = foundMatches[0]
        const meta = match.meta
        const id = meta.id
        console.log(id)
        foundWord = id
        notFound = false
      } else {
        word = randomWords()
      }
    } return foundWord
  } catch (error) {
    console.log(error);
  }
}

async function fetchAdj(word) {
  word = randomWords()
  try {
    let notFound = true;
    let foundWord
    while (notFound) {
      let res = await axios.get(`https://dictionaryapi.com/api/v3/references/collegiate/json/${word}?&key=94e8bd4e-6d31-42b8-b991-02fec8748bd0&sort`);
      let foundMatches = res.data;
      console.log(foundMatches)
      if (foundMatches[0].fl === 'adjective') {
        const match = foundMatches[0]
        const meta = match.meta
        const id = meta.id
        console.log(id)
        foundWord = id
        notFound = false
      } else {
        word = randomWords()
      }
    } return foundWord
  } catch (error) {
    console.log(error);
  }
}

async function fetchVerb(word) {
  word = randomWords()
  try {
    let notFound = true;
    let foundWord
    while (notFound) {
      let res = await axios.get(`https://dictionaryapi.com/api/v3/references/collegiate/json/${word}?&key=94e8bd4e-6d31-42b8-b991-02fec8748bd0&sort`);
      let foundMatches = res.data;
      console.log(foundMatches)
      if (foundMatches[0].fl === 'verb') {
        const match = foundMatches[0]
        const meta = match.meta
        const id = meta.id
        console.log(id)
        foundWord = id
        notFound = false
      } else {
        word = randomWords()
      }
    } return foundWord
  } catch (error) {
    console.log(error);
  }
}

async function fetchAdv(word) {
  word = randomWords()
  try {
    let notFound = true;
    let foundWord
    while (notFound) {
      let res = await axios.get(`https://dictionaryapi.com/api/v3/references/collegiate/json/${word}?&key=94e8bd4e-6d31-42b8-b991-02fec8748bd0&sort`);
      let foundMatches = res.data;
      console.log(foundMatches)
      if (foundMatches[0].fl === 'adverb') {
        const match = foundMatches[0]
        const meta = match.meta
        const id = meta.id
        console.log(id)
        foundWord = id
        notFound = false
      } else {
        word = randomWords()
      }
    } return foundWord
  } catch (error) {
    console.log(error);
  }
}