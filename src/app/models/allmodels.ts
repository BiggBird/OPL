export class SubCategory {
	id: number;
	name: string;
	count: number;

	constructor(id:number, name:string, count:number) {
		this.id = id;
    	this.name = name;
		this.count = count;
	}
}

export class Category {
	id: number;
	name: string;
	count: number;
	sub_categories: SubCategory[];

	constructor(id:number, name:string, count:number) {
		this.id = id;
    this.name = name;
		this.count = count;
		this.sub_categories = [];
	}

	addSubCategory(id:number, name:string, count:number) {
		this.sub_categories.push(new SubCategory(id, name, count));
	}
}

export interface Lesson {
	id: number;
	name: string;
	description: string;
	youtube_url: string;
	git_url: string;
	published_timestamp: number;
	author_name: string;
	category: Category[];
	sub_category: SubCategory[];
	//published_dttm: new Date(this.published_timestamp * 1000).toLocaleString();

	// get_published_dttm(): string {
	// 	return new Date(this.published_timestamp * 1000).toLocaleString();
	// }
}

export interface LessonState {
	lesson: Lesson
	navigationId: string
}

export interface Contributor {
	id: number;
	email: string;
	name: string;
	display_name: string;
	profile_pic: string;
	lesson_count: number;
	about_me: string;
	user_handle: string;
	skills: any;
}

export interface CurrentUser {

}
