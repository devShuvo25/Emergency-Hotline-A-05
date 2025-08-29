1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?
    Ans: 
    getElementById: It selects a single element by its id.Its return its elements not a collection.

    getElementByClassName: It selects all the elements that have the specified class name.It return a collection like an array but not actual array.

    querySelector / querySelectorAll : It select the first element that matches a CSS selector Ex:('.card-child').On the other hand, querySelectorAll selects , same as before but all elements that matches a CSS selector.It returns a node list like as an array but actual array which can be iterated.

2. How do you **create and insert a new element into the DOM**?
    Ans:For creating a new element , we use document.createElement('...') then select a parent node by DOM and append there as a child node for inserting.
3. What is **Event Bubbling** and how does it work?
    Ans:
    Event Bubbling occurs when an event that happens on a child element and autometically bubbles up to its parent elements .This mean the event first handled by a innermost child element and then propagtes it to upward.
4. What is **Event Delegation** in JavaScript? Why is it useful?
    Ans:
    Event delegation is the technique of attaching a single event listener to a parent element instead of attaching listeners to multiple child elements. The parent listens for events that bubble up from its children and determines which child triggered the event.

5. What is the difference between **preventDefault() and stopPropagation()** methods?
    Ans: PreventDefault() method stops the difault behaviour of an element for that event and stopPropagation() methode prevent to bubbling up the event to parent elements from innermost child elements.