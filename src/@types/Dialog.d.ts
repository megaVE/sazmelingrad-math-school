import type { SelectOption } from './SelectOption';
import type { ColorTheme } from './Themes';

export type DialogOption = SelectOption & {
    isBlocked?: boolean;
    onChoose?: () => void;
    theme?: ColorTheme;
};

export type DialogNode = {
    message: string[];

    options?: DialogOption[];
    onFinish?: () => void;
    nextNodeKey?: string;
};
