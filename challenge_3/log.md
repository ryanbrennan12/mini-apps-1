# Checkout

# Preview
App is a wizard format data collector with multiple forms

# Planning:
Main Form Component's state will be which stage (F1, F2, F3) in the form process we are in
A *NextForm Function* that checks that state (hey the state is 1, so now lets set it to 2)  This function is invoked in each of our *Form Components*.  Also, once state is changed, (in this cae, 1 to 2), that will determine which form will be rendered- will do this with switch statements in the render.

A *Save Function* to grab the data from each form will be invoked in each of the form components in a button that will also initiate the *NextForm* function

will revisit to make this way more clear;-)us


Initially started to make multiple components with multiple states.  I refactored to have all state in one component.
Also- I was able to construct a single event listener for all of my input fields
