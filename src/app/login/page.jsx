"use client";
import { authClient } from "@/lib/auth-client";
import { Check } from "@gravity-ui/icons";
import {
  Button,
  Card,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import { GrGoogle } from "react-icons/gr";
import toast from "react-hot-toast"; 

export default function SignInPage() {
  const onSubmit = async (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    const { data, error } = await authClient.signIn.email({
      email,
      password,
      callbackURL: "/",
    });

    if (error) {
      toast.error(error.message || "Login failed");
    } else {
      toast.success("Login successful ");
    }
  };

  const handlGoogleSignIn = async () => {
    try {
      await authClient.signIn.social({
        provider: "google",
      });
      toast.success("Redirecting to Google...");
    } catch (err) {
      toast.error("Google sign-in failed");
    }
  };

  return (
    <Card className="border border-cyan-500 mx-auto w-90 md:w-125 py-10 mt-5">
      <h1 className="text-center text-2xl font-bold">Sign In</h1>

      <Form className="flex w-96 mx-auto flex-col gap-4" onSubmit={onSubmit}>
        <TextField isRequired name="email" type="email">
          <Label>Email</Label>
          <Input placeholder="john@example.com" />
          <FieldError />
        </TextField>

        <TextField isRequired name="password" type="password">
          <Label>Password</Label>
          <Input placeholder="Enter your password" />
          <Description>
            Must be at least 8 characters with 1 uppercase and 1 number
          </Description>
          <FieldError />
        </TextField>

        <div className="flex md:justify-between gap-2">
          <Button type="submit" className="bg-gradient-to-r from-cyan-800 to-cyan-500 w-40 md:w-full">
            <Check />
            Submit
          </Button>
          <Button type="reset" variant="secondary" className="w-40 md:w-full">
            Reset
          </Button>
        </div>
      </Form>

      <p className="text-center">Or</p>

      <Button
        onClick={handlGoogleSignIn}
        className="w-80 md:w-full bg-gradient-to-r from-cyan-800 to-cyan-500"
      >
        <GrGoogle /> Sign In With Google
      </Button>
    </Card>
  );
}