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