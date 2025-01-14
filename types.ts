export interface IComment {
    id: string;
    user: string;
    time_ago: string;
    content: string;
    comments: IComment[];
  }
  
  export interface IStory {
    id: string;
    points: string;
    url: string;
    title: string;
    domain: string;
    type: string;
    time_ago: string;
    user: string;
    comments_count: number;
    comments: IComment[];
  }
  