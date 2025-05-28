import { list } from "@vercel/blob"
import { NextResponse } from "next/server"

export async function GET() {
  try {
    const { blobs } = await list()

    const mediaItems = blobs.map((blob) => ({
      url: blob.url,
      pathname: blob.pathname,
      size: blob.size,
      contentType: blob.contentType || "application/octet-stream",
      uploadedAt: blob.uploadedAt,
    }))

    return NextResponse.json({
      items: mediaItems,
      count: mediaItems.length,
    })
  } catch (error) {
    console.error("Failed to fetch media items:", error)
    return NextResponse.json({ error: "Failed to fetch media items" }, { status: 500 })
  }
}
