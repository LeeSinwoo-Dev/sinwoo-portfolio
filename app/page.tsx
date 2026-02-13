"use client";

import { useState } from "react";
import Image from "next/image";

// 프로젝트 및 스크립트 타입 정의
interface Script {
    name: string;
    src?: string;
    description: string;
}

interface Project {
    id: number;
    title: string;
    description: string;
    videoUrl?: string;
    details: string;
    scripts?: Script[];
}

export default function Home() {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const [selectedScript, setSelectedScript] = useState<Script | null>(null);

    const projects: Project[] = [
        {
            id: 1,
            title: "Clinical Trial -The Final- 🏥🔬",
            description: "유니티로 개발한 2.5D 퍼즐 기반 방탈출 게임",
            videoUrl: "https://www.youtube-nocookie.com/embed/so8eWI8hvxM",
            details: (
                <>
                    <p><strong>Role :</strong> PD/D</p><br />

                    <p><strong>장르 :</strong> 2.5D 방탈출 게임</p><br />

                    <p><strong>설명 :</strong></p>
                    <p>
                        플레이어는 실험실에 갇힌 상태에서 다양한 퍼즐을 풀며 탈출해야 합니다.<br />
                        각 방에는 논리적 사고와 관찰력을 요구하는 다양한 퍼즐이 배치되어 있으며,<br />
                        환경 상호작용을 통해 점점 더 난이도 높은 문제를 해결해야 합니다.
                    </p><br />

                    <p><strong>주요 특징:</strong></p>
                    <ul>
                        <li>2.5D 그래픽을 활용한 몰입감 있는 방탈출 시스템</li>
                        <li>다양한 오브젝트 인터랙션과 퍼즐 요소 구현</li>
                        <li>스토리를 따라가며 점점 밝혀지는 실험실의 비밀</li>
                    </ul>
                </>
            ),
            scripts: [
                { name: "PlayerMove", src: "/images/project1-1.jpg", description: "이 코드는 플레이어의 이동을 담당하며, Rigidbody를 활용하여 부드러운 움직임을 구현했습니다." },
                { name: "PlayerController", src: "/images/project1-2.jpg", description: "플레이어 입력을 받아 캐릭터를 제어하는 코드입니다." },
                { name: "EnemyHealth", src: "/images/project1-3.jpg", description: "적의 체력 시스템을 관리하며, 체력 감소 및 사망 처리를 담당합니다." }
            ]
        },
        {
            id: 2,
            title: "unknown 👻🔦",
            description: "유니티로 개발한 공포 퍼즐 방탈출 게임",
            videoUrl: "https://www.youtube-nocookie.com/embed/so8eWI8hvxM",
            details: `
                이 프로젝트에서는 Mirror 네트워크를 사용하여 플레이어 동기화 및 서버-클라이언트 구조를 구현했습니다.
                다양한 직업과 스킬 시스템을 도입하여 팀 플레이를 강조했습니다.
                
                주요 기능:
                - 실시간 멀티플레이 동기화
                - AI 기반 몬스터 시스템
                - 캐릭터 성장 및 장비 시스템
                - 다양한 던전과 보스 레이드
            `,
            scripts: [
                { name: "PlayerMove", src: "/images/project1-1.jpg", description: "이 코드는 플레이어의 이동을 담당하며, Rigidbody를 활용하여 부드러운 움직임을 구현했습니다." },
                { name: "PlayerController", src: "/images/project1-2.jpg", description: "플레이어 입력을 받아 캐릭터를 제어하는 코드입니다." },
                { name: "EnemyHealth", src: "/images/project1-3.jpg", description: "적의 체력 시스템을 관리하며, 체력 감소 및 사망 처리를 담당합니다." }
            ]
        },
        {
            id: 3,
            title: "SOUL ⚔️🔥",
            description: "유니티로 개발한 이세계 배경의 액션 어드벤처 RPG",
            videoUrl: "https://www.youtube-nocookie.com/embed/so8eWI8hvxM",
            details: `
                이 프로젝트에서는 Mirror 네트워크를 사용하여 플레이어 동기화 및 서버-클라이언트 구조를 구현했습니다.
                다양한 직업과 스킬 시스템을 도입하여 팀 플레이를 강조했습니다.
                
                주요 기능:
                - 실시간 멀티플레이 동기화
                - AI 기반 몬스터 시스템
                - 캐릭터 성장 및 장비 시스템
                - 다양한 던전과 보스 레이드
            `,
            scripts: [
                { name: "PlayerMove", src: "/images/project1-1.jpg", description: "이 코드는 플레이어의 이동을 담당하며, Rigidbody를 활용하여 부드러운 움직임을 구현했습니다." },
                { name: "PlayerController", src: "/images/project1-2.jpg", description: "플레이어 입력을 받아 캐릭터를 제어하는 코드입니다." },
                { name: "EnemyHealth", src: "/images/project1-3.jpg", description: "적의 체력 시스템을 관리하며, 체력 감소 및 사망 처리를 담당합니다." }
            ]
        },
        {
            id: 4,
            title: "Unlight 🎯🔫",
            description: "유니티와 Mirror를 활용하여 개발한 4인 협동 멀티플레이 TPS 게임",
            videoUrl: "https://www.youtube-nocookie.com/embed/so8eWI8hvxM",
            details: `
                이 프로젝트에서는 Mirror 네트워크를 사용하여 플레이어 동기화 및 서버-클라이언트 구조를 구현했습니다.
                다양한 직업과 스킬 시스템을 도입하여 팀 플레이를 강조했습니다.
                
                주요 기능:
                - 실시간 멀티플레이 동기화
                - AI 기반 몬스터 시스템
                - 캐릭터 성장 및 장비 시스템
                - 다양한 던전과 보스 레이드
            `,
            scripts: [
                { name: "PlayerMove", src: "/images/project1-1.jpg", description: "이 코드는 플레이어의 이동을 담당하며, Rigidbody를 활용하여 부드러운 움직임을 구현했습니다." },
                { name: "PlayerController", src: "/images/project1-2.jpg", description: "플레이어 입력을 받아 캐릭터를 제어하는 코드입니다." },
                { name: "EnemyHealth", src: "/images/project1-3.jpg", description: "적의 체력 시스템을 관리하며, 체력 감소 및 사망 처리를 담당합니다." }
            ]
        }
    ];

    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <div className="max-w-4xl mx-auto space-y-6">
                <header className="text-center">
                    <h1 className="text-4xl font-bold text-gray-800">이신우의 포트폴리오</h1>
                    <p className="text-gray-600">게임 클라이언트 개발자 | 유니티 | 멀티플레이 시스템</p>
                </header>

                <section>
                    <h2 className="text-2xl font-semibold text-gray-700 mb-4">프로젝트</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {projects.map((project) => (
                            <div key={project.id} className="p-4 bg-white shadow-md rounded-xl">
                                <h3 className="text-lg font-medium">{project.title}</h3>
                                <p className="text-gray-600">{project.description}</p>
                                <button
                                    className="mt-2 px-4 py-2 bg-blue-500 text-white rounded"
                                    onClick={() => {
                                        setSelectedProject(project);
                                        setSelectedScript(null);
                                    }}
                                >
                                    자세히 보기
                                </button>
                            </div>
                        ))}
                    </div>
                </section>

                {selectedProject && !selectedScript && (
                    <section className="p-4 bg-white shadow-md rounded-xl mt-6">
                        <h2 className="text-2xl font-semibold text-gray-700 mb-4">{selectedProject.title}</h2>
                        {selectedProject.videoUrl && (
                            <div className="mb-4">
                                <iframe
                                    className="w-full h-64 rounded-lg"
                                    src={selectedProject.videoUrl}
                                    title="YouTube video player"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    referrerPolicy="strict-origin-when-cross-origin"
                                ></iframe>
                            </div>
                        )}
                        <p className="text-gray-600 whitespace-pre-line">{selectedProject.details}</p>
                        <div className="space-y-6 mt-4">
                            <h3 className="text-xl font-semibold text-gray-700">스크립트 목록</h3>
                            <div className="flex flex-wrap gap-2">
                                {selectedProject.scripts?.length ? (
                                    selectedProject.scripts.map((script, index) => (
                                        <button
                                            key={index}
                                            className="px-4 py-2 bg-gray-200 rounded-lg text-gray-800"
                                            onClick={() => setSelectedScript(script)}
                                        >
                                            {script.name}
                                        </button>
                                    ))
                                ) : (
                                    <p className="text-gray-600">스크립트 정보가 없습니다.</p>
                                )}
                            </div>
                        </div>
                        <button
                            className="mt-4 px-4 py-2 bg-red-500 text-white rounded"
                            onClick={() => setSelectedProject(null)}
                        >
                            닫기
                        </button>
                    </section>
                )}

                {selectedScript && (
                    <section className="p-4 bg-white shadow-md rounded-xl mt-6">
                        <h2 className="text-2xl font-semibold text-gray-700 mb-4">{selectedScript.name} 코드</h2>
                        {selectedScript.src ? (
                            <Image
                                src={selectedScript.src}
                                alt={selectedScript.name}
                                width={800}
                                height={600}
                                className="rounded-lg shadow w-full"
                            />
                        ) : (
                            <p className="text-gray-600">이미지가 없습니다.</p>
                        )}
                        <p className="text-gray-600 mt-4">{selectedScript.description || "설명이 없습니다."}</p>
                        <button
                            className="mt-4 px-4 py-2 bg-red-500 text-white rounded"
                            onClick={() => setSelectedScript(null)}
                        >
                            닫기
                        </button>
                    </section>
                )}

                <section>
                    <h2 className="text-2xl font-semibold text-gray-700 mb-4">기술 스택</h2>
                    <div className="flex flex-wrap gap-2">
                        {["Unity", "C#", "Mirror", "React", "Next.js", "Vercel"].map((tech) => (
                            <span key={tech} className="px-4 py-2 bg-gray-200 rounded-lg text-gray-800">{tech}</span>
                        ))}
                    </div>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-gray-700 mb-4">연락처</h2>
                    <p className="text-gray-600">문의는 아래로 연락 주세요:</p>
                    <p className="text-gray-800 font-medium">📧 lee_sin_woo@naver.com</p>

                </section>
            </div>
        </div>
    );
}
