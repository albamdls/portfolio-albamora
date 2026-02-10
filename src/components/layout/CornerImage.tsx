type CornerImageProps = {
    src: string
    alt?: string
}

export default function CornerImage({ src, alt }: CornerImageProps) {
    return (
        <div className="fixed left-4 top-4 z-50">
            <img
                src={src}
                alt={alt}
                className="h-14 w-14 object-cover transition hover:scale-130 dark:ring-slate-700"
            />
        </div>
    )
}
