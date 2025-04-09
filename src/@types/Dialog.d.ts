import type { SelectOption } from './SelectOption';

type DialogNode = {
    message: string[];

    options?: DialogOption[];
    onFinish?: () => void;
    nextNodeKey?: string;
};

type DialogOption = SelectOption & {
    isBlocked?: boolean;
    onChoose?: () => void;
};
