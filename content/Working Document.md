Grade Each Doc when creating
[[Assignment List]]

Complete
fordevelopment
InProgress
publishable 

Create a doc for each word you reference that needs definition/page akak pretty much everything

Tag pillars with 
[[]]
Pillars


For Example  use this symbol>

>  like this


[[Welcome]]

To make an alias you need to:



#### Ideas to possibly incorporate into working document:

You are asking two different things. First, how to link to blocks in other notes, and also how to create an alias for a link.

Firstly, to create a [link to a block in another file 1.1k](https://help.obsidian.md/How+to/Link+to+blocks). Typing `[[filename^` or `[[^^` will bring up a modal you can type in to search for a specific block within other notes. If you want to link to a block within the same note, use a single chevron.

Secondly, after selecting the block you would like to link to, you can use the pipe character `|` after the link text but within the same `[[]]` to create an alias for the link.

When creating a link with an alias, it would be formatted as `[[B.md|#2]]`; this would show `#2` as the link text inline but navigate to `B.md` when clicked. So in your case, you would have the link to the specific block rather than B.md.

Look at [Link with aliases 1.1k](https://help.obsidian.md/How+to/Add+aliases+to+note#Link+with+aliases) in the help guide on this topic for a better understanding.
![image](https://forum.obsidian.md/uploads/default/original/3X/d/6/d687efefdcb8fa134a4fbf306e08f2eaa901467a.png)

Which was produced by this text:

`- [ ] Not started - [/] Started, at least a little bit - [\] Soon to be finished - [x] Finished - [>] Migrated - [<] Scheduled/deferred`





Creating a new quartz version.
Copy and past vault files to quartz content file in one drive
Open powershell

type: cd C:\Users\s1t2e\OneDrive\Documents\GitHub\quartz 
hit enter
npx quartz sync
enter
git add .
hit enter
git commit -m "new name of upload"
git push
hit enter
