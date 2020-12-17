import React, { FC, useCallback, useEffect, useState } from 'react';
import GitHubCalendar from './Calendar';

import {
    ContributionCalendarConnNode,
    ContributionDaysNode,
} from '../../api/calendar';

import { Colors } from '../../shared';

type Props = {
    login: string;
    calendarData: ContributionCalendarConnNode;
}

/**
 * Component creates Contribution Calendar by ContributionCalendarConnNode
 * @see ContributionCalendarConnNode:
 */
export const ContributionCalendar: FC<Props> = ({calendarData}) => {
    /**
     * State
     */
    const [calendarDays, setCalendarDays] = useState<{ [date: string]: number }>({})


    /**
     * Convent data to required format
     */
    const conventData = useCallback((weekDay: ContributionDaysNode) => {
        //date format 2019-12-22T00:00:00.000+00:00
        const newDate = weekDay.date.split('T')[0];
        const count = weekDay.contributionCount;
        return [newDate, count];
    }, []);

    /**
     * Change data for the calendar
     */
    useEffect(() => {
        const newCalendarData: { [date: string]: number } = {};
        calendarData?.weeks.forEach((weekDay) => {
            weekDay.contributionDays.forEach((day) => {
                const newDay = conventData(day);
                const formattedDay = newDay[0].toString();
                newCalendarData[formattedDay] = +newDay[1];
            })
        })
        setCalendarDays(newCalendarData);
    }, [calendarData, conventData])


    const date = new Date();
    const until = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();

    /**
     * Calendar colors
     */
    const panelColors = [
        Colors.gray_4,
        Colors.blue_2,
        Colors.blue_3,
        Colors.blue_4,
        Colors.blue_5,
        Colors.blue_6,
        Colors.blue_7,
        Colors.blue_8,
    ];

    /**
     * Calendar weeks and months
     */
    const weekNames =  ['', 'M', '', 'W', '', 'F', ''];
    const monthNames = [
        'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
        'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
    ];


    return (
        <GitHubCalendar
            values={calendarDays} until={until}
            weekNames={weekNames} monthNames={monthNames} dateFormat="YYYY-MM-DD" panelColors={panelColors}/>
    );

}
