"use client";

import Header from "@/components/Header";
import { useEffect, useState } from "react";
import Courses from "@/components/Courses";

type Course = {
    id: number;
    title: string;
    description: string;
    imageUrl: string;
};
export default function CoursesPage() {
    const [courses, setCourses] = useState<Course[]>([]);

    useEffect(() => {
        async function fetchCourses() {
            try {
                const res = await fetch("http://localhost:8081/courses.php");
                const data = await res.json();
                setCourses(data);
            } catch (err) {
                console.error("Chyba při načítání kurzů:", err);
            }
        }

        fetchCourses();
    }, []);

    return (
        <div>
            <Header
                url={"/images/trips.png"}
                section={"Eğitimler"}
                text={"Bioenerji ve diğer kişisel gelişim eğitimlerini keşfedin"}
            />
            <Courses/>
        </div>
    );
}