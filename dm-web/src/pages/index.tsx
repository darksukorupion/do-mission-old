import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className={`text-2xl font-bold text-center space-y-4 pt-10`}>
        <h1 className={`text-5xl`}>Do Mission</h1>
        <p>あなたのモチベーション管理をサポートします</p>
        <div>
          <Link href="/record" className={`mx-auto text-blue-600`}>
            チャレンジする
          </Link>
        </div>
      </div>
    </>
  );
}
