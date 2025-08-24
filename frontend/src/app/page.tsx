import { Button } from "./components/ui/button";

const top = () => {
  return (
    <main>
      <section>
        <h1>Artpia</h1>
        <div>
          <Button>画像生成</Button>
          <Button>展示会情報</Button>
          <Button>設定</Button>
        </div>
      </section>
    </main>
  )
}

export default top