"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, Database, PieChart, Settings, Plus, List, Apple } from "lucide-react"
import Link from "next/link"

const menuItems = [
    { icon: Calendar, title: "Log Today's Meals", description: "Record what you've eaten", href: "/log", color: "green" },
    { icon: Plus, title: "Add New Food", description: "Expand your food database", href: "/add-food", color: "green" },
    { icon: Database, title: "Food Database", description: "Browse and manage foods", href: "/database", color: "blue" },
    { icon: PieChart, title: "Nutrition Report", description: "View your nutrition stats", href: "/report", color: "orange" },
    { icon: List, title: "Meal History", description: "Review past meals", href: "/history", color: "orange" },
    { icon: Settings, title: "Settings", description: "Manage your account", href: "/settings", color: "blue" },
]

export default function Component() {
    const [activeItem, setActiveItem] = useState<string | null>(null)

    const getButtonClass = (color: string) => {
        switch (color) {
            case "green":
                return "bg-green-100 hover:bg-green-200 text-green-800"
            case "orange":
                return "bg-orange-100 hover:bg-orange-200 text-orange-800"
            default:
                return "bg-blue-100 hover:bg-blue-200 text-blue-800"
        }
    }

    const getIconClass = (color: string) => {
        switch (color) {
            case "green":
                return "text-green-600"
            case "orange":
                return "text-orange-600"
            default:
                return "text-blue-600"
        }
    }

    return (
        <div className="min-h-screen bg-gray-100 p-4">
            <Card className="mx-auto max-w-4xl">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <div className="flex items-center space-x-2">
                        <Apple className="h-8 w-8 text-green-600" />
                        <CardTitle className="text-2xl font-bold text-green-800">Food Tracker</CardTitle>
                    </div>
                </CardHeader>
                <CardContent>
                    <CardDescription className="text-center mb-6 text-gray-600">Track your meals and nutrition</CardDescription>
                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        {menuItems.map((item, index) => (
                            <Link key={index} href={item.href} passHref>
                                <Button
                                    variant="outline"
                                    className={`h-24 w-full justify-start gap-4 transition-colors ${getButtonClass(item.color)}`}
                                    onMouseEnter={() => setActiveItem(item.title)}
                                    onMouseLeave={() => setActiveItem(null)}
                                    aria-label={`Navigate to ${item.title}`}
                                >
                                    <item.icon className={`h-6 w-6 ${getIconClass(item.color)}`} />
                                    <div className="text-left">
                                        <div className="font-semibold">{item.title}</div>
                                        <div className={`text-sm ${activeItem === item.title ? 'opacity-100' : 'opacity-80'}`}>
                                            {item.description}
                                        </div>
                                    </div>
                                </Button>
                            </Link>
                        ))}
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}