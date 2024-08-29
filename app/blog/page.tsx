import Link from "next/link";

const news = [
  {
    id: "berita-1",
  },
  {
    id: "berita-2",
  },
  {
    id: "berita-3",
  },
];

export default function Blog({ params }: { params: { id: string } }) {
  return (
    <div>
      Ini blog
      <ul>
        {news.map((news) => (
          <Link href={`/blog/${news.id}`}>
            <li>{news.id}</li>
          </Link>
        ))}
      </ul>
    </div>
  );
}
