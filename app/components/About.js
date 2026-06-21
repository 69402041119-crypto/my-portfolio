// app/components/About.js
export default function About() {
    return (
        // bg-gray-50 = สีพื้นหลังเทาอมขาว / text-gray-800 = สีตัวอักษรเทาเข้มเกือบดำ
        <section className="text-center bg-gray-50 text-gray-800 py-12 px-6 rounded-lg shadow-sm">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">แนะนำตัว</h2>
            <p className="max-w-2xl mx-auto leading-relaxed text-lg">
                สวัสดีครับ ตอนนี้กำลังศึกษาปริญญาตรี
                และสนใจในด้าน เว็บไซต์และ AI ถึงอาจจะยังไม่คล่องและยังไม่เก่ง แต่จะพัฒนาและฝึกฝนทำบ่อยๆครับ
            </p>
        </section>
    );
}