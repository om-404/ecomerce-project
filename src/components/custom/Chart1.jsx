// "use client"

import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"

import { ChartContainer } from "../ui/chart.jsx"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card"
import { TrendingUp } from "lucide-react"

const chartData = [
  { month: "January", keyboard: 186, mouse: 80, headset: 50 },
  { month: "February", keyboard: 305, mouse: 200, headset: 50 },
  { month: "March", keyboard: 237, mouse: 120, headset: 50 },
  { month: "April", keyboard: 73, mouse: 190, headset: 50 },
  { month: "May", keyboard: 209, mouse: 130, headset: 50 },
  { month: "June", keyboard: 214, mouse: 140, headset: 50 },
]

const chartConfig = {
  keyboard: {
    label: "keyboard",
    color: "#2563eb",
  },
  mouse: {
    label: "mouse",
    color: "#60a5fa",
  },
  headset: {
    label: "headset",
    color: "#8a45e6",
  },
} 

export function Chart1() {
  return (
    <Card className="flex-1 rounded-xl bg-muted/50 md:min-h-min">
        <CardHeader>
            <CardTitle>Bar chart - Multiple</CardTitle>
            <CardDescription>January - June 2025</CardDescription>
        </CardHeader>
        <CardContent>
    <ChartContainer config={chartConfig} className="h-[350px] w-full">
      <BarChart accessibilityLayer data={chartData}>
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="month"
          tickLine={false}
          tickMargin={10}
          axisLine={false}
          tickFormatter={(value) => value.slice(0, 3)}
        />
        <Bar dataKey="keyboard" fill="var(--color-keyboard)" radius={4} />
        <Bar dataKey="mouse" fill="var(--color-mouse)" radius={4} />
        <Bar dataKey="headset" fill="var(--color-headset)" radius={4} />
      </BarChart>
    </ChartContainer>

    <CardFooter className="flex-col gap-2 items-start text-sm">
        <div className="flex gap-2 font-medium loading-none">
            Trending up by 5.2% this month
            <TrendingUp className="h-4 w-4" />
        </div>
        
        <div className="leading-none text-muted-foreground" >
            Showing total visitors for the last 6 month
        </div>
    </CardFooter>
    </CardContent>
    </Card>
  )
}
