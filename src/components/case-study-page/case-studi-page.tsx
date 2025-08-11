interface CaseStudyPageProps {
  title: string
  content: string
}

export default function CaseStudyPage({ title, content }: CaseStudyPageProps) {
  return (
    <main className="w-screen h-screen py-12 bg-white">
      <div className="container max-w-[80%] mx-auto px-4 md:px-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-12 text-center">{title}</h1>
        <p>{content}</p>
      </div>
    </main>
  )
}
