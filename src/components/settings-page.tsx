import { useState } from "react"
import { Bell, Lock, ShieldCheck, Utensils } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

export default function SettingsPage() {
    const [twoFactorEnabled, setTwoFactorEnabled] = useState(false)
    const [remindersEnabled, setRemindersEnabled] = useState(false)

    return (
        <div className="container mx-auto py-10">
            <h1 className="text-3xl font-bold mb-6">Food Tracker Settings</h1>
            <div className="grid gap-6 md:grid-cols-2">
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <Lock className="h-5 w-5" />
                            Change Password
                        </CardTitle>
                        <CardDescription>Update your account password here.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form className="space-y-4">
                            <div className="space-y-2">
                                <Label htmlFor="current-password">Current Password</Label>
                                <Input id="current-password" type="password" />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="new-password">New Password</Label>
                                <Input id="new-password" type="password" />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="confirm-password">Confirm New Password</Label>
                                <Input id="confirm-password" type="password" />
                            </div>
                        </form>
                    </CardContent>
                    <CardFooter>
                        <Button>Update Password</Button>
                    </CardFooter>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <ShieldCheck className="h-5 w-5" />
                            Two-Factor Authentication
                        </CardTitle>
                        <CardDescription>Enhance your account security.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="flex items-center space-x-2">
                            <Switch
                                id="two-factor"
                                checked={twoFactorEnabled}
                                onCheckedChange={setTwoFactorEnabled}
                            />
                            <Label htmlFor="two-factor">Enable Two-Factor Authentication</Label>
                        </div>
                    </CardContent>
                    <CardFooter>
                        {twoFactorEnabled && (
                            <Button variant="outline">Configure Two-Factor Auth</Button>
                        )}
                    </CardFooter>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <Utensils className="h-5 w-5" />
                            Nutrition Goals
                        </CardTitle>
                        <CardDescription>Set your daily nutrition targets.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form className="space-y-4">
                            <div className="space-y-2">
                                <Label htmlFor="calorie-goal">Daily Calorie Goal</Label>
                                <Input id="calorie-goal" type="number" placeholder="e.g., 2000" />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="protein-goal">Daily Protein Goal (g)</Label>
                                <Input id="protein-goal" type="number" placeholder="e.g., 150" />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="carb-goal">Daily Carbohydrate Goal (g)</Label>
                                <Input id="carb-goal" type="number" placeholder="e.g., 250" />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="fat-goal">Daily Fat Goal (g)</Label>
                                <Input id="fat-goal" type="number" placeholder="e.g., 65" />
                            </div>
                        </form>
                    </CardContent>
                    <CardFooter>
                        <Button>Save Nutrition Goals</Button>
                    </CardFooter>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <Bell className="h-5 w-5" />
                            Meal Reminders
                        </CardTitle>
                        <CardDescription>Set reminders for logging your meals.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="flex items-center space-x-2">
                            <Switch
                                id="reminders"
                                checked={remindersEnabled}
                                onCheckedChange={setRemindersEnabled}
                            />
                            <Label htmlFor="reminders">Enable Meal Reminders</Label>
                        </div>
                        {remindersEnabled && (
                            <div className="mt-4 space-y-2">
                                <Label htmlFor="reminder-times">Reminder Times</Label>
                                <Input
                                    id="reminder-times"
                                    placeholder="e.g., 8:00, 12:00, 18:00"
                                />
                            </div>
                        )}
                    </CardContent>
                    <CardFooter>
                        <Button disabled={!remindersEnabled}>Save Reminder Settings</Button>
                    </CardFooter>
                </Card>
            </div>
        </div>
    )
}