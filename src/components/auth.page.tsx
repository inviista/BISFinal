import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Utensils, Github, Mail } from "lucide-react"

export default function AuthPage() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-green-100 to-green-200 flex items-center justify-center p-4">
            <Card className="w-full max-w-md">
                <CardHeader className="space-y-1">
                    <div className="flex items-center justify-center space-x-2">
                        <Utensils className="h-6 w-6 text-green-600" />
                        <CardTitle className="text-2xl font-bold text-green-800">Food Tracker</CardTitle>
                    </div>
                    <CardDescription className="text-center">
                        Sign up or log in to start tracking your meals
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <Tabs defaultValue="login" className="w-full">
                        <TabsList className="grid w-full grid-cols-2">
                            <TabsTrigger value="login">Login</TabsTrigger>
                            <TabsTrigger value="signup">Sign Up</TabsTrigger>
                        </TabsList>
                        <TabsContent value="login">
                            <form>
                                <div className="grid gap-2">
                                    <Label htmlFor="email-login">Email</Label>
                                    <Input id="email-login" type="email" placeholder="m@example.com" />
                                </div>
                                <div className="grid gap-2 mt-2">
                                    <Label htmlFor="password-login">Password</Label>
                                    <Input id="password-login" type="password" />
                                </div>
                                <Button className="w-full mt-4">Log in</Button>
                            </form>
                        </TabsContent>
                        <TabsContent value="signup">
                            <form>
                                <div className="grid gap-2">
                                    <Label htmlFor="name">Name</Label>
                                    <Input id="name" type="text" placeholder="John Doe" />
                                </div>
                                <div className="grid gap-2 mt-2">
                                    <Label htmlFor="email-signup">Email</Label>
                                    <Input id="email-signup" type="email" placeholder="m@example.com" />
                                </div>
                                <div className="grid gap-2 mt-2">
                                    <Label htmlFor="password-signup">Password</Label>
                                    <Input id="password-signup" type="password" />
                                </div>
                                <Button className="w-full mt-4">Sign up</Button>
                            </form>
                        </TabsContent>
                    </Tabs>
                    <div className="relative my-4">
                        <div className="absolute inset-0 flex items-center">
                            <span className="w-full border-t" />
                        </div>
                        <div className="relative flex justify-center text-xs uppercase">
                            <span className="bg-background px-2 text-muted-foreground">Or continue with</span>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <Button variant="outline">
                            <Github className="mr-2 h-4 w-4" />
                            Github
                        </Button>
                        <Button variant="outline">
                            <Mail className="mr-2 h-4 w-4" />
                            Google
                        </Button>
                    </div>
                </CardContent>
                <CardFooter className="flex justify-center">
                    <p className="text-xs text-center text-gray-600">
                        By signing up, you agree to our Terms of Service and Privacy Policy.
                    </p>
                </CardFooter>
            </Card>
        </div>
    )
}