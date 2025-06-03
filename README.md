# d12-ui

**d12-ui** is a lightweight, reusable, and themeable React component library built using TypeScript. It provides accessible and consistent components such as `Button`, `Badge`, `Accordion`, and `TextInput` to accelerate front-end development.

Built with React, TypeScript, and CSS. Published on npm.


## Features

- Prebuilt components: `Button`, `Badge`, `Accordion`, `TextInput`,`Card`,`Dialog`
- Light and dark theme support using CSS variables
- Minimal styling with full customization flexibility
- Tree-shakable and fully typed (TypeScript support)
- ESM-compatible module for modern web apps
- Optional unit testing support with Jest and React Testing Library

---

## Installation

```bash
npm install d12-ui
````

or

```bash
yarn add d12-ui
```

---

## Usage

```tsx
import { Button, Badge, Accordion, TextInput } from 'd12-ui';

function App() {
  return (
    <div>
      <Button onClick={() => alert('Clicked')}>Click Me</Button>
      <Badge color="success">Active</Badge>
      <Accordion title="More Info">
        This is the content inside the accordion.
      </Accordion>
      <TextInput placeholder="Enter your name" />
    </div>
  );
}
```

All components are customizable through props.

---

## Theming

`d12-ui` supports light and dark themes using CSS variables. You can toggle the theme by setting a `data-theme` attribute on your HTML or root element:

```html
<body data-theme="dark">
<!-- or -->
<body data-theme="light">
```

To customize colors or variables, override the default CSS variables in your global stylesheet.

---

## Testing

Each component can be tested using [Jest](https://jestjs.io/) and [React Testing Library](https://testing-library.com/). To run tests:

```bash
npm test
```

---

## Storybook (if configured)

To preview components in isolation using Storybook:

```bash
npm run storybook
```

This allows for interactive component development and documentation.



---

## Contributing

Contributions are welcome. To contribute:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/ComponentX`)
3. Commit your changes (`git commit -am 'Add ComponentX'`)
4. Push to your branch (`git push origin feature/ComponentX`)
5. Open a Pull Request

---

