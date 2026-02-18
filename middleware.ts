import { NextRequest, NextResponse } from 'next/server'

// Country codes to block (ISO 3166-1 alpha-2)
const BLOCKED_COUNTRIES = [
  'PK', // Pakistan
  'BD', // Bangladesh
  'IN', // India
  'CN', // China
  'TW', // Taiwan
  'JP', // Japan
]

export function middleware(request: NextRequest) {
  // Vercel injects the visitor's country via the x-vercel-ip-country header
  const country = request.headers.get('x-vercel-ip-country')

  if (country && BLOCKED_COUNTRIES.includes(country)) {
    return new NextResponse(
      `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Access Restricted</title>
  <style>
    body {
      margin: 0;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      background: #0f0f0f;
      color: #fff;
      display: flex;
      align-items: center;
      justify-content: center;
      min-height: 100vh;
      text-align: center;
    }
    .container { max-width: 480px; padding: 2rem; }
    h1 { font-size: 2rem; margin-bottom: 0.5rem; }
    p { color: #aaa; line-height: 1.6; }
    .code { font-size: 5rem; margin-bottom: 1rem; }
  </style>
</head>
<body>
  <div class="container">
    <div class="code">🚫</div>
    <h1>Access Restricted</h1>
    <p>This website is not available in your region.</p>
  </div>
</body>
</html>`,
      {
        status: 403,
        headers: { 'Content-Type': 'text/html' },
      }
    )
  }

  return NextResponse.next()
}

export const config = {
  // Run on all routes except Next.js internals and static assets
  matcher: ['/((?!_next/static|_next/image|favicon.ico|assets/).*)'],
}
