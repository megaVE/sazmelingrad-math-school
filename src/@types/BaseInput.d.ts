import type { ErrorObject } from './ErrorObject';
import type { State } from './State';

export interface BaseInputProps {
    label?: string;
    state?: State<string>;
    error?: ErrorObject;
    fill?: boolean;
}
