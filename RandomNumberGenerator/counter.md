# Day 1 of 100

A simple counter app. So simple that anyone can make it.

Interestingly enough for me, I have never heard of `event delegation` pattern when targeting multiple elements as the example with the three buttons for the counter.

I did a little bit more of research about `event delegation` and it turns out that ReactJS has been doing this since its inception.

The basic premise of event delegation is to put an even listener on the parent node instead of individual nodes. This way multiple similar elements can be handled similarly instead of having a handler for each individual element. Then the event listener analyzes bubbled events for finding the appropriate child elements.

### Cons:

1. Keep in mind that some events do not bubble therefor, a different approach must be taken.
2. delegation can add more CPU load because the container-level handler reacts to events anywhere near in the container.
