"use client"

import { TrendingUp } from "lucide-react"
import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts"

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart"

export const description = "CO₂ emissions by country (1967–2007)"

type ChartLineMultipleProps = {
    title: string;
    description?: string;
    chartData?: unknown[];
    details?: string;
    chartConfig: ChartConfig;
}

export function ChartLineMultiple({ title, description, chartData, details, chartConfig }: ChartLineMultipleProps) {
    return (
        <Card className="flex max-w-200">
            <CardHeader>
                <CardTitle>{title}</CardTitle>
                {description && (<CardDescription>{description}</CardDescription>)}
            </CardHeader>

            <CardContent>
                <ChartContainer config={chartConfig} className="flex max-h-100">
                    <LineChart
                        accessibilityLayer
                        data={chartData}
                        margin={{ left: 12, right: 12, top: 8, bottom: 0 }}
                    >
                        <CartesianGrid vertical={false} />
                        <XAxis
                            dataKey="year"
                            tickLine={false}
                            axisLine={false}
                            tickMargin={8}

                        />
                        <YAxis
                            width={36}
                            tickLine={false}
                            axisLine={false}
                            tickMargin={8}
                            tickFormatter={(v: number) => v.toFixed(0)}
                        />
                        {/* <ChartTooltip cursor={false} content={<ChartTooltipContent />} /> */}
                        {Object.keys(chartConfig).map((key) => (
                            <Line
                                key={key}
                                dataKey={key}
                                type="linear"
                                stroke={chartConfig[key].color}
                                strokeWidth={2}
                                dot={false}
                                strokeDasharray={chartConfig[key].dashArray} // <- optional
                            />
                        ))}
                    </LineChart>
                </ChartContainer>
            </CardContent>

            <CardFooter>
                <div className="flex w-full items-start gap-2 text-sm">
                    <div className="grid gap-2">
                        {/* <div className="flex items-center gap-2 leading-none font-medium">
                            Trending up by 5.2% this decade <TrendingUp className="h-4 w-4" />
                        </div> */}
                        {details && (<div className="text-muted-foreground flex items-center gap-2 leading-none">
                            {details}
                        </div>)}
                    </div>
                </div>
            </CardFooter>
        </Card>
    )
}
