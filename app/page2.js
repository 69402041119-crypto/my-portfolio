import Image from "next/image";
export default function Home() {
    return (
        <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-teal-500">


            {/* Avatar */}
            <div className="text-8xl mb-20">{"⚽"}</div>

            {/* ชื่อ */}
            <h1 className="text-7xl font-bold text-white mb-20">
                ฉันชื่อ {"Surachai Suwannachit"}
            </h1>

            {/* Tagline */}
            <p className="text-2xl text-white/80 mb-8">
                {" ฉันชอบ ฟุตบอล"} : แล้วคุณชอบมั้ย 🫰
            </p>

            {/* 2 ปุ่ม */}
            <div className="flex gap-4">
                <button class="bg-transparent hover:bg-blue-100 text-pink-400 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                    ชอบดูบอล ✅
                </button>
                <button class="bg-transparent hover:bg-blue-100 text-pink-400 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                    ไม่เคยดู ❌
                </button>
                <button class="bg-transparent hover:bg-blue-100 text-pink-400 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                    เฉยเฉย 🟧
                </button>
                {/* ปุ่ม Projects และ Contact */}
            </div>

        </main>
    );
}