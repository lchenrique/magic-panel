/* eslint-disable @typescript-eslint/no-explicit-any */
import Button from "../button/button";
import { CodeContainer } from "../code-container/code-container";

const CodeExample = ({ onOpen }: any) => {
  const codeString = `<MagicPanel 
    drawer={isDrawer} 
    placement={placement} 
    open={isOpen} 
    onChange={setIsOpen} 
   >
    <MagicPanel.Close onClose={() => setIsOpen(false)} />

    <MagicPanel.Header>Bem-vindo ao Magic Panel!</MagicPanel.Header>
    
    <p>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
      Aspernatur reiciendis inventore expedita quae aliquam eum mollitia cupiditate soluta illo, fuga delectus obcaecati,
      facere consectetur nemo iusto ipsa ducimus optio! Amet?

      Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis quo sequi officiis repellendus nulla,
      fugiat tempora distinctio, tenetur reprehenderit modi,
      aperiam quod minus optio doloremque excepturi deleniti similique illum asperiores?
    </p>
</MagicPanel>
  `;

  const installExemple = `npm install magic-panel --save`;

  const customize = `<MagicPanel 
     drawer={isDrawer} 
     placement={placement} 
     open={isOpen} 
     onChange={setIsOpen} 
  >
    <MagicPanel.Close
        onClose={() => setIsOpen(false)}
        className='left-0 close:bg-primary'
      />

    <MagicPanel.Header>Bem-vindo ao Magic Panel!</MagicPanel.Header>

    <p>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
      Aspernatur reiciendis inventore expedita quae aliquam eum mollitia cupiditate soluta illo, fuga delectus obcaecati,
      facere consectetur nemo iusto ipsa ducimus optio! Amet?

      Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis quo sequi officiis repellendus nulla,
      fugiat tempora distinctio, tenetur reprehenderit modi,
      aperiam quod minus optio doloremque excepturi deleniti similique illum asperiores?
    </p>
</MagicPanel>`;

  return (
    <div className="flex flex-col gap-3">
      <p className="text-lg mt-4">Install:</p>

      <CodeContainer language="node">{installExemple}</CodeContainer>

      <CodeContainer language="tsx">{codeString}</CodeContainer>

      <div className="flex items-center mt-4 justify-between">
        <p className="text-lg p-0 leading-none">Customize:</p>{" "}
        <Button
          label="Open"
          onClick={() =>
            onOpen("close", { className: "left-0 close:bg-primary" })
          }
        ></Button>
      </div>

      <CodeContainer language="tsx">{customize}</CodeContainer>
    </div>
  );
};

export default CodeExample;
