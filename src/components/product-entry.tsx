"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Apple, ArrowLeft } from "lucide-react"
import Link from "next/link"

const formSchema = z.object({
    name: z.string().min(2, { message: "Food name must be at least 2 characters." }),
    protein: z.number().min(0, { message: "Protein must be a positive number." }),
    carbs: z.number().min(0, { message: "Carbs must be a positive number." }),
    fat: z.number().min(0, { message: "Fat must be a positive number." }),
    calories: z.number().min(0, { message: "Calories must be a positive number." }),
})

export default function ProductEntry() {
    const [isSubmitting, setIsSubmitting] = useState(false)

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            protein: 0,
            carbs: 0,
            fat: 0,
            calories: 0,
        },
    })

    function onSubmit(values: z.infer<typeof formSchema>) {
        setIsSubmitting(true)
        // Here you would typically send the data to your backend
        console.log(values)
        setTimeout(() => {
            setIsSubmitting(false)
            form.reset()
            alert("Food item added successfully!")
        }, 1000)
    }

    return (
        <div className="min-h-screen bg-gray-100 p-4">
            <Card className="mx-auto max-w-2xl">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <div className="flex items-center space-x-2">
                        <Apple className="h-8 w-8 text-green-600" />
                        <CardTitle className="text-2xl font-bold text-green-800">Add New Food</CardTitle>
                    </div>
                    <Link href="/main-menu" passHref>
                        <Button variant="ghost" className="text-blue-600 hover:text-blue-800">
                            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Menu
                        </Button>
                    </Link>
                </CardHeader>
                <CardContent>
                    <CardDescription className="text-center mb-6 text-gray-600">
                        Enter the nutritional information per 100 grams
                    </CardDescription>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                            <FormField
                                control={form.control}
                                name="name"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Food Name</FormLabel>
                                        <FormControl>
                                            <Input placeholder="e.g., Apple" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <div className="grid grid-cols-2 gap-4">
                                <FormField
                                    control={form.control}
                                    name="protein"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Protein (g)</FormLabel>
                                            <FormControl>
                                                <Input type="number" step="0.1" {...field} onChange={e => field.onChange(parseFloat(e.target.value))} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="carbs"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Carbs (g)</FormLabel>
                                            <FormControl>
                                                <Input type="number" step="0.1" {...field} onChange={e => field.onChange(parseFloat(e.target.value))} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="fat"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Fat (g)</FormLabel>
                                            <FormControl>
                                                <Input type="number" step="0.1" {...field} onChange={e => field.onChange(parseFloat(e.target.value))} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="calories"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Calories</FormLabel>
                                            <FormControl>
                                                <Input type="number" step="1" {...field} onChange={e => field.onChange(parseFloat(e.target.value))} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>
                            <Button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white" disabled={isSubmitting}>
                                {isSubmitting ? "Adding..." : "Add Food Item"}
                            </Button>
                        </form>
                    </Form>
                </CardContent>
            </Card>
        </div>
    )
}