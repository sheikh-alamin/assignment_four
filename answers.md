1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
    ==> getElementById : take a specific element, who has unique id. from this we can get only one element.
    ==> getElementsByClassName : take element from all same class name. from this we can get many elements - like a collection of elements.
    ==> querySelector : with css selector it can give us only first matching element.
    ==> querySelectorAll :  with css selector it can give us all matching element. from this we can get all elements in a list.

2. How do you create and insert a new element into the DOM?
    ==> to create a new element, we need to start with "createElement", then add elements and then to set use "appendChild" to set it inside a parent element.

3. What is Event Bubbling? And how does it work?
    ==> event bubbling means, when event goes from lower element to upper. as an example- if i click on a button, at first event will trigger in button, then it goes its parent "div" then it go till "body".

4. What is Event Delegation in JavaScript? Why is it useful?
    ==> event delegation is a process to set event listener in a parent element, so that child element can be handled automatically. it is very usefull because even if we have many child element, we donot need to set listener for each. 

5. What is the difference between preventDefault() and stopPropagation() methods?
    ==> the main difference of these two is, if we use preventDefault() it stops default process like- stopping form submission.
    and stopPropagation() method can stop event to go up.(it stops bubbles to go up)