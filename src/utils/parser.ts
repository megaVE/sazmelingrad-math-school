function capitalizeWord(text: string) {
    return `${text[0].toUpperCase()}${text.slice(1).toLocaleLowerCase()}`;
}

export function toPascalCase(text: string) {
    if (text.includes('_'))
        // Snake Case
        return text
            .split('_')
            .map(word => capitalizeWord(word))
            .join('');

    // Cammel Case
    return `${text[0].toUpperCase()}${text.slice(1)}`;
}

export function toCammelCase(text: string) {
    const pascalText = toPascalCase(text);

    return `${pascalText[0].toLowerCase()}${pascalText.slice(1)}`;
}
