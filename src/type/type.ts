interface iPerson {
  name: string;
}

interface iMeeting {
  order: number;
  endedAt: string;
  startedAt: string;
}

export interface iClub extends iPerson {
  id: string
  type: string
  place: string
  coverUrl: string
  meetings: Array<iMeeting>
  description: string
}

export interface iResponseClubInfo {
  club: iClub;
  price: number
  leaders: Array<iPerson>
  partners: Array<iPerson>,
  createdAt: string
}
