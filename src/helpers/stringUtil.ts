export function makeNullStringToEmptyString(value: string | null): string {
    return value ? value : '';
}
