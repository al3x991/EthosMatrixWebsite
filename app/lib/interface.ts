export interface Post {
    title: string,
    cover_image: string,
    overview: string,
    content: any;
    _id: string;
    slug: {
        current: string;
    };
    _createdAt: string;
}