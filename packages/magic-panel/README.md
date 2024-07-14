## Documentation for MagicPanel Library

### Overview

`MagicPanel` is a React component library designed for creating dynamic and interactive panels. It supports both modal and drawer styles and provides a variety of customization options for enhanced user experience.

#### • Its usage is intuitive and highly customizable.

#### • With MagicPanel, you can easily switch between modal and drawer using just a boolean, without compromising the layout.

#### • The library is perfect for creating responsive and adaptable interfaces with ease.

#### • Ideal for scenarios where a modal is preferred on the desktop version, while a bottom-up sliding drawer is used on the mobile version.

----
## Installation

Install the MagicPanel library via npm:

```bash
npm install magic-panel
```

```jsx
import { magicPanelPlugin } from 'magic-panel/plugin';

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [magicPanelPlugin()] //  add this
```

```jsx
//  Now you have access to the group: variant in Tailwind CSS.

<MagicPanel.Close className="close:bg-emerald-400" />
```

### Styling

MagicPanel uses a combination of CSS classes for styling. Make sure to include the CSS file in your project:

```jsx
import "magic-panel/style.css";
```

## Usage

Here is a basic example of how to use the MagicPanel component:

```jsx
import React, { useState } from "react";
import "magic-panel/style.css"
import { MagicPanel } from "magic-panel";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button onClick={handleToggle}>Toggle Panel</button>
      <MagicPanel
        open={isOpen}
        onChange={setIsOpen}
        drawer={true}
        placement="right"
      >
        <MagicPanel.Header>Header Content</MagicPanel.Header>
        <MagicPanel.Content>
          <p>Your content goes here...</p>
        </MagicPanel.Content>
        <MagicPanel.Close onClose={() => setIsOpen(false)} />
      </MagicPanel>
    </div>
  );
};

export default App;
```

### Components

#### MagicPanel

The main component for creating a panel. It supports both modal and drawer styles.

**Props:**

- `header`: `ReactNode` - Content for the panel header.
- `content`: `ReactNode` - Content for the panel body.
- `children`: `ReactNode` - Children components inside the panel.
- `open`: `boolean` - Whether the panel is open or closed.
- `onChange`: `(isOpen: boolean) => void` - Callback function triggered when the panel state changes.
- `destroyOnClose`: `boolean` - Whether to destroy the panel content when closed.
- `width`: `number` - Width of the panel.
- `height`: `number | string` - Height of the panel.
- `className`: `string` - Additional class names for customization.
- `drawer`: `boolean` - Whether the panel should be a drawer.
- `placement`: `"top" | "bottom" | "left" | "right"` - Position of the drawer.

**Example:**

```jsx
<MagicPanel open={true} drawer={true} placement="right">
  <MagicPanel.Header>Header Content</MagicPanel.Header>
  <MagicPanel.ContentScroll>
    <p>Your content goes here...</p>
  </MagicPanel.ContentScroll>
  <MagicPanel.Close onClose={() => setIsOpen(false)} />
</MagicPanel>
```

#### ContentScroll

A component to enable scrolling within the panel content.

**Props:**

- `children`: `ReactNode` - Children components inside the content scroll area.
- `className`: `string` - Additional class names for customization.

**Example:**

```jsx
<ContentScroll>
  <p>Your scrollable content goes here...</p>
</ContentScroll>
```



### Advanced Usage

#### Drawer Positioning

MagicPanel supports various drawer positions. Set the `placement` prop to define the position:

- `"top"`
- `"bottom"`
- `"left"`
- `"right"`

**Example:**

```jsx
<MagicPanel open={true} drawer={true} placement="left">
  <MagicPanel.Header>Header Content</MagicPanel.Header>
  <MagicPanel.Content>
    <p>Your content goes here...</p>
  </MagicPanel.Content>
  <MagicPanel.Close>Close</MagicPanel.Close>
</MagicPanel>
```

### Handling Mobile Devices

MagicPanel includes optimizations for mobile devices. It automatically adjusts the overflow behavior based on the user's device.

### License

MagicPanel is licensed under the MIT License.

### Support

For bug reports and feature requests, please visit the [issues page](https://github.com/lchenrique/magic-panel/issues).

### Homepage

Visit the [official site](https://magic-panel-web.vercel.app) for more information and documentation.
