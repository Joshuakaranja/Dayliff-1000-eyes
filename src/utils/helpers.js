export function groupByRequest(events) {
    return events.reduce((acc, event) => {
        const { requestId } = event;
        if (!acc[requestId]) {
            acc[requestId] = [];
        }
        acc[requestId].push(event);
        return acc;
    }, {});
}