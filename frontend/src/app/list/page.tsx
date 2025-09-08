type List = {
  id: string;
  title: string;
  venue: string;
  city: string;
  startDate: string;
  endDate: string;
  tags: string[];
};

const LISTS: List[] = [
  {
    id: "1",
    title: "モネと印象派の世界",
    venue: "国立新美術館",
    city: "東京",
    startDate: "2025-09-01",
    endDate: "2025-11-30",
    tags: ["西洋絵画", "印象派"],
  },
  {
    id: "2",
    title: "現代アートの現在地 2025",
    venue: "大阪市立近代美術館（仮）",
    city: "大阪",
    startDate: "2025-10-10",
    endDate: "2026-01-12",
    tags: ["現代アート"],
  },
  {
    id: "3",
    title: "北斎・広重 ─ 江戸の風景",
    venue: "京都市京セラ美術館",
    city: "京都",
    startDate: "2025-08-20",
    endDate: "2025-10-05",
    tags: ["日本美術", "浮世絵"],
  },
];

const fmt = (d: string) =>
  new Date(d).toLocaleDateString("ja-JP", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

 const ListPage = () => {
  return (
    <main>
      <section>
        <h1>展示会一覧</h1>

        <ul>
          {LISTS.map((ex) => (
            <li key={ex.id}>
              <div>
                <h3>{ex.title}</h3>
                <p>{ex.venue}（{ex.city}）</p>
                <p>{fmt(ex.startDate)} 〜 {fmt(ex.endDate)}</p>

                <div>
                  {ex.tags.map((tag) => (
                    <span key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}

export default ListPage;