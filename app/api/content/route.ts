import { NextResponse } from 'next/server'
import { db } from '@/lib/firebase'

export async function GET() {
  try {
    const docRef = db.collection('content').doc('website')
    const docSnap = await docRef.get()

    if (!docSnap.exists) {
      return NextResponse.json({ error: 'No content found' }, { status: 404 })
    }

    return NextResponse.json(docSnap.data())
  } catch (error) {
    console.error('Error fetching content:', error)
    return NextResponse.json({ error: 'Failed to fetch content', details: error instanceof Error ? error.message : 'Unknown error' }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    const content = await request.json()
    const docRef = db.collection('content').doc('website')
    await docRef.set(content, { merge: true })

    return NextResponse.json({ message: "Content updated successfully" })
  } catch (error) {
    console.error('Error updating content:', error)
    return NextResponse.json({ error: 'Failed to update content', details: error instanceof Error ? error.message : 'Unknown error' }, { status: 500 })
  }
}

