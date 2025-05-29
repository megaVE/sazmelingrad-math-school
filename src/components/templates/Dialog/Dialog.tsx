import type { DialogNode } from '@/@types/Dialog';
import { Feedback } from '@/components/layout/Feedback/Feedback';
import { LilithSpeech } from '@/components/layout/LilithSpeech/LilithSpeech';
import { type ReactNode, useEffect, useState } from 'react';

interface DialogRendererProps<T extends string> {
    dialogsRecord: Record<T, DialogNode>;
    startDialogKey: T;
    customSpeechComponent?: ReactNode;
}

export function DialogRenderer<T extends string>({
    dialogsRecord,
    startDialogKey,
    customSpeechComponent,
}: DialogRendererProps<T>) {
    const [isWaitingFeedback, setIsWaitingFeedback] = useState(false);
    const [dialogKey, setDialogKey] = useState(startDialogKey);

    const currentDialog = dialogsRecord[dialogKey];

    function handleFeedback(feedback: string) {
        setDialogKey(feedback as T);
        setIsWaitingFeedback(false);
    }

    function onSpeechFinish() {
        if (currentDialog.onFinish) {
            currentDialog.onFinish();
        }
        if (currentDialog.nextNodeKey) {
            return handleFeedback(currentDialog.nextNodeKey);
        }
        setIsWaitingFeedback(true);
    }

    useEffect(() => {
        if (customSpeechComponent && !currentDialog.message.length) {
            onSpeechFinish();
        }
    }, [currentDialog, customSpeechComponent]);

    return (
        <>
            {customSpeechComponent ?? (
                <LilithSpeech
                    message={currentDialog.message}
                    onFinish={onSpeechFinish}
                />
            )}
            {isWaitingFeedback && currentDialog.options && (
                <Feedback
                    options={currentDialog.options}
                    handleFeedback={handleFeedback}
                />
            )}
        </>
    );
}
