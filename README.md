# Frontend Engineer: Technical Challenge

## Paul's Comments

### Technical choices

- Modified the vitest config in order for tests to run correctly (an error message about `expect` was showing)
- Started by using `input type="number"` but had to switch to `input type="text"` in order to handle locale strings and the currency symbol. `type="number"` does provide the benefit of showing a number keyboard on mobile, but doesn't accept localised strings.
- Kept the possibility of adding negative values.
- The component accepts an error prop as `string` to later on keep the possibility to display an error message instead of simply changing the border color.

### Possible improvements (out of challenge scope)

- Ability to pass a custom currency as prop. The component currently defaults to `€` as per instructions. However a currency prop could be handled via the `Intl.NumberFormat` function, which could return the appropriate currency symbol.
- Ability to specify the number of decimals
- Use the [@testing-library/user-event](https://testing-library.com/docs/ecosystem-user-event/) library instead of `fireEvent`, as it is closer to user behavior.
- Cover more use cases when converting from locale string to number. My custom `localeToNumber` function covers basic use cases but dedicated libraries would probably be more efficient (see [globalize](https://github.com/globalizejs/globalize) or [d2l-intl](https://www.npmjs.com/package/d2l-intl))

---

## Task

We want you to write a controlled form component called `MoneyInput` in React with the following criteria:

- The user can input a decimal number (in Euro).
- On change the component will convert the value to integer (in Cents) and emit new value by running the appropriate handler and log the new value in console.
- On blur the component will convert the value to integer (in Cents) and emit new value by running the appropriate handler and log the new value in console.
- Whenever a new value is provided (integer, in Cents) through the `value` prop, the value of the input field will be updated with the new decimal number (in Euro).
- The component looks similar to the design in the screenshot below.
- Bonus: The component is documented in Storybook.
- Bonus: The component's interface besides the changes stemming from the functionality described above is identical to the interface of the HTML input element.

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
