import { ChartLineMultiple, ChartSpec } from "@/components/ui/multilinechart";
import visitors from "../../_data/visitors.json"
import { ChartConfig } from "@/components/ui/chart";

export default function page() {
    const emissionsSpec: ChartSpec = {
        title: "Average carbon dioxide (CO₂) emissions per person, 1967-2007 ",
        description: "The graph below shows average carbon dioxide (Co2) emissions per person in the United Kingdom, Sweden, Italy, and Portugal between 1967 and 2007.",
        chartData: [
            { year: 1967, uk: 10.7, sweden: 8.7, italy: 4.2, portugal: 1.2 },
            { year: 1977, uk: 10.8, sweden: 10.2, italy: 6.3, portugal: 2.0 },
            { year: 1987, uk: 10.1, sweden: 7.2, italy: 6.7, portugal: 3.2 },
            { year: 1997, uk: 9.5, sweden: 6.1, italy: 7.6, portugal: 5.2 },
            { year: 2007, uk: 8.9, sweden: 5.4, italy: 7.6, portugal: 5.4 },
        ],
        details: "CO₂ emissions in metric tonnes",
        chartConfig: {
            uk: { label: "United Kingdom", color: "var(--chart-1)" },
            sweden: { label: "Sweden", color: "var(--chart-2)" },
            italy: { label: "Italy", color: "var(--chart-3)" },
            portugal: { label: "Portugal", color: "var(--chart-4)" },
        },
    }

    const admissionsSpec: ChartSpec = {
        title: "Weekly Hospital Admissions",
        description: "Fortsmith, Adlin, Stanton, Bardley, Oxley — 2004–2018",
        chartData: [
            { year: 2004, fortsmith: 180, adlin: 120, stanton: 80, bardley: 200, oxley: 240 },
            { year: 2006, fortsmith: 190, adlin: 135, stanton: 115, bardley: 220, oxley: 220 },
            { year: 2008, fortsmith: 200, adlin: 130, stanton: 120, bardley: 240, oxley: 210 },
            { year: 2010, fortsmith: 220, adlin: 125, stanton: 130, bardley: 250, oxley: 190 },
            { year: 2012, fortsmith: 190, adlin: 140, stanton: 145, bardley: 260, oxley: 170 },
            { year: 2014, fortsmith: 210, adlin: 160, stanton: 130, bardley: 240, oxley: 150 },
            { year: 2016, fortsmith: 210, adlin: 190, stanton: 140, bardley: 260, oxley: 130 },
            { year: 2018, fortsmith: 200, adlin: 250, stanton: 160, bardley: 270, oxley: 110 },
        ],
        details: "Weekly hospital admissions (number of patients)",
        chartConfig: {
            fortsmith: { label: "Fortsmith", color: "var(--chart-1)", dashArray: "5 5" },
            adlin: { label: "Adlin", color: "var(--chart-2)" },
            stanton: { label: "Stanton", color: "var(--chart-3)", dashArray: "2 4" },
            bardley: { label: "Bardley", color: "var(--chart-4)" },
            oxley: { label: "Oxley", color: "var(--chart-5)", dashArray: "8 4" },
        },
    }

    return (
        <>
            <ChartLineMultiple spec={emissionsSpec} />
            <ChartLineMultiple spec={admissionsSpec} />
        </>
    )
}
