import Hero from "./components/Hero";
const skills = ["การพูด", "การฟัง"];
function Greeting({ name }) {
    return <h1>ทักทาย {name}</h1>;
}

function Section({ title, children }) {
    return (
        <section className="py-20 px-8">
            <h2 className="text-4xl font-bold mb-8">{title}</h2>
            {children}
        </section>
    );
}
import Skills from "./components/Skills";
function Skills() {
    const skills = ["การพูด", "การฟัง"];
    return (
        <sections className="py-20 px-8">
            <h2 className="text-blue-600">ทักษะ</h2>
            <div className="flex flex-wrap gap-3">
                {skills.map((skill) => (
                    <span key={skill}>{skill}</span>
                ))}
            </div>
        </sections>
    )

}
export default function Home() {
    return (

        <main>
            <Skills />
            <Hero />
            <Greeting name="สุรชัย" />
            <Greeting name="สุ" />
            <Greeting name="สุร" />
            <Greeting name="สุรชัย" />
            <Hero />
            <Hero />
            <Hero />
            <Hero />

            <Section title="เกี่ยวกับฉัน">
                <p>ผมเป็นนักศึกษา</p>
            </Section>
            <Section title="ระดับการศึกษา"></Section>
            <p>ปริญญาตรี</p>

        </main>
    );
}