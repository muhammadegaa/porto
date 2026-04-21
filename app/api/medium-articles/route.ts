import { NextResponse } from 'next/server'

function decodeHtmlEntities(text: string) {
  return text.replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&amp;/g, '&');
}

export async function GET() {
  try {
    console.log('Attempting to fetch Medium feed...')
    const response = await fetch('https://medium.com/feed/@simatupang.ega')
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    const xmlText = await response.text()
    console.log('Successfully fetched Medium feed')

    // Parse the XML manually
    const articles = xmlText.match(/<item>[\s\S]*?<\/item>/g)?.map(item => {
      const titleMatch = item.match(/<title><!\[CDATA\[(.*?)\]\]><\/title>/)
      const title = titleMatch ? decodeHtmlEntities(titleMatch[1]) : ''
      const link = item.match(/<link>(.*?)<\/link>/)?.[1] || ''
      const pubDate = item.match(/<pubDate>(.*?)<\/pubDate>/)?.[1] || ''
      return { title, link, pubDate }
    }) || []

    console.log(`Parsed ${articles.length} articles`)
    return NextResponse.json(articles)
  } catch (error) {
    console.error('Error fetching Medium articles:', error)
    return NextResponse.json({ 
      error: 'Failed to fetch articles', 
      details: error.message,
      stack: error.stack
    }, { status: 500 })
  }
}

