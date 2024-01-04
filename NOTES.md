# Part 1

* Use React Router.
* In terminal:

``
npm i react-router-dom
``

https://reactrouter.com/en/main

* To connect FRONT with Back is necessary to use fetch

It was common practice to store the jot in local storage.

But then of course, people found ways to get access to that token through JavaScript.

So people started putting it in a cookie instead.

But of course that's still vulnerable to certain kind of attacks at the moment.

At the time that I record this lecture, the only safe place to store a jot is as a variable in JavaScript,

and that's exactly what we're doing.

----

But the problem I have, and I'll open my terminal here is I still have this cookie right here that

cookies never getting deleted.