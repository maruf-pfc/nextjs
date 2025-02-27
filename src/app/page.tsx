"use client";

import Button from "../../components/Button";

export default function Page() {
  return (
    <div>
      <h1>Hello, World!</h1>
      <p>Welcome to your new Next.js app.</p>
      <Button onClick={() => console.log("Hello, World!")}>Click me!</Button>
    </div>
  );
}
