"use client";

import { TEAM, TEAM_IMAGES } from "@/lib/data/content";
import { RevealGroup, RevealItem } from "@/components/animated/reveal";
import ProfileCard from "@/components/animated/profile-card";

const FALLBACK_IMAGE = "photo-1519389950473-47ba0277781c";

const contactMember = (name: string) => {
  const subject = encodeURIComponent(`Halo tim K3L Hub — pesan untuk ${name}`);
  window.location.href = `mailto:contact@k3lhub.id?subject=${subject}`;
};

export function TeamGrid() {
  return (
    <RevealGroup
      className="flex flex-wrap items-start justify-center gap-6"
      stagger={0.06}
    >
      {TEAM.map((member) => {
        const imageId = TEAM_IMAGES.get(member.id) ?? FALLBACK_IMAGE;
        const imageUrl = `https://images.unsplash.com/${imageId}?auto=format&fit=crop&w=680&q=75`;
        const miniUrl = `https://images.unsplash.com/${imageId}?auto=format&fit=crop&w=96&q=60`;

        return (
          <RevealItem key={member.id} className="flex justify-center">
            <ProfileCard
              avatarUrl={imageUrl}
              miniAvatarUrl={miniUrl}
              name={member.name}
              title={member.role}
              handle={member.nim}
              status="Aktif"
              statusColor="#4a7233"
              contactText="Kontak"
              onContactClick={() => contactMember(member.name)}
              theme="light"
              radius={18}
              tiltStrength={10}
              className="drop-shadow-sm"
            />
          </RevealItem>
        );
      })}
    </RevealGroup>
  );
}
