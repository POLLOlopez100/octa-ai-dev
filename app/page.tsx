import { InstallPrompt } from "@/components/install-prompt"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Smartphone, Wifi, Download, Zap, Shield, Globe } from "lucide-react"
import { FileUpload } from "@/components/file-upload"
import { MediaGallery } from "@/components/media-gallery"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <div className="bg-black dark:bg-white rounded-full p-3 mr-3">
              <Zap className="h-8 w-8 text-white dark:text-black" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
              GOATMONKY
            </h1>
          </div>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
            The Ultimate Progressive Web App Experience - Fast, Reliable, and Always Available
          </p>
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            <Badge variant="secondary" className="px-3 py-1">
              <Smartphone className="w-4 h-4 mr-1" />
              Mobile Ready
            </Badge>
            <Badge variant="secondary" className="px-3 py-1">
              <Wifi className="w-4 h-4 mr-1" />
              Offline Support
            </Badge>
            <Badge variant="secondary" className="px-3 py-1">
              <Download className="w-4 h-4 mr-1" />
              Installable
            </Badge>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <Card className="border-2 hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center gap-2">
                <Smartphone className="h-6 w-6 text-blue-600" />
                <CardTitle>Native-Like Experience</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Enjoy a smooth, app-like experience that works seamlessly across all devices and platforms.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="border-2 hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center gap-2">
                <Wifi className="h-6 w-6 text-green-600" />
                <CardTitle>Offline Functionality</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Access your content even when you're offline. Our service worker ensures you're always connected.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="border-2 hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center gap-2">
                <Download className="h-6 w-6 text-purple-600" />
                <CardTitle>Easy Installation</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Install directly from your browser - no app store required. One click and you're ready to go.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="border-2 hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center gap-2">
                <Zap className="h-6 w-6 text-yellow-600" />
                <CardTitle>Lightning Fast</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Optimized performance with instant loading and smooth interactions powered by modern web technologies.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="border-2 hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center gap-2">
                <Shield className="h-6 w-6 text-red-600" />
                <CardTitle>Secure & Reliable</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Built with security in mind, featuring HTTPS, secure headers, and modern web standards.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="border-2 hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center gap-2">
                <Globe className="h-6 w-6 text-indigo-600" />
                <CardTitle>Cross-Platform</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Works everywhere - desktop, mobile, tablet. One app, all platforms, consistent experience.
              </CardDescription>
            </CardContent>
          </Card>
        </div>

        {/* File Management Section */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <FileUpload />
          <MediaGallery />
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Card className="max-w-2xl mx-auto border-2">
            <CardHeader>
              <CardTitle className="text-2xl">Ready to Get Started?</CardTitle>
              <CardDescription>Experience the power of modern web applications with GOATMONKY PWA</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="px-8">
                  <Download className="mr-2 h-5 w-5" />
                  Install Now
                </Button>
                <Button variant="outline" size="lg" className="px-8">
                  Learn More
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Install Prompt */}
      <InstallPrompt />
    </div>
  )
}
