export function formatTimestamp(timestamp: number) {
    const date = new Date(timestamp);

    // Format using toLocaleDateString for localization
    return date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
    });
}
