# Lecture for week 2 of JavaScript Module 3

## Today's lecture
*Start recording the screen with audio!*
* Homework
* Async vs Sync and the Event loop ♻️
* Promises 💍
* Cooking some pasta! 🔥🍝🔥

## Homework
* How did last week's homework go?
* Some notes from your reviewers 👨‍🏫
* Who read the material for today?

## Async vs Sync and the Event Loop ♻️
* What does blocking mean?
* When do events from the event loop get pushed to the call stack?
    - Write down your answer
    - Compare with a neighbour
    - Present your findings to the class
* When should you use synchronous code?
* When shouldn't you?
* What should be careful with when running async code?

## Promises 💍
* [Turning callbacks into Promises](https://codepen.io/Razpudding/pen/vrgKmR)
* In class assignment

## In class pasta assignment 🔥🍝🔥
Let's say we want a programme to cook some pasta. Some of the steps involved in cooking pasta are:
1. Gathering the ingredients (pasta, garlic, tomatoes, sage, butter)
2. Cutting the garlic
3. Cutting the tomatoes
4. Cutting the sage
4. Cooking the water
5. Cooking the pasta
6. Baking the garlic
6. Baking the tomatoes
7. Straining the pasta
8. Melting the butter
6. Mixing the pasta with sauce
X. Etc.

If we do this synchronolously there is no chance of it becoming a good meal because some of the food will be cold by the time other parts are ready. It would also take way too long this way. So let's fix that!
1. Think about how to do this asynchronously; which tasks could be run concurrently? What steps should wait for what other steps?
2. Write down in pseudocode (in markdown) which tasks are dependent on which other tasks
3. Write the actual code using promises. Add timeouts to each task (estimate how many minutes a task would take and then set the timeout to that many seconds)
4. think about where you could use Promise.all

## Conclusion
* Recap of today
* Homework for next week

*Don't forget to [sync your fork](https://gist.github.com/remarcmij/63c6bd072a6682dd716af4c14aaa3227) of the homework repo*