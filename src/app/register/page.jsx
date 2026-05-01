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
import { useRouter } from "next/navigation";
import { GrGoogle } from "react-icons/gr";
import { useState } from "react";
import toast from "react-hot-toast";

export default function SignUpPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const name = e.target.name.value;
    const image = e.target.image.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    const { data, error } = await authClient.signUp.email({
      name,
      email,
      password,
      image,
    });

    setLoading(false);

    if (error) {
      toast.error(error.message || "Signup failed");
      return;
    }

    toast.success("Account created successfully ");

    router.push("/");
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
      <h1 className="text-center text-2xl font-bold">Sign Up</h1>

      <Form className="flex w-96 mx-auto flex-col gap-4" onSubmit={onSubmit}>
        
        <TextField isRequired name="name" type="text">
          <Label>Name</Label>
          <Input placeholder="Enter your name" />
          <FieldError />
        </TextField>

        <TextField isRequired name="image" type="text">
          <Label>Image URL</Label>
          <Input placeholder="Image URL" />
          <FieldError />
        </TextField>

        <TextField
          isRequired
          name="email"
          type="email"
          validate={(value) => {
            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
              return "Please enter a valid email address";
            }
            return null;
          }}
        >
          <Label>Email</Label>
          <Input placeholder="john@example.com" />
          <FieldError />
        </TextField>

        <TextField
          isRequired
          minLength={8}
          name="password"
          type="password"
          validate={(value) => {
            if (value.length < 8) {
              return "Password must be at least 8 characters";
            }
            if (!/[A-Z]/.test(value)) {
              return "Must contain 1 uppercase letter";
            }
            if (!/[0-9]/.test(value)) {
              return "Must contain 1 number";
            }
            return null;
          }}
        >
          <Label>Password</Label>
          <Input placeholder="Enter your password" />
          <Description>
            Must be at least 8 characters with 1 uppercase and 1 number
          </Description>
          <FieldError />
        </TextField>

        <div className="flex gap-2">
          <Button
            type="submit"
            disabled={loading}
            className="bg-gradient-to-r from-cyan-800 to-cyan-500 w-40 md:w-full"
          >
            <Check />
            {loading ? "Creating..." : "Submit"}
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