# 🚀 Execute Async Functions in Parallel – JavaScript Interview Problem

## 🧠 Problem Statement

Implement a function in JavaScript that takes a list of async functions as input and a callback, executes all tasks in **parallel**, and invokes the callback **after every task is executed**.

---

## 💡 Example

```js
executeParallel([asyncTask(3), asyncTask(1), asyncTask(2)], (result) => {
  console.log(result);
});
```

**Output** (in order of completion):

```js
[2, 1, 3];
```

---

## 🧩 Solution Approach

```js
function asyncParallel(tasks, callback) {
  const results = [];
  let tasksCompleted = 0;

  tasks.forEach((asyncTask) => {
    asyncTask((value) => {
      results.push(value);
      tasksCompleted++;

      if (tasksCompleted >= tasks.length) {
        callback(results);
      }
    });
  });
}
```

---

## 🔨 Create Async Tasks

```js
function createAsyncTask() {
  const value = Math.floor(Math.random() * 10);

  return function (callback) {
    setTimeout(() => callback(value), value * 1000);
  };
}
```

---
