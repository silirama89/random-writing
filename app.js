// API key

const key = '94e8bd4e-6d31-42b8-b991-02fec8748bd0'

// button variables

const nounBtn = document.querySelector('#noun-btn')
const adjBtn = document.querySelector('#adj-btn')
const verbBtn = document.querySelector('#verb-btn')
const advBtn = document.querySelector('#adv-btn')
const genBtn = [nounBtn, adjBtn, verbBtn, advBtn]

// lists variables

const nounList = document.querySelector('#noun-list')
const adjList = document.querySelector('#adj-list')
const verbList = document.querySelector('#verb-list')
const advList = document.querySelector('#adv-list')
const genList = [nounList, adjList, verbList, advList]

// event listeners
// nounBtn.addEventListener('click', fetchNoun(word))
// adjBtn.addEventListener('click', fetchAdj(word))
// verbBtn.addEventListener('click', fetchVerb(word))
// advBtn.addEventListener('click', fetchAdv(word))


// let functionalLabel = ${wordData.fl}

// getting required parameter ("word") through random-word module

import randomWords from 'https://cdn.skypack.dev/random-words';


// event listeners for generator buttons

nounBtn.addEventListener("click", function () {
  const word = randomWords()
  fetchNoun(word)
  const newItem = document.createElement('li')
  newItem.innerText = `${word}`
  nounList.appendChild(newItem)
})
adjBtn.addEventListener("click", function () {
  const word = randomWords()
  fetchAdj(word)
  const newItem = document.createElement('li')
  newItem.innerText = `${word}`
  adjList.appendChild(newItem)
})
verbBtn.addEventListener("click", function () {
  const word = randomWords()
  fetchVerb(word)
  const newItem = document.createElement('li')
  newItem.innerText = `${word}`
  verbList.appendChild(newItem)
})
advBtn.addEventListener("click", function () {
  const word = randomWords()
  fetchAdv(word)
  const newItem = document.createElement('li')
  newItem.innerText = `${word}`
  advList.appendChild(newItem)
})

// async fx noun

// function displayWord() {

async function fetchNoun(word) {
  try {
    let notFound = true;
    while (notFound) {
      let res = await axios.get(`https://dictionaryapi.com/api/v3/references/collegiate/json/${word}?&key=94e8bd4e-6d31-42b8-b991-02fec8748bd0&sort`);
      let foundMatches = res.data;
      console.log(foundMatches)
      let exactMatch = foundMatches.filter(object => object.indexOf === 0 & object.fl === 'noun')
      if (typeof exactMatch != 'undefined') {
        notFound = false
      } else {
        word = randomWords()
      }
    }
  } catch (error) {
    console.log(error);
  } finally {
    console.log(word)
  }
}

async function fetchAdj(word) {
  try {
    let notFound = true;
    while (notFound) {
      let res = await axios.get(`https://dictionaryapi.com/api/v3/references/collegiate/json/${word}?&key=94e8bd4e-6d31-42b8-b991-02fec8748bd0&sort`);
      let foundMatches = res.data;
      console.log(foundMatches)
      let exactMatch = foundMatches.filter(object => object.indexOf === 0 & object.fl === 'adjective')
      if (typeof exactMatch != 'undefined') {
        notFound = false
      } else {
        word = randomWords()
      }
    }
  } catch (error) {
    console.log(error);
  } finally {
    console.log(word)
  }
}

async function fetchVerb(word) {
  try {
    let notFound = true;
    while (notFound) {
      let res = await axios.get(`https://dictionaryapi.com/api/v3/references/collegiate/json/${word}?&key=94e8bd4e-6d31-42b8-b991-02fec8748bd0&sort`);
      let foundMatches = res.data;
      console.log(foundMatches)
      let exactMatch = foundMatches.filter(object => object.indexOf === 0 & object.fl === 'verb')
      if (typeof exactMatch != 'undefined') {
        notFound = false
      } else {
        word = randomWords()
      }
    }
  } catch (error) {
    console.log(error);
  } finally {
    console.log(word)
  }
}
async function fetchAdv(word) {
  try {
    let notFound = true;
    while (notFound) {
      let res = await axios.get(`https://dictionaryapi.com/api/v3/references/collegiate/json/${word}?&key=94e8bd4e-6d31-42b8-b991-02fec8748bd0&sort`);
      let foundMatches = res.data;
      console.log(foundMatches)
      let exactMatch = foundMatches.filter((element, 0) => element.fl === 'adverb')
      if (typeof exactMatch != 'undefined') {
        notFound = false
      } else {
        word = randomWords()
      }
    }
  } catch (error) {
    console.log(error);
  } finally {
    console.log(word)
  }
}