import { SignIn, ClerkLoaded, ClerkLoading } from "@clerk/nextjs";
import { Loader2 } from "lucide-react";

export default function SignInPage() {
  return (
    <div className="min-h-screen">
      <div className="h-full lg:flex flex-col items-center justify-center px-4">
        <div className="text-center space-y-4 pt-16 lg:pt-8">
          <h1 className="font-bold text-3xl lg:text-5xl text-[#2e2a47]">
            Welcome Back!
          </h1>
          <p className="text-base text-[#7e8ca0]">
            Log in or Create account to continue to Internship!
          </p>
        </div>
        <div className="flex items-center justify-center mt-8">
          <ClerkLoaded>
            <SignIn />
          </ClerkLoaded>
          <ClerkLoading>
            <Loader2 size={32} className="animate-spin text-muted-foreground" />
          </ClerkLoading>
        </div>
      </div>
    </div>
  );
}
