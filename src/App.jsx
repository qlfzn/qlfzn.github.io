import { Card, CardContent } from "./components/ui/Card";
import { Button } from "./components/ui/Button";
import { Github } from "lucide-react";

export default function Portfolio() {
  const projects = [
    {
      title: "Financial Transaction Load Forecasting",
      description:
        "Time-series prediction system for proactive scaling. Multivariate forecasting, online learning exploration, AWS EMR + Spark.",
      link: "#",
    },
    {
      title: "ViewLater Backend (Go)",
      description:
        "Backend-first content-saving app. Crawling, indexing, search engine pipeline. Written in Go.",
      link: "#",
    },
    {
      title: "CLI File Organiser (Go)",
      description:
        "Batch-based concurrent file organiser with pattern grouping and destination mapping.",
      link: "#",
    },
    {
      title: "ETL Pipeline (AWS + PySpark)",
      description:
        "MWAA + Step Functions ingestion pipeline, Iceberg tables, data validation, SQL modelling.",
      link: "#",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6 flex flex-col items-center">
      <header className="max-w-3xl text-center mb-10">
        <h1 className="text-4xl font-bold mb-4">Aqil Fauzan</h1>
        <p className="text-lg text-gray-600">
          Data Engineer • Backend Developer (Go) • Cloud Enthusiast
        </p>
        <a
          href="https://github.com/qlfzn"
          className="inline-flex items-center gap-2 mt-4 text-gray-700 hover:underline"
        >
          <Github size={18} /> GitHub
        </a>
      </header>

      <section className="max-w-3xl text-center mb-12 text-gray-700 leading-relaxed">
        <p className="mb-4">
          Hi! I'm Aqil — a Data Engineer and Backend Developer who enjoys building
          scalable data pipelines, API services, and distributed systems. I work
          with AWS, Spark, Go, and Python, and I love exploring performance,
          efficiency, and real-time data problems.
        </p>
        <p>
          Previously, I completed a 7-month internship as a Data Engineer,
          worked with EMR, Step Functions, Iceberg, and built SQL-based
          data models. I'm now learning backend engineering with Go while
          building practical projects like ViewLater and my file organiser CLI.
        </p>
      </section>

      <main className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl w-full">
        {projects.map((p, i) => (
          <Card key={i} className="rounded-2xl shadow">
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-2">{p.title}</h2>
              <p className="text-gray-600 mb-4">{p.description}</p>
              <Button variant="outline" asChild>
                <a href={p.link}>View Project</a>
              </Button>
            </CardContent>
          </Card>
        ))}
      </main>

      <footer className="mt-12 text-gray-500 text-sm">
        © {new Date().getFullYear()} Aqil Fauzan
      </footer>
    </div>
  );
}
