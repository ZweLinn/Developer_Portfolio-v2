// Source: schema.json

// Shared Sanity helper types referenced by the document types below.
export type Slug = {
	_type: "slug";
	current: string;
};

export type SanityImageAssetReference = {
	_ref: string;
	_type: "reference";
};

export type SanityImageHotspot = {
	_type: "sanity.imageHotspot";
	x: number;
	y: number;
	height: number;
	width: number;
};

export type SanityImageCrop = {
	_type: "sanity.imageCrop";
	top: number;
	bottom: number;
	left: number;
	right: number;
};

export type Experience = {
	_id: string;
	_type: "experience";
	_createdAt: string;
	_updatedAt: string;
	_rev: string;
	jobTitle?: string;
	company?: string;
	startDate?: string;
	endDate?: string;
};

// Shape returned by the trimmed, ordered project list projection in the routes.
// NOTE: `slug` is flattened to a string by the query (`"slug": slug.current`).
export type ProjectLists = {
	slug?: string;
	title: string;
	summary?: string;
	coverImage?: {
		asset?: SanityImageAssetReference;
		media?: unknown;
		hotspot?: SanityImageHotspot;
		crop?: SanityImageCrop;
		alt?: string;
		_type: "image";
	};
	techStack?: Array<string>;
	featured?: boolean;
};

export type Project = {
	_id: string;
	_type: "project";
	_createdAt: string;
	_updatedAt: string;
	_rev: string;
	title?: string;
	slug?: Slug;
	summary?: string;
	coverImage?: {
		asset?: SanityImageAssetReference;
		media?: unknown;
		hotspot?: SanityImageHotspot;
		crop?: SanityImageCrop;
		alt?: string;
		_type: "image";
	};
	gallery?: Array<{
		asset?: SanityImageAssetReference;
		media?: unknown;
		hotspot?: SanityImageHotspot;
		crop?: SanityImageCrop;
		_type: "image";
		_key: string;
	}>;
	description?: Array<
		| {
				children?: Array<{
					marks?: Array<string>;
					text?: string;
					_type: "span";
					_key: string;
				}>;
				style?:
					| "normal"
					| "h1"
					| "h2"
					| "h3"
					| "h4"
					| "h5"
					| "h6"
					| "blockquote";
				listItem?: "bullet" | "number";
				markDefs?: Array<{
					href?: string;
					_type: "link";
					_key: string;
				}>;
				level?: number;
				_type: "block";
				_key: string;
		  }
		| {
				asset?: SanityImageAssetReference;
				media?: unknown;
				hotspot?: SanityImageHotspot;
				crop?: SanityImageCrop;
				_type: "image";
				_key: string;
		  }
	>;
	techStack?: Array<string>;
	liveUrl?: string;
	repoUrl?: string;
	role?: string;
	startDate?: string;
	endDate?: string;
	featured?: boolean;
	order?: number;
};


export type Skills = {
  _id: string
  _type: 'skills'
  _createdAt: string
  _updatedAt: string
  _rev: string
  skillList?: Array<{
    skillName?: string
    iconClass?: string
    _key: string
  }>
}

export type Skill = {
  skillName?: string
  iconClass?: string
  _key: string
}
