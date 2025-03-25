import type { State } from '@/@types/State';
import type { SelectHTMLAttributes } from 'react';

interface SelectProps<T = string>
    extends SelectHTMLAttributes<HTMLSelectElement> {
    label?: string;
    options: Map<string, T>;
    state?: State<T>;
}

export function Select({ id, label, options, state, ...props }: SelectProps) {
    const stateProps: Partial<SelectHTMLAttributes<HTMLSelectElement>> = state
        ? {
              value: state[0],
              onChange: e => state[1](e.target.value, e.target.name),
          }
        : {};

    return (
        <div>
            {label && <label htmlFor={id}>{label}:</label>}
            <select id={id} name={id} {...props} {...stateProps}>
                {[...options].map(([value, label]) => (
                    <option key={value} value={value}>
                        {label}
                    </option>
                ))}
            </select>
        </div>
    );
}
