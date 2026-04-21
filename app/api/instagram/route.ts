import { NextResponse } from 'next/server'

export async function GET() {
  // Since we're using the Instagram embed approach, we'll return the profile URL
  return NextResponse.json({
    instagramProfile: "https://www.instagram.com/itseggsy2/"
  })
}

