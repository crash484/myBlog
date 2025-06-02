import { NextResponse } from "next/server";
import { SignJWT } from "jose"
import dotenv from "dotenv";

dotenv.config();

export async function POST( req:Request){
    const { username, password } = await req.json();

    if(
        username !== process.env.ADMIN_USERNAME ||
        password !== process.env.ADMIN_PASSWORD
    ) {
        return NextResponse.json({ error: "Invalid credentials" },{ status:401 })
    }

    const secret = new TextEncoder().encode(process.env.JWT_SECRET)

    const token = await new SignJWT({ username })
        .setProtectedHeader({ alg: "HS256" })
        .setExpirationTime("2h")
        .sign(secret)

    const res = NextResponse.json({ success:true })
    res.cookies.set("token",token,{
        httpOnly: true,
        sameSite:"strict",
        secure: process.env.NODE_ENV === "production",
        path:"/",
        maxAge: 60*60*2 //2hours
    })

    return res
}