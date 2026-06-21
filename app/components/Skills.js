export default function Skills() {
    // รายชื่อทักษะง่ายๆ สั้นๆ 5 ตัว
    const ทักษะของผม = ["การพูด", "ฟัง", "อ่าน", "เขียน", "จำ"];

    return (
        <section style={{ padding: '40px 20px', backgroundColor: '#ffffff', textAlign: 'center' }}>
            {/* ปรับสีหัวข้อให้เข้มชัดเจน */}
            <h2 style={{ color: '#1a1a1a', fontSize: '2rem', marginBottom: '10px' }}>
                ทักษะของผม
            </h2>

            <div style={{ display: 'flex', justifyContent: 'center', gap: '50px', flexWrap: 'wrap', marginTop: '30px' }}>
                {ทักษะของผม.map((skill, index) => (
                    <span
                        key={index}
                        style={{
                            padding: '20px 36px',
                            backgroundColor: 'white',
                            border: '2px solid #1a1a1a', // ปรับเส้นขอบให้หนาและชัดขึ้น
                            borderRadius: '20px',
                            color: '#1a1a1a',            // กำหนดสีตัวอักษรให้เข้มชัดเจน
                            fontWeight: 'bold',          // ปรับให้ตัวหนาเพื่อให้อ่านง่าย
                            fontSize: '1.1rem',          // เพิ่มขนาดตัวอักษรเล็กน้อย
                            boxShadow: '0 4px 6px rgba(0,0,0,0.05)' // เพิ่มเงาบางๆ ให้กล่องลอยเด่นขึ้นมา
                        }}
                    >
                        {skill}
                    </span>
                ))}
            </div>
        </section>
    );
}