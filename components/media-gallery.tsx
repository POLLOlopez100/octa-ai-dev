"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Images, Play, Download, ExternalLink } from "lucide-react"
import Image from "next/image"

interface MediaItem {
  url: string
  pathname: string
  size: number
  contentType: string
  uploadedAt: string
}

export function MediaGallery() {
  const [mediaItems, setMediaItems] = useState<MediaItem[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchMediaItems()
  }, [])

  const fetchMediaItems = async () => {
    try {
      const response = await fetch("/api/media")
      if (response.ok) {
        const data = await response.json()
        setMediaItems(data.items || [])
      }
    } catch (error) {
      console.error("Failed to fetch media items:", error)
    } finally {
      setLoading(false)
    }
  }

  const getMediaType = (contentType: string) => {
    if (contentType.startsWith("image/")) return "image"
    if (contentType.startsWith("video/")) return "video"
    if (contentType.startsWith("audio/")) return "audio"
    return "document"
  }

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return "0 Bytes"
    const k = 1024
    const sizes = ["Bytes", "KB", "MB", "GB"]
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return Number.parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i]
  }

  if (loading) {
    return (
      <Card>
        <CardContent className="p-6">
          <div className="flex items-center justify-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900 dark:border-white"></div>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Images className="h-5 w-5" />
          Media Gallery
        </CardTitle>
        <CardDescription>Browse and manage your uploaded files stored in Vercel Blob</CardDescription>
      </CardHeader>
      <CardContent>
        {mediaItems.length === 0 ? (
          <div className="text-center py-8">
            <Images className="h-12 w-12 mx-auto text-gray-400 mb-4" />
            <p className="text-gray-500 dark:text-gray-400">No media files uploaded yet</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {mediaItems.map((item, index) => {
              const mediaType = getMediaType(item.contentType)
              const filename = item.pathname.split("/").pop() || "Unknown"

              return (
                <div key={index} className="border rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                  {/* Media Preview */}
                  <div className="aspect-video bg-gray-100 dark:bg-gray-800 relative">
                    {mediaType === "image" ? (
                      <Image
                        src={item.url || "/placeholder.svg"}
                        alt={filename}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    ) : mediaType === "video" ? (
                      <div className="flex items-center justify-center h-full">
                        <Play className="h-12 w-12 text-gray-400" />
                      </div>
                    ) : (
                      <div className="flex items-center justify-center h-full">
                        <Download className="h-12 w-12 text-gray-400" />
                      </div>
                    )}
                    <Badge className="absolute top-2 right-2" variant="secondary">
                      {mediaType}
                    </Badge>
                  </div>

                  {/* Media Info */}
                  <div className="p-3">
                    <h4 className="font-medium text-sm truncate mb-1">{filename}</h4>
                    <p className="text-xs text-gray-500 mb-2">
                      {formatFileSize(item.size)} • {new Date(item.uploadedAt).toLocaleDateString()}
                    </p>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" asChild className="flex-1">
                        <a href={item.url} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-3 w-3 mr-1" />
                          View
                        </a>
                      </Button>
                      <Button variant="outline" size="sm" asChild>
                        <a href={item.url} download>
                          <Download className="h-3 w-3" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        )}
      </CardContent>
    </Card>
  )
}
