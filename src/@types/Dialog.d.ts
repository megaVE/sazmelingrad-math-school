import type { ThemeType } from '@/constants/maps/Theme';
import type { SelectOption } from './SelectOption';

export type DialogOption = SelectOption & {
    isBlocked?: boolean;
    onChoose?: () => void;
    theme?: ThemeType;
};

export type DialogNode = {
    message: string[];

    options?: DialogOption[];
    onFinish?: () => void;
    nextNodeKey?: string;
};
