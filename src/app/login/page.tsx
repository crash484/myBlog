"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { NextResponse } from "next/server"
import { SignJWT } from "jose"

export default function LoginPage() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState("")
  const router = useRouter()

  useEffect(() => {
    // Check if user is already logged in
    const checkAuth = async()=>{
        try{
            const res = await fetch('/api/verify-token',{
                method: "GET",
                credentials: 'include',
            })
            const data = await res.json();

            if( data.valid ) {
                router.push("/admin")
            } 
        } catch (err) {
            setError("There was an error");
        }
    }
    checkAuth();
  }, [router])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError("")

    try {
        const res = await fetch("/api/login",{
            method:"POST",
            headers: { "Content-Type": "application/json" },
            credentials: "include",
            body: JSON.stringify({ username,password }),
        })

        if(!res.ok) {
            const data = await res.json();
            throw new Error(data.error || "Login failed");
        }

        router.push("/admin");
    } catch(err:any) {
        setError(err.message || "Login failed" );
    } finally {
        setIsSubmitting(false);
    }

  }

  return (
    <>
      <Header />
      <div className="container max-w-md py-20 mx-auto px-4 sm:px-6">
        <div className="bg-card border rounded-lg p-8 shadow-sm">
          <h1 className="text-2xl font-bold text-center mb-8">Admin Login</h1>

          {error && (
            <div className="p-4 mb-6 rounded-md bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-300">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="username" className="block text-sm font-medium mb-1">
                Username
              </label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full p-3 border rounded-md bg-background"
                placeholder="Enter username"
                required
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium mb-1">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-3 border rounded-md bg-background"
                placeholder="Enter password"
                required
              />
            </div>

            <Button type="submit" disabled={isSubmitting} className="w-full">
              {isSubmitting ? "Signing in..." : "Sign In"}
            </Button>
          </form>

          <div className="mt-6 p-4 bg-muted rounded-md">
            <p className="text-sm text-muted-foreground text-center">
              <strong>Demo Credentials:</strong>
              <br />
              Username: admin
              <br />
              Password: password
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
