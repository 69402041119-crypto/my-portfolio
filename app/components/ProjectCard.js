export default function ProjectCard() {
    // 1. สร้างข้อมูลจำลองเป็น Array 3 อัน
    const myProjects = [
        { id: 1, title: "ระบบคลังสินค้า", desc: "เว็บจัดการสต็อกสินค้าออนไลน์" },
        { id: 2, title: "แอพส่งอาหาร", desc: "แอพพลิเคชันสั่งอาหารใกล้บ้าน" },
        { id: 3, title: "พอร์ตโฟลิโอ", desc: "เว็บไซต์แนะนำตัวเองและผลงาน" }
    ];

    return (
        <section className="p-6 bg-gray-50 min-h-screen">
            <h2 className="text-2xl font-black text-gray-900 mb-4">ผลงานของฉัน</h2>

            {/* 2. ใช้ .map() เพื่อแปลงข้อมูลเป็นตัวการ์ด */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {myProjects.map((project) => (
                    <ProjectCard
                        key={project.id}
                        title={project.title}
                        desc={project.desc}
                    />
                ))}
            </div>
        </section>
    );
}