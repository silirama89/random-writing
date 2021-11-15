
# [Random Writing](https://silirama89.github.io/random-writing/)


## App Description

_Random Writing_ **generates words** belonging to the four most important word categories (nouns, adjectives, verbs and adverbs) that serve as **prompt to practice creative writing**.


## API

+ **Name**: Merriam-Webster Dictionary. 
+ **URL**: <https://dictionaryapi.com/>
+ **Information to access**: 
++ meta.id: word to search
++ fl: category of the word


## API Snippet

```javascript
"meta": 
  { "id":"voluminous",},
"fl":"adjective",
"def":
  [  
    {
      "sseq":
        [  
          [ 
            [
              "sense",
                {
                  "sn":"1 a",
                  "dt": 
                    [
                      [ 
                        "text", 
                        "{bc}having or marked by great {a_link|volume} or bulk {bc}{sx|large||} "
                      ],
                      [
                        "vis",
                         [
                            {"t":"long {wi}voluminous{\/wi} tresses"}
                         ]
                      ]
                    ],
                  "sdsense":
                    {
                      "sd":"also",
                      "dt":
                        [
                          [
                            "text","{bc}{sx|full||}"
                          ],
                          [
                            "vis",
                              [  
                                { "t":"a {wi}voluminous{\/wi} skirt"}
                              ]
                          ]
                        ]
                    }
                }
            ]
          ]
        ]
    }
  ]
```

## Wireframes

* #### Desktop View

![alt text](images/1-Homepage-Computer-2x.png "Desktop View")

* #### Smartphone View

![alt text](/images/2-Homepage-Smartphones-2x.png "Mobile View")


## Minimum Viable Product (MVP)

+ Clicking on a button from the word generator section will create a random word, request a response from the Merriam-Webster API that matches the button's category by calling an async function, and add the word to a list for said category. 
+ Two text boxes, for the title and body of the story respectively, allow the user to write a story using the generated words as prompts.
+ Clicking the 'clear' button will empty the lists and reset the content of the text boxes. 


## Post-MVP

+ Every word's first definition can be displayed in a comment bubble after hovering over it. 
+ Local storage for stories created.
+ Ability to format the text.
+ A 'share' button.
+ A word counter.
+ Words will be checked (or highlighted) as they are included in the text.


## Goals

| **Date**  | **Goals** |
| :-------: | --------- | 
| 11/8  | Create HTML *boilerplate*, set JS *async* and finalize *wireframes* design |
| 11/9  | Create other *HTML elements* (buttons, input, lists and images) and create CSS *stylesheet*. |
| 11/10 | Create *pseudocode*, start creating other JS *functions*, and define CSS *parameters for different media*. |
| 11/11 | Fine-tune JS *functions* and CSS *stylesheet*. |
| 11/12 | *Test* and *debug* MVP features|
| 11/13 | *Post-MVP* features. | 


## Priority Matrix

![alt text](images/random-writing-matrix.png "Priority Matrix")


## Timeframes

| **Task**  | **Estimated duration** | **Actual duration**| 
| --------- | -------: | ------:|
| Choose colorscheme and fonts | 3.0 hrs | 2.0 hrs |
| Create HTML *boilerplate* | 1.0 hrs | 1.0 hrs |
| Set JS *async* function | 1.5 hrs | 4.5 hrs |
| Create other *HTML elements* | 3.0 hrs | 2.0 hrs |
| Create CSS *stylesheet* | 3.0 hrs | 3.5 hrs |
| Create *pseudocode* | 3.0 hrs | 2.0 hrs |
| Create algorithm and JS *functions* | 3.0 hrs | 3.0 hrs|
| Set CSS *different media* | 3.0 hrs | 3.5 hrs |
| Simplify JS *functions* syntax | 3.0 hrs | 3.5 hrs |
| Finalize CSS *stylesheet* | 3.0 hrs | 4.0 hrs |
| *Test* and *debug* | 3.0 hrs | 3.5 hrs |
| Create *functions* for *post-MVP* features| 3.0 hrs | N/A |
| Create CSS *stylesheet* parameters for *post-MVP* features | 3.0 hrs | N/A |
| Project Total Hours  | 35.5 hrs | 32.5 hrs |