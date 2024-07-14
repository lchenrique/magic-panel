### Documentation for MagicPanel Library

#### Overview

MagicPanel is a React component library designed for creating dynamic and interactive panels. It supports both modal and drawer styles and provides a variety of customization options for enhanced user experience.

#### Installation

Install the MagicPanel library via npm:

```bash
npm install magicpanel
```

#### Usage

Here is a basic example of how to use the MagicPanel component:

```jsx
import React, { useState } from "react";
import { MagicPanel, ContentScroll } from "magicpanel";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button onClick={handleToggle}>Toggle Panel</button>
      <MagicPanel open={isOpen} onChange={setIsOpen} drawer={true} placement="right">
        <MagicPanel.Header>Header Content</MagicPanel.Header>
        <ContentScroll>
          <p>Your content goes here...</p>
        </ContentScroll>
        <MagicPanel.Close>Close</MagicPanel.Close>
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
  <ContentScroll>
    <p>Your content goes here...</p>
  </ContentScroll>
  <MagicPanel.Close>Close</MagicPanel.Close>
</MagicPanel>
```

#### ContentScroll

A component to enable scrolling within the panel content.

**Props:**

- `children`: `ReactNode` - Children components inside the content scroll area.
- `className`: `string` - Additional class names for customization.

**Example:**

```jsx
<ContentScroll className="custom-scroll">
  <p>Your scrollable content goes here...</p>
</ContentScroll>
```

### Utility Functions

#### cn

A utility function used for conditional class names.

**Example:**

```jsx
import { cn } from "../../utils";

const myClassName = cn("base-class", {
  "conditional-class": condition,
});
```

### Styling

MagicPanel uses a combination of CSS classes for styling. Make sure to include the CSS file in your project:

```jsx
import "magicpanel/style.css";
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
  <ContentScroll>
    <p>Your content goes here...</p>
  </ContentScroll>
  <MagicPanel.Close>Close</MagicPanel.Close>
</MagicPanel>
```

### Handling Mobile Devices

MagicPanel includes optimizations for mobile devices. It automatically adjusts the overflow behavior based on the user's device.

### License

MagicPanel is licensed under the MIT License.

### Support

For bug reports and feature requests, please visit the [issues page](https://github.com/your-username/magicpanel/issues).

### Homepage

Visit the [official site](https://www.magicpanel.com) for more information and documentation.