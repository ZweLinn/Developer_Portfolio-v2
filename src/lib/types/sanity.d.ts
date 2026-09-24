
// Source: schema.json
 export type Experience = {
  _id: string
  _type: 'experience'
  _createdAt: string
  _updatedAt: string
  _rev: string
  jobTitle?: string
  company?: string
  startDate?: string
  endDate?: string
 }

export type ProjectLists = {
    slug?: Slug
    title: string
    summary?: string
    coverImage?: {
        asset?: SanityImageAssetReference
        media?: unknown
        hotspot?: SanityImageHotspot
        crop?: SanityImageCrop
        alt?: string
        _type: 'image'
    }
    techStack?: Array<string>
    featured?: boolean
}

export type Project = {
  _id: string
  _type: 'project'
  _createdAt: string
  _updatedAt: string
  _rev: string
  title?: string
  slug?: Slug
  summary?: string
  coverImage?: {
    asset?: SanityImageAssetReference
    media?: unknown
    hotspot?: SanityImageHotspot
    crop?: SanityImageCrop
    alt?: string
    _type: 'image'
  }
  gallery?: Array<{
    asset?: SanityImageAssetReference
    media?: unknown
    hotspot?: SanityImageHotspot
    crop?: SanityImageCrop
    _type: 'image'
    _key: string
  }>
  description?: Array<
    | {
        children?: Array<{
          marks?: Array<string>
          text?: string
          _type: 'span'
          _key: string
        }>
        style?: 'normal' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'blockquote'
        listItem?: 'bullet' | 'number'
        markDefs?: Array<{
          href?: string
          _type: 'link'
          _key: string
        }>
        level?: number
        _type: 'block'
        _key: string
      }
    | {
        asset?: SanityImageAssetReference
        media?: unknown
        hotspot?: SanityImageHotspot
        crop?: SanityImageCrop
        _type: 'image'
        _key: string
      }
  >
  techStack?: Array<string>
  liveUrl?: string
  repoUrl?: string
  role?: string
  startDate?: string
  endDate?: string
  featured?: boolean
  order?: number
}
