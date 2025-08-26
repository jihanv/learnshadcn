"use client"

import React, { forwardRef } from "react"
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"

// If your project exports these from a single file, keep these imports;
// otherwise, adjust to your local paths.
import {
    ChartContainer,
    type ChartConfig,
    ChartLegend,
    ChartLegendContent,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart"

const chartData = [
    { month: "January", desktop: 186, mobile: 80 },
    { month: "February", desktop: 305, mobile: 200 },
    { month: "March", desktop: 237, mobile: 120 },
    { month: "April", desktop: 73, mobile: 190 },
    { month: "May", desktop: 209, mobile: 130 },
    { month: "June", desktop: 214, mobile: 140 },
]

const chartConfig = {
    desktop: { label: "Desktop", color: "#2563eb" },
    mobile: { label: "Mobile", color: "#60a5fa" },
} satisfies ChartConfig

// Forward a ref to the outer wrapper so the page can access the <svg> for export
export const Chart1 = forwardRef<HTMLDivElement, {}>(function Chart1(_, ref) {
    return (
        <div ref={ref} className="w-full max-w-2xl">
            <ChartContainer config={chartConfig} className="min-h-[260px] w-full">
                <BarChart accessibilityLayer data={chartData}>
                    <CartesianGrid vertical={false} />
                    <XAxis
                        dataKey="month"
                        tickLine={false}
                        tickMargin={10}
                        axisLine={false}
                        tickFormatter={(value: string) => value.slice(0, 3)}
                    />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <ChartLegend content={<ChartLegendContent />} />
                    <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
                    <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
                </BarChart>
            </ChartContainer>
        </div>
    )
})
