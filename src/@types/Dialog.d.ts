import type { SelectOption } from './SelectOption';

type DialogNode = {
    message: string[];

    options?: DialogOption[];
    onFinish?: () => void;
};

type DialogOption = SelectOption & {
    isBlocked?: boolean;
    onChoose?: () => void;
};
