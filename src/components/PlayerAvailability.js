import { Card } from "react-bootstrap";

const dayAvailability = {
  monday: false,
  tuesday: false,
  wednesday: false,
  thursday: false,
  friday: false,
  saturday: false,
  sunday: false,
};

const availabilityMappingTemplate = {
  morning: { ...dayAvailability },
  afternoon: { ...dayAvailability },
  evening: { ...dayAvailability },
};

function applyPlayerAvailability(availabilityMapping, playerAvailability) {
  for (let [day, times] of Object.entries(playerAvailability)) {
    for (let timeslot of times) {
      availabilityMapping[timeslot][day] = true;
    }
  }
}

const dayAbbrev = {
  monday: "M",
  tuesday: "T",
  wednesday: "W",
  thursday: "Th",
  friday: "F",
  saturday: "Sa",
  sunday: "Su",
};

const PlayerAvailabilityDayDisplay = (props) => {
  const isAvailable = props.isAvailable;
  let color = isAvailable ? "green" : "gray";
  let dayAbbreviation = dayAbbrev[props.day];
  return (
    <div
      key={props.day}
      className="circle"
      style={{ backgroundColor: color, color: "white", border: "none" }}
    >
      {dayAbbreviation}
    </div>
  );
};

const PlayerAvailabilityHeader = (props) => {
  return (
    <div style={{ textAlign: "center" }}>
      <h4>{props.value}:</h4>
    </div>
  );
};

const PlayerAvailabilityTimeslotDisplay = (props) => {
  return (
    <div style={{ flex: 1 }}>
      <h5>{props.timeslot}</h5>
    </div>
  );
};

const PlayerAvailabilityTimeslotAndDay = (props) => {
  return (
    <div style={{ display: "flex" }}>
      <PlayerAvailabilityTimeslotDisplay timeslot={props.timeslot} />
      {Object.entries(props.days).map(([day, isAvailable]) => (
        <PlayerAvailabilityDayDisplay
          day={day}
          isAvailable={isAvailable}
          key={day}
        />
      ))}
    </div>
  );
};

const PlayerAvailability = (props) => {
  const playerAvailability = {
    monday: ["morning"],
    tuesday: ["evening"],
    wednesday: [],
    thursday: ["evening"],
    friday: ["evening"],
    saturday: ["afternoon", "evening"],
    sunday: ["afternoon", "evening"],
  };

  const availabilityMapping = { ...availabilityMappingTemplate };

  applyPlayerAvailability(availabilityMapping, playerAvailability);

  return (
    <Card className="mb-4 mb-lg-0">
      <PlayerAvailabilityHeader value="Availability" />
      {Object.entries(availabilityMapping).map(
        ([timeslot, dayAvailabilityObject]) => (
          <PlayerAvailabilityTimeslotAndDay
            timeslot={timeslot}
            days={dayAvailabilityObject}
            key={timeslot}
          />
        )
      )}
    </Card>
  );
};

export default PlayerAvailability;
