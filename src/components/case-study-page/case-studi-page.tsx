interface ProductDetailsPageProps {
  params: {
    id: string
  }
}

export default function CaseStudyPage({ params }: ProductDetailsPageProps) {
  const { id } = params


  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-64px)] p-4">
      <h1 className="text-3xl font-bold mb-4">Детали продукта</h1>
      <p className="text-lg text-muted-foreground">
        Вы просматриваете продукт с ID: <span className="font-semibold text-primary">{id}</span>
      </p>
      <p className="mt-2 text-center max-w-md">
        Здесь будут отображаться подробные сведения о продукте, загруженные на основе его ID.
      </p>
    </div>
  )
}