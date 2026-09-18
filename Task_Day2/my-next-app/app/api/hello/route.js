import {NextResponse} from "next/server"
import { Component } from "react";
export async function GET()
{
    return NextResponse.json({
        name:"milin mehta"
    })
}
