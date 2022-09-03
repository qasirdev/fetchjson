https://stackoverflow.com/questions/65173291/git-push-error-src-refspec-main-does-not-match-any-on-linux

I have stuck in a similar issue a few hours ago but have eventually figured out why the error keeps coming and the solution to it.

What I did:

I created a git repository at GitHub

Initialized my project in my code editor(vs code) as a git repository

I added the URL to my repo using

git remote add origin https://github.com/xxxxxx/xxxxx.git
By this time

git remote -v
probably gave as expected

origin https://github.com/xxxx/xxxx.git (fetch)
origin https://github.com/xxxx/xxxx.git (push)
Notice that

git branch
will show you nothing at this point because you have not created any branch also you cannot be able to create any.

The issue:

When I tried

git push -u origin main
I got

error: src refspec main does not match any
error: failed to push some refs to 'github.com:xxxx/xxxx.git'
Even with the git recommended command

git push --set-upstream origin master (or main preferably)
I got the same error.

Now the solution:

Add a file in your project such as README.md

git add .
git commit -m "added README.md"
git branch -M main  
The -M is to rename your branch if you don't want it to be called master

Finally,

git push origin main
