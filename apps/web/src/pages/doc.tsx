/* eslint-disable @typescript-eslint/no-explicit-any */
import { CodeContainer } from "../components/code-container/code-container";

const Doc = () => {
  return (
    <div className="container mx-auto mt-10">
      <div className="flex flex-col gap-3 mb-10">
        <p className="text-lg">
          <code className="'text-white bg-primary/10 px-2 py-1 rounded-md">
            MagicPanel
          </code>{" "}
          is a React library developed with TailwindCSS to simplify the
          implementation of modals and drawers.
        </p>
        <div className="w-full h-[1px] bg-secondary " />
        <p className="text-lg">
          • Its usage is intuitive and highly customizable.
        </p>
        <div className="w-full h-[1px] bg-secondary " />
        <p className="text-lg">
          • With MagicPanel, you can easily switch between modal and drawer
          using just a boolean, without compromising the layout.
        </p>
        <div className="w-full h-[1px] bg-secondary " />
        <p className="text-lg">
          • The library is perfect for creating responsive and adaptable
          interfaces with ease.
        </p>
        <div className="w-full h-[1px] bg-secondary " />
        <p className="text-lg italic text-gray-400">
          • Ideal for scenarios where a modal is preferred on the desktop
          version, while a bottom-up sliding drawer is used on the mobile
          version.
        </p>
        <div className="w-full h-[1px] bg-secondary " />
      </div>

      <h4 className="mt-4 text-lg">Installation:</h4>
      <p className="text-lg">
        To use{" "}
        <code className="text-white bg-primary/10 px-2 py-1 rounded-md">
          MagicPanel
        </code>{" "}
        in your React project, follow the steps below:
      </p>

      <ul className="flex flex-col gap-3 mt-3">
        <li>
          <p className="text-lg">
            <strong>Install via npm:</strong>
          </p>
          <p>
            <CodeContainer language="node">
              {`npm install magic-panel --save`}
            </CodeContainer>
          </p>
        </li>
        <li>
          <p className="text-lg">
            <strong>tailwind.config:</strong>
          </p>
          <p>
            <CodeContainer language="tsx">
              {`import { magicPanelPlugin } from 'magic-panel/plugin';

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [magicPanelPlugin()] //  <= add this,
}
              `}
            </CodeContainer>
          </p>
        </li>
        <li>
          <p className="text-lg">
            <strong>Import into your project:</strong>
          </p>
          <p className="text-lg">
            Import the necessary components into your React file:
          </p>

          <CodeContainer language="tsx">
            {`import { MagicPanel } from 'magic-panel';
import 'magic-panel/style.css'; // Import the provided CSS file`}
          </CodeContainer>
        </li>
      </ul>

      <h4 className="mt-4 text-lg font-semibold">Basic Usage</h4>

      <p className="text-lg mb-3 italic">
        The <code className="bg-primary/10  px-1 italic">MagicPanel</code> can
        be used as a modal or drawer, offering flexibility in displaying
        additional content in the interface.
      </p>

      <h5 className="mt-2 text-md">Example Usage as Modal:</h5>

      <CodeContainer language="tsx">
        {`import React, { useState } from 'react';
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
    <button onClick={handleOpen} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded text-sm">
      Open Panel
    </button>
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

export default App`}
      </CodeContainer>

      <h5 className="mt-2 text-md">Example Usage as Drawer:</h5>

      <CodeContainer language="tsx">
        {`import React, {useState} from 'react';
import {MagicPanel} from 'magic-panel';

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
        <button onClick={handleOpen} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded text-sm">
          Open Drawer
        </button>
        <MagicPanel open={open} onChange={setOpen} drawer placement="right">
          <div>
            Drawer Content
            <MagicPanel.Close />
          </div>
        </MagicPanel>
      </>
        );
};

export default App;`}
      </CodeContainer>
      <div className="border p-5 rounded-lg border-border my-5 bg-card">
        <h4 className="mt-4 text-lg font-semibold">
          Available Props for <code>MagicPanel</code>
        </h4>

        <ul className="list-disc list-inside flex flex-col gap-3 mt-3">
          <li className="text-lg">
            <code className="text-white bg-primary/10 px-2 py-1 rounded-md">
              open
            </code>
            : Boolean that controls whether the panel is open or closed.
          </li>
          <li className="text-lg">
            <code className="text-white bg-primary/10 px-2 py-1 rounded-md">
              onChange
            </code>
            : Callback function called when the state of{" "}
            <code className="text-white bg-primary/10 px-2 py-1 rounded-md">
              open
            </code>{" "}
            changes.
          </li>
          <li className="text-lg">
            <code className="text-white bg-primary/10 px-2 py-1 rounded-md">
              destroyOnClose
            </code>
            : Boolean to destroy the component when closed (optional).
          </li>
          <li className="text-lg">
            <code className="text-white bg-primary/10 px-2 py-1 rounded-md">
              width
            </code>{" "}
            and{" "}
            <code className="text-white bg-primary/10 px-2 py-1 rounded-md">
              height
            </code>
            : Width and height of the panel (optional).
          </li>
          <li className="text-lg">
            <code className="text-white bg-primary/10 px-2 py-1 rounded-md">
              className
            </code>
            : Additional CSS class for custom styling.
          </li>
          <li className="text-lg">
            <code className="text-white bg-primary/10 px-2 py-1 rounded-md">
              drawer
            </code>
            : Boolean that defines whether the panel is a drawer.
          </li>
          <li className="text-lg">
            <code className="text-white bg-primary/10 px-2 py-1 rounded-md">
              placement
            </code>
            : Position of the drawer (
            <code className="text-white bg-primary/10 px-2 py-1 rounded-md">
              top
            </code>
            ,
            <code className="text-white bg-primary/10 px-2 py-1 rounded-md">
              bottom
            </code>
            ,{" "}
            <code className="text-white bg-primary/10 px-2 py-1 rounded-md">
              left
            </code>
            ,{" "}
            <code className="text-white bg-primary/10 px-2 py-1 rounded-md">
              right
            </code>
            ).
          </li>
        </ul>

        <h4 className="mt-4 text-lg">
          Child Components of <code>MagicPanel</code>
        </h4>

        <ul className="list-disc list-inside flex flex-col gap-3 mt-3">
          <li className="text-lg">
            <code className="text-white bg-primary/10 px-2 py-1 rounded-md">
              MagicPanel.Header
            </code>
            : Optional header of the panel.
          </li>
          <li className="text-lg">
            <code className="text-white bg-primary/10 px-2 py-1 rounded-md">
              MagicPanel.Close
            </code>
            : Component to close the panel.
          </li>
        </ul>

        <h4 className="mt-4 text-lg font-semibold">Styling:</h4>

        <p className="text-lg">
          Customize the style of the panels using CSS classes and specific props
          for each position (
          <code className="text-white bg-primary/10 px-2 py-1 rounded-md">
            placement
          </code>
          ).
        </p>
      </div>
    </div>
  );
};

export { Doc };
