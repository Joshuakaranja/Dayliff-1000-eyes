import {events} from '../data/mockEvents';
import {groupByRequest} from '../utils/helpers';

function Dashboard() {
    const groupedEvents = groupByRequest(events);

    return (
        <div>
            <h2>Requests</h2>
            {requestIds.map((id)=>(
                <p key={id} onClick={()=> setSelectedId(id)}>{id}</p>
            ))}
            {selectedid&&(
                <div>
                    <h3>selected: {selectedid}</h3>
                </div>
            )}
        </div>
    );
}

export default Dashboard;