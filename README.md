# Frontend Engineer: Technical Challenge

## Task

We want you to write a controlled form component called `MoneyInput` in React with the following criteria:

- The user can input a decimal number (in Euro).
- On change the value is displayed in a localized number format.
- On blur the input value is converted to an integer (in Cents) and logged to the console.
- The component looks similar to the design in the screenshot below.
- Bonus: The component is documented in Storybook.

### Design

![Text input design](./design/TextInput.png)

### Additional notes

- Suppose that the component gets a `locale` passed as a prop (e.g. `en` or `de`), that you can use to format the string.
- You may use the tokens provided in `tokens.css` to style the component.
- The code should be placed in the `src/MoneyInput` directory, there is some boilerplate code there created for your convenience.

## Submit your solution

You can provide your solution either

- as a zipped file containing the code or
- as a link to a fork of this repository.
