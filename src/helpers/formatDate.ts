const months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];

/**
 * Format date
 */
export function formatDate(value: string): string {
    const date = new Date(Date.parse(value));
    const formatted_date = date.getDate() + '-' + months[date.getMonth()] + '-' + date.getFullYear();
    return formatted_date;
}
