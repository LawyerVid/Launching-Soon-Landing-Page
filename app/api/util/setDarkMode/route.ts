import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { createEdgeRouter } from "next-connect";
import { getCorsHeaders, optionsMethodResponse } from "#/lib/server/cors";


interface RequestContext {
}

const router = createEdgeRouter<NextRequest, RequestContext>();


router
    .post(async (req, ctx): Promise<NextResponse> => {
        try {
            const { darkMode } = await req.json()
            let res = new NextResponse(JSON.stringify({}), getCorsHeaders(req, 200))
            console.log("darkMode!!!: ", darkMode)
            if (darkMode) {
                res.cookies.set("darkMode", "true")
            } else {
                res.cookies.set("darkMode", "false")
            }
            return res
        } catch (err) {
            console.error(err)
            return new NextResponse(JSON.stringify({ success: false }), getCorsHeaders(req, 500))
        }
    })


export async function POST(request: NextRequest, ctx: RequestContext) {
    return router.run(request, ctx) as Promise<NextResponse>
}

export const OPTIONS = optionsMethodResponse

