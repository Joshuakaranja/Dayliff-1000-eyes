import { useState } from "react";
import { events } from "../data/mockEvents";
import { groupByRequest } from "../utils/helpers";

function Dashboard() {
  const [selectedId, setSelectedId] = useState(null);

  const grouped = groupByRequest(events);
  const requestIds = Object.keys(grouped);

  const selectedEvents = selectedId ? grouped[selectedId] : [];

  const sortedEvents = [...selectedEvents].sort(
    (a, b) => new Date(a.timestamp) - new Date(b.timestamp)
  );

  return (
    <div>
      <h2>Requests</h2>

      {requestIds.map((id) => (
        <p key={id} onClick={() => setSelectedId(id)}>
          {id}
        </p>
      ))}

      {selectedId && (
        <div>
          <h3>Timeline for {selectedId}</h3>

          {sortedEvents.map((event) => (
            <p key={event.id}>
              {event.stage} - {event.status}
            </p>
          ))}
        </div>
      )}
    </div>
  );
}

export default Dashboard;