import type { DifficultyType } from '@/constants/maps/Difficulty';
import { useObjectState } from '@/hooks/useObjectState';
import { type ReactNode, createContext, useContext } from 'react';

export type ProfileType = {
    name?: string;
    age?: number;
    gender?: 'male' | 'female' | 'other';
    knowledgeLevel?: DifficultyType;
    isReady?: boolean;
    score?: number;
    currentQuestion?: number;
};

type ProfileContextType = {
    profile: ProfileType;
    setProfile: (partial: Partial<ProfileType>) => void;
} | null;

const ProfileContext = createContext<ProfileContextType>(null);

export function useProfileContext() {
    const context = useContext(ProfileContext);

    if (context === null) {
        throw new Error('Profile Context Error!');
    }

    return context;
}

export function ProfileContextProvider({ children }: { children: ReactNode }) {
    const [profile, _, setProfile] = useObjectState<ProfileType>({
        isReady: false,
    });

    return (
        <ProfileContext.Provider value={{ profile, setProfile }}>
            {children}
        </ProfileContext.Provider>
    );
}
