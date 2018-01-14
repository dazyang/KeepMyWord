## Documenting progresses and babbles. 
*The loose and chitchat writing in this diary is intentional.The purpose of this dairy is to help me setting daily goals and to launch me into a creative flow. Any important issues/progress will be highlighted in a different style otherwise.*  

:::::::  
**Updated on 4 Jan 1135**  
My goal this afternoon is to wire up routes to let me add new books into the database. I was looking back some of the old exercises/projects we did in bootcamp, I shall use those to guide me through. This is going to be my main focus for the next couple of hours. (click arrow to see more updates)

> *Updated at 1732*  
Some progress made: I can now add 'empty data' into the database but not what I have typed in. I spent all afternoon trying to figure this one out, but can't get my head to see the gap. Harrison's catStack example helped a lot when I was blocked, but my app still not doing what it's suppose to do. I'm a little disheartened at the moment, because I should know how to figure this one out, but this is taking way longer than I expected... I have a slight idea where the problem might be at but my concentration is fading – I'm mentally exhausted... Going on a break now to clear my head. *1740*

> Server-side is receving null, and store is not being updated. Action is not acting properly. 

:::::::  
**Updated at 6 Jan 1332**   
Added issue https://github.com/dazyang/KeepMyWords/issues/7 and posted on Slack. — PROBLEM SOLVED!

> *Updated at 7 Jan 1542*  
Fixed the issue above, for the strangest reason, though. I decided to take another look on the code line by line this afternoon; I was suspecting the problem might be in the server-side code, because that's the part I'm still quite rusty at setting it up. So I watched [this tutorial](https://www.youtube.com/watch?v=aWLlh_Gn_oA&index=7&list=PL7sCSgsRZ-smPRSrim4bX5TQfRue1jKfw) on KnexJS, to get a better understanding of how data are being written into the database using Knex. I compared my understanding of the tutorial and my server-side code, which I'm pretty sure the running logic in mine is the same, even though the file settings are a bit different, so mine should totally work, too.   
```
In hindsight, when I console logged `req.body` and the server responded undefined, I was sure the problem must be 
on the client-side because no data was being carried through. 
```  
From there I shifted my focus to look at the client-side, following the logic and making sure my form is working. Specifically, I looked at my `postBookRequest` function that is being dispatched when user add a book. I was curious what data `newBook` is carrying through in the action, so I console logged to see, but I got nothing. Debugger stopped there and gave me an error message that I don't know how to decipher. I thought then I'll disable `e.preventDefault` in my `handleAddBook` function to see what happens, ran it, and then enabled it again — suddenly this fixed the problem. I can now add books to my database and not null values. Phew...   
```
What prompted me to disable/enable `e.preventDefault` was because when I tried to log `newBook` to see if user's data 
is actually coming through when the form is dispatched, the log disappeared immediately after it popped up, which 
was odd. It should've stay logged in console for me to exam the data content. (During that short glance, 
I saw the user data is carried through - not null) Plus, I was getting nothing logging `newBook` from bookActions, 
which means data evaporated somewhere in the action! This striked me to think something must be wrong there. 
Hence, I took a wild guess and it fixed it. 
```
Some glitch in the backend file is playing up and not letting me sending my form through properly. :confused: I wonder if the file was messed up a little bit while I was merging `whynot` to `addBook`, because I saw some code that had carried through from `whynot` that shoud've been resolved during mergin. That's a dark secret I'll never be able to find out now... *1606*  

:::::::  
**Updated on 14 Jan 1849**  
I haven't been able to work much in the last few days because I've been sick, some weird stomach bug I caught got me all weak and deflated. Just updating the diary to get into the flow of what my next small steps are for Keep My Words. Next up, I'm going to build up the wordlist page. This will be pretty much be the same steps done for booklist page: adding new words to the list. A big feature of this page, though, is the flipcard function which I have done in the demo version – using React Flipcard library – it's pretty neat. Also, when the flipcard is clicked, it'll make an external API call to WordsAPI, which returns the definition of the word. So, my next goals in summary:  
  - create wordlist page for each book
  - add new words to the database (matching book title <-- will need to join table?)
  - implementing flipcard function
  - implementing exteral API call  

These should be enough to keep me busy for now! 
