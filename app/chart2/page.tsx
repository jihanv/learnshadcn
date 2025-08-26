import { ChartLineMultiple } from "@/components/ui/multilinechart";
import visitors from "../../_data/visitors.json"
import { ChartConfig } from "@/components/ui/chart";

export default function page() {
    const title = "CO₂ Emissions"
    const description = "United Kingdom, Sweden, Italy, Portugal — 1967–2007"
    const chartData = [
        { year: 1967, uk: 10.7, sweden: 8.7, italy: 4.2, portugal: 1.2 },
        { year: 1977, uk: 10.8, sweden: 10.2, italy: 6.3, portugal: 2.0 },
        { year: 1987, uk: 10.1, sweden: 7.2, italy: 6.7, portugal: 3.2 },
        { year: 1997, uk: 9.5, sweden: 6.1, italy: 7.6, portugal: 5.2 },
        { year: 2007, uk: 8.9, sweden: 5.4, italy: 7.6, portugal: 5.4 },
    ]

    const details = "CO₂ emissions per capita (metric tonnes)"

    const chartConfig = {
        uk: { label: "United Kingdom", color: "var(--chart-1)" },
        sweden: { label: "Sweden", color: "var(--chart-2)" },
        italy: { label: "Italy", color: "var(--chart-3)" },
        portugal: { label: "Portugal", color: "var(--chart-4)" },
    } satisfies ChartConfig

    const title2 = "Weekly Hospital Admissions"
    const description2 = "Fortsmith, Adlin, Stanton, Bardley, Oxley — 2004–2018"
    const chartData2 = [
        { year: 2004, fortsmith: 180, adlin: 120, stanton: 80, bardley: 200, oxley: 240 },
        { year: 2006, fortsmith: 190, adlin: 135, stanton: 115, bardley: 220, oxley: 220 },
        { year: 2008, fortsmith: 200, adlin: 130, stanton: 120, bardley: 240, oxley: 210 },
        { year: 2010, fortsmith: 220, adlin: 125, stanton: 130, bardley: 250, oxley: 190 },
        { year: 2012, fortsmith: 190, adlin: 140, stanton: 145, bardley: 260, oxley: 170 },
        { year: 2014, fortsmith: 210, adlin: 160, stanton: 130, bardley: 240, oxley: 150 },
        { year: 2016, fortsmith: 210, adlin: 190, stanton: 140, bardley: 260, oxley: 130 },
        { year: 2018, fortsmith: 200, adlin: 250, stanton: 160, bardley: 270, oxley: 110 },
    ]

    const details2 = "Weekly hospital admissions (number of patients)"

    const chartConfig2 = {
        fortsmith: { label: "Fortsmith", color: "var(--chart-1)", dashArray: "5 5" },
        adlin: { label: "Adlin", color: "var(--chart-2)" }, // solid
        stanton: { label: "Stanton", color: "var(--chart-3)", dashArray: "2 4" }, // dotted
        bardley: { label: "Bardley", color: "var(--chart-4)" },
        oxley: { label: "Oxley", color: "var(--chart-5)", dashArray: "8 4" },
    } satisfies ChartConfig

    return (
        <>
            <ChartLineMultiple title={title} description={description} chartData={chartData} details={details} chartConfig={chartConfig} />
            <ChartLineMultiple title={title2} description={description2} chartData={chartData2} details={details2} chartConfig={chartConfig2} />
        </>
    )
}
