export interface ContributionCalendarNode {
    user: {
        login: string,
        contributionsCollection: {
            contributionCalendar: ContributionCalendarConnNode
        }
    }
}

export interface ContributionDaysNode {
    contributionCount: number,
    date: string
}

export interface WeeksNode {
    contributionDays: ContributionDaysNode[]
}

export interface ContributionCalendarConnNode {
    totalContributions: number,
    weeks: WeeksNode[]
}
