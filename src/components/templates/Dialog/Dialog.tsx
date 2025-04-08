import type { DialogNode } from '@/@types/Dialog';
import { Feedback } from '@/components/layout/Feedback/Feedback';
import { LilithSpeech } from '@/components/layout/LilithSpeech/LilithSpeech';
import { useState } from 'react';

interface DialogRendererProps<T extends string> {
    dialogsRecord: Record<T, DialogNode>;
    startDialogKey: T;
}

export function DialogRenderer<T extends string>({
    dialogsRecord,
    startDialogKey,
}: DialogRendererProps<T>) {
    const [isWaitingFeedback, setIsWaitingFeedback] = useState(false);
    const [dialogKey, setDialogKey] = useState(startDialogKey);

    const currentDialog = dialogsRecord[dialogKey];

    function handleFeedback(feedback: string) {
        setDialogKey(feedback as T);
    }

    return (
        <>
            <LilithSpeech
                message={currentDialog.message}
                onFinish={() => {
                    if (currentDialog.onFinish) {
                        currentDialog.onFinish();
                    }
                    setIsWaitingFeedback(true);
                }}
            />
            {isWaitingFeedback && currentDialog.options && (
                <Feedback
                    options={currentDialog.options}
                    handleFeedback={handleFeedback}
                />
            )}
        </>
    );
}
