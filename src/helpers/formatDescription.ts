export function formatDescription(description: string) {
    const normalLines: string[] = [];
    const listItems: string[] = [];

    description.split("\n").forEach((line) => {
        if (line.startsWith("- ")) {
            listItems.push(line);
        } else {
            normalLines.push(line);
        }
    });

    return {
        normalLines: normalLines.join("\n"),
        listItems: listItems,
    };
}
