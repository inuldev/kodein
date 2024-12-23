import { SignUpButton, SignInButton, SignOutButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div>
      <SignUpButton /> <br />
      <SignInButton /> <br />
      <SignOutButton />
    </div>
  );
}
