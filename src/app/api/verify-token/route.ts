import { jwtVerify } from "jose";
import { NextRequest,NextResponse } from "next/server";
import dotenv from "dotenv"

dotenv.config();

export async function GET(req: NextRequest) {

    const token = req.headers.get("cookie")?.split("token=")[1]?.split(";")[0]

    if(!token) {
        return NextResponse.json({ valid: false }, { status:401 });
    }

    try{
        const { payload } = await jwtVerify(
            token, new TextEncoder().encode(process.env.JWT_SECRET)
        )

        return NextResponse.json({ valid:true,payload });
    } catch {
        return NextResponse.json({ valid:false }, {status:401});
    }
}