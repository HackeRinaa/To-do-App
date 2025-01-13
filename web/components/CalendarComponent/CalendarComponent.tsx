import Calendar from "react-calendar";
import { observer } from "mobx-react-lite";
import styled from "styled-components";
import calendarStore from "../../stores/CalendarStore";
import todoStore from "../../stores/TodoStore";


const StyledCalendarContainer = styled.div`
    max-width: 1000px;
    margin: 20px auto;
    border-radius: 12px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    background-color: white;
    padding: 20px;

    .react-calendar {
        width:100%;
        border: none;
        border-radius: 12px;
    }

    .react-calendar__navigation {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 20px;
    }

    .react-calendar__navigation__arrow {
        font-size: 24px;
        color: #007aff;
        cursor: pointer;
        background: none;
        border: none;
    }

    .react-calendar__navigation__label {
        font-weight: bold;
        font-size: 36px;
        color: #333;
        background: none;
        border: none;
    }

    .react-calendar__month-view__weekdays {
        display: flex;
        justify-content: space-between;
        margin: 0;
        padding: 0;
        width: 100%;
        margin-top: 20px;
        margin-bottom: 20px;
        color: #333;
    }

    .react-calendar__month-view__weekdays__weekday {
        border-radius: 4px;
        transition: background-color 0.3s;
        font-size: 24px;
        color: #333;
        font-weight: 300;
        text-decoration: none;
        text-align: center;
    }

    .react-calendar__month-view__weekdays__weekday:hover {
        background-color: rgba(0, 123, 255, 0.50);
    }

    .react-calendar__month-view__days {
        flwx-wrap: nowrap;
        margin
    }

    .react-calendar__month-view__days__day {
        padding: 20px;
        margin: 0;
        border-radius: 8px;
        background-color: transparent;
        transition: background-color 0.3s;
        border: 1px solid #ddd;
        text-align: center;
    }

    .react-calendar__month-view__days__day:hover {
        background-color: rgba(0, 123, 255, 0.50);
    }

    .react-calendar__tile.react-calendar__tile--now {
        background-color:rgba(251, 84, 7, 0.50);
    }

    .react-calendar__tile--active {
        background-color: #007aff;
        color: white;
        border-radius: 8px;
    }

    .react-calendar__tile--active:disabled {
        background-color: none;
    }


  
    .react-calendar__year-view__months {
        flex-wrap:  nowrap;
        margin-top: 20px;
        margin-bottom :20px;
    }

    .react-calendar__year-view__months__month {
        padding: 15px;
        margin: 0;
        border-radius: 8px;
        background-color: #f9f9f9;
        transition: background-color 0.3s, transform 0.2s;
        text-align: center;
        font-size: 18px;
        font-weight: bold;
        color: #333;
        border: 1px solid #ddd;
        cursor: pointer;
    }

    .react-calendar__year-view__months__month:hover {
        background-color: rgba(0, 123, 255, 0.50);
        transform: scale(1.05); /* Slight zoom effect on hover */
    }

    .react-calendar__tile--now {
        background-color: #007aff; /* Highlight for the current month */
        color: white;
        font-weight: bold;
    }

    .react-calendar__tile--now:hover {
        background-color: #005bb5; /* Darker blue on hover for the current month */
    }

    .react-calendar__tile--active {
        background-color: #007aff;
        color: white;
        border-radius: 8px;
    }
`;


const CalendarComponent: React.FC = observer(() => {


    const handleDateChange = (newValue: Date | [Date, Date]) => {
        if (Array.isArray(newValue)) {
            calendarStore.setValue(newValue[0]);
        } else {
            calendarStore.setValue(newValue);
        }

        const dateStr = newValue instanceof Date ? newValue.toISOString().split("T")[0] : "";
        todoStore.setCurrentDate(dateStr);
        console.log("Current date set in todoStore:", dateStr); 

    };

  return (
    <StyledCalendarContainer>
      <Calendar
        onChange={handleDateChange}
        value={calendarStore.value}
        locale="en-GB" // Set the locale (e.g., en-GB for Monday as the first day of the week)
        
      />
    </StyledCalendarContainer>
  );
});

export default CalendarComponent;
