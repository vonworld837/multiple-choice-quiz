# Interactive multiple-choice questionnaire
> Created with HTML, CSS and Javascript

This is an interactive multiple-choice questionnaire in which questions are randomly generated for each attempt, drawn from the question bank for Type B and F driver’s licenses in Ecuador.

This questionnaire can contain different categories, within which the user can create their own questions with three response options in a Javascript file. In this case, this quiz has the category “Generales” and “Category” since the other categories are not shown due to confidentiality reasons.

## How to use it?
Download all the files and open index.html in a browser

## Specifications
### index.html
Menu of the questionnaire, where the user can choose the category.
### general.html
Multiple-choice quiz based on a question bank. The user can choose between two formats: reviewing all the questions or taking a test that simulates the real exam, in which 20 questions are randomly selected to be answered.

Once the user selects an option, the correct answer to the question is immediately revealed. Upon completing all the questions, the score obtained is displayed: the number of questions answered correctly out of the total number of questions. In the case of the practice exam, if the user answers 16 or more questions correctly, a message appears indicating that they have passed the exam; otherwise, they have failed.
### template.html
general.html template to help the user visualize the code better.
### style.css
All the styles features applied to the questionnaire 
### general.js
The code generated for the questionnaire. For the question bank, an array of objects is created that contains the question and three answer options with the correct one indicated.

Next, functions were created to start the questionnaire, display and randomize the questions, select and verify the answer, keep track of the score and to reset the quiz once it is finished. 
### template.js
general.js template containing 5 questions designed to help the user understand the code’s structure and logic. This version does not present the two options of format of the questionnaire for the user to choose from.
## Improvements compared to the first version
- The order of the questions was randomized (modified is the js file).

- The user can choose to review all the questions or only a specific number of them (modified in the html and js file).
## Improvements to be made
- To include short-answer questions and images in the question bank

- To randomize the order of the answer options

- Keep track of the questions answered incorrectly, so that, on the next attempt, only those questions are answered until all of them have been answered correctly. 
