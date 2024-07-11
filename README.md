
## Magic 🪄 Panel



Magic Panel is a React library developed with TailwindCSS to simplify the implementation of modals and drawers.

### Why Magic Panel?

- **Intuitive Usage:** Easily switch between modal and drawer using a boolean without compromising layout.
- **Highly Customizable:** Adjust style and behavior as needed.
- **Responsive Design:** Perfect for creating responsive and adaptable interfaces.
- **Versatility:** Ideal for scenarios requiring different interfaces on desktop and mobile.

### See more information
🔗 [Demonstration](https://magic-panel-web.vercel.app/)

### Installation

To use Magic Panel in your React project, follow these steps:

1. **Install via npm:**

   ```bash
   npm install magic-panel --save
   ```

2. **Configure tailwind.config.js:**

   ```javascript
   const { magicPanelPlugin } = require('magic-panel/plugin');

   module.exports = {
     content: ["./src/**/*.{html,js}"],
     theme: {
       extend: {},
     },
     plugins: [magicPanelPlugin()] // Add this line
   };
   ```

3. **Import into your project:**

   ```javascript
   import { MagicPanel } from 'magic-panel';
   import 'magic-panel/style.css'; // Import the provided CSS file
   ```

### Basic Usage

#### Example Usage as Modal:

```javascript
import React, { useState } from 'react';
import { MagicPanel } from 'magic-panel';

const App = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <button onClick={handleOpen}>Open Panel</button>
      <MagicPanel open={open} onChange={setOpen}>
        <MagicPanel.Header>My Panel</MagicPanel.Header>
        <div>
          Panel Content
          <MagicPanel.Close />
        </div>
      </MagicPanel>
    </>
  );
};

export default App;
```

#### Example Usage as Drawer:

```javascript
import React, { useState } from 'react';
import { MagicPanel } from 'magic-panel';

const App = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <button onClick={handleOpen}>Open Drawer</button>
      <MagicPanel open={open} onChange={setOpen} drawer placement="right">
        <div>
          Drawer Content
          <MagicPanel.Close />
        </div>
      </MagicPanel>
    </>
  );
};

export default App;
```

### Props

- **open:** Boolean that controls whether the panel is open or closed.
- **onChange:** Callback function called when the state of `open` changes.
- **destroyOnClose:** Boolean to destroy the component when closed (optional).
- **width** and **height:** Dimensions of the panel (optional).
- **className:** Additional CSS class for custom styling.
- **drawer:** Boolean that defines whether the panel is a drawer.
- **placement:** Position of the drawer (`top`, `bottom`, `left`, `right`).

### Child Components

- **MagicPanel.Header:** Optional header of the panel.
- **MagicPanel.Close:** Component to close the panel.

### Styling

Customize panel styles using CSS classes and specific props for each position (`placement`).

---

© 2024 Magic Panel. All rights reserved.