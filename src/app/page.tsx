import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

export default function Home() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-row gap-2">
        <Button>Button</Button>
        <Button variant="secondary">Button</Button>
        <Button variant="outline">Button</Button>
        <Button variant="destructive">Button</Button>
        <Button variant="ghost">Button</Button>
        <Button variant="link">Button</Button>
      </div>
      <div className="flex flex-row items-center gap-2">
        <Switch id="airplane-mode" />
        <Label htmlFor="airplane-mode">Airplane Mode</Label>
      </div>
      <div className="flex flex-row items-center gap-2">
        <Badge size="xs">Badge</Badge>
        <Badge>Badge</Badge>
        <Badge size="md">Badge</Badge>
        <Badge size="lg">Badge</Badge>
        <Badge variant="secondary">Badge</Badge>
        <Badge variant="outline">Badge</Badge>
        <Badge variant="destructive">Badge</Badge>
      </div>
      <h1 className="text-7xl font-bold text-gray-900">H1 This is a heading</h1>
      <h2 className="text-6xl font-bold text-gray-900">H2 This is a heading</h2>
      <h3 className="text-5xl font-bold text-gray-900">H3 This is a heading</h3>
      <h4 className="text-4xl font-bold text-gray-900">H4 This is a heading</h4>
      <p className="text-gray-600">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
    </div>
  );
}
