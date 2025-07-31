import { Button } from "./components/ui/button";

function App() {
  return (
    <div className="text-xl m-30 flex gap-3">
      <Button>Button</Button>
      <Button variant="secondary">Button</Button>
      <Button variant="outline">Button</Button>
      <Button variant="link">Button</Button>
      <Button variant="ghost">Button</Button>
      <Button variant="destructive">Button</Button>
    </div>
  );
}

export default App;
