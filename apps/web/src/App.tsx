/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCallback, useState } from "react";
import RadioGroup from "./components/radio/radio";
import CodeExample from "./components/code-exemple/code-exemple";
import { MagicPanel, IPanelPropsDrawer } from "magic-panel";
import Button from "./components/button/button";
function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDrawer, setDrawer] = useState(false);
  const [placement, setPlacement] =
    useState<IPanelPropsDrawer["placement"]>("right");
  const [closeParams, setCloseParams] = useState<any>(null);
  const [overlayParams, setOverlayParams] = useState<any>(null);

  const radioOptions = [
    { label: "Top", value: "top" },
    { label: "Bottom", value: "bottom" },
    { label: "Left", value: "left" },
    { label: "Right", value: "right" },
  ];

  const props = {
    drawer: isDrawer,
    placement: isDrawer && placement,
    className: "",
  } as any;

  const handleOpenExemple = useCallback((params?: any) => {
    if (params) {
      Object.entries(params).forEach(([key, value]: any) => {

     
        if (key === "overlay") {
          setOverlayParams(value);
       
        }
        if (key === "close") {
          console.log(value)
          setCloseParams(value);
        }
        setIsOpen(!isOpen);

      });
      return
    }

    setOverlayParams(null);
    setCloseParams(null);
    setIsOpen(!isOpen);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="container mx-auto">
      <>
        <MagicPanel
          {...props}
          open={isOpen}
          onChange={setIsOpen}
          width={!isDrawer && 600}
          className="bg-card"
        >
          <MagicPanel.Close
            onClose={() => setIsOpen(false)}
            className={closeParams}
          />
          {overlayParams && (
            <MagicPanel.Overlay
              onClose={() => setIsOpen(false)}
              className={overlayParams}
            />
          )}
          <MagicPanel.Header> Discover MagicPanel</MagicPanel.Header>
          <MagicPanel.ContentScroll className="px-3 pt-4">
            <p>
              Welcome to the world of MagicPanel! This powerful React library
              allows you to easily create modal panels and drawers within your
              web applications.
            </p>
            <h3>Key Features:</h3>
            <ul>
              <li>
                <strong>Flexibility:</strong> Customize panel behavior with
                properties like <code>drawer</code> for defining drawer
                functionality, <code>placement</code> to control its position,
                and <code>open</code> to manage its state.
              </li>
              <li>
                <strong>Custom Styling:</strong> Tailor the appearance of your
                panels using custom CSS or predefined themes that seamlessly
                integrate with your application's design.
              </li>
              <li>
                <strong>Comprehensive Documentation:</strong> Get started
                quickly with clear documentation and practical examples that
                demonstrate the full capabilities of MagicPanel.
              </li>
            </ul>
            <p>
              Explore how MagicPanel simplifies the development of modern
              interfaces, providing a smooth and intuitive experience for your
              users.
            </p>
          </MagicPanel.ContentScroll>
        </MagicPanel>
      </>

      <div className="flex flex-col justify-center w-full">
        <div className="flex flex-col sm:flex-row items-center justify-between ">
          <h1 className="text-xl font-bold ">How to use:</h1>
          <div className="flex items-center gap-5 flex-col sm:flex-row">
            <div className="flex items-center gap-3">
              <label htmlFor="drawer">Drawer</label>
              <input
                className="accent-primary scale-110"
                id="drawer"
                type="checkbox"
                checked={isDrawer}
                onChange={() => setDrawer(!isDrawer)}
              />
            </div>
            {isDrawer && (
              <RadioGroup
                defaultValue={placement as any}
                options={radioOptions}
                onChange={(v) =>
                  setPlacement(v as IPanelPropsDrawer["placement"])
                }
              />
            )}
            <Button label="Open panel" onClick={() => handleOpenExemple()} />
          </div>
        </div>
        <CodeExample onOpen={(params: any) => handleOpenExemple(params)} />
        <div className="w-full h-[1px] bg-secondary  my-4" />
        <h1 className="text-xl font-bold mb-4">
          Here are some key features and characteristics:
        </h1>

        <div className="bg-card p-4 rounded-md border border-border">
          <ul className="text-foreground info p-3">
            <li>
              <strong>Component Flexibility:</strong> Render modal panels or
              drawers with ease.
            </li>
            <li>
              <strong>Property Support:</strong> Customize behavior with{" "}
              <code>drawer</code>, <code>placement</code>, <code>open</code>,
              and <code>onChange</code> properties.
            </li>
            <li>
              <strong>Easy Integration:</strong> Includes headers (
              <code>MagicPanel.Header</code>) and close buttons (
              <code>MagicPanel.Close</code>) for seamless UI integration.
            </li>
            <li>
              <strong>Content Adaptability:</strong> Adjust panel content
              dynamically for enhanced user interaction.
            </li>
            <li>
              <strong>Custom Styling:</strong> Tailor panel appearance with
              custom CSS classes or inline styles.
            </li>
            <li>
              <strong>Comprehensive Documentation:</strong> Access clear guides
              and examples to expedite development.
            </li>
            <li>
              <strong>Community Support:</strong> Join an active community for
              updates and collaboration.
            </li>
          </ul>

          <p className="mt-4 ">
            The <strong className="text-white">MagicPanel</strong> empowers
            developers to create elegant modal interfaces and drawers in React
            applications, enhancing user experience while simplifying essential
            functionalities.
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
