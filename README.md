# Emagi - Frontend

### About `process.argv`.

We no longer need `getInput`, because we understand arrays now. We're going to use `process.argv` instead, node's built-in array of for user arguments. Do some research on it if you wish, but the thing to keep in mind is that it's an array of strings, and each string is one of the space-separated words the user typed in. So, if they typed in `convert i love pizza`, then 'convert' would be at index 0, 'i' at index 1, and so on. Except there's a twist! Node also counts 'node' and 'main.js' as words, so the user's real arguments begin at index **2**. Check out slice for grabbing from a certain index on!


### Steps

* Create a `main.js` file. This will be the only place we'll have to work!
* We're going to need all three of our functions, for search, convert, and random. `require` each in from its respective file.
* Use `process.argv` to find the command they typed in. So if they typed in `node main.js search pizza`, 'search' is what you want.
* Now we just have to check WHICH command the user typed in.
  * If it was 'convert', we should make an array out of all the words the user typed in after that. That's exactly what `emagify` is expecting, an array of words. Before console.logging it back to our user, we may have to massage the output somewhat. Look into what `.join` can do for you to make the array of words into a string!
  * If it was 'search', we only need to look at one word after that, as `emagiSearch` is only expecting a single-word string. We will get an array back from `emagiSearch`. How can we print it?
  * If it was 'random', we only need to pass `symbols` to our `randomElement` function. It will give us back one string, which we can `console.log`.
  * If it was none of those, we should give the user a proper message telling them how they SHOULD be using our app.
