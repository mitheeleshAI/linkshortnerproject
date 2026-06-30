"use client";

import { useEffect } from "react";
import { useAuth } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

export default function SignInRedirector() {
    const { isSignedIn } = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (typeof window === "undefined") return;
        const after = sessionStorage.getItem("afterSignIn");
        if (isSignedIn && after === "true") {
            sessionStorage.removeItem("afterSignIn");
            router.push("/dashboard");
        }
    }, [isSignedIn, router]);

    return null;
}
