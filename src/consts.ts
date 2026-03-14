import type { IconMap, SocialLink, Site } from '@/types'

export const SITE: Site = {
  title: import.meta.env.SITE_TITLE || 'The Culture',
  description:
    import.meta.env.SITE_DESCRIPTION ||
    'Artificial Intelligence & Reinforcement Learning Laboratory',
  href: import.meta.env.SITE_URL || 'http://localhost:1234',
  author: import.meta.env.SITE_AUTHOR || 'The Culture',
  locale: import.meta.env.SITE_LOCALE || 'en-US',
  featuredPostCount: 3,
  postsPerPage: 10,
}

export const NAV_LINKS: SocialLink[] = [
  {
    href: '/blog',
    label: 'research',
  },
  {
    href: '/about',
    label: 'about',
  },
]

// Build social links dynamically from environment variables
const socialLinksConfig: (SocialLink | false)[] = [
  import.meta.env.GITHUB_URL && {
    href: import.meta.env.GITHUB_URL,
    label: 'GitHub',
  },
  import.meta.env.TWITTER_URL && {
    href: import.meta.env.TWITTER_URL,
    label: 'Twitter',
  },
  import.meta.env.EMAIL && {
    href: `mailto:${import.meta.env.EMAIL}`,
    label: 'Email',
  },
  {
    href: '/rss.xml',
    label: 'RSS',
  },
]

export const SOCIAL_LINKS: SocialLink[] = socialLinksConfig.filter(
  (link): link is SocialLink => Boolean(link)
)

export const ICON_MAP: IconMap = {
  Website: 'lucide:globe',
  GitHub: 'lucide:github',
  LinkedIn: 'lucide:linkedin',
  Twitter: 'lucide:twitter',
  Email: 'lucide:mail',
  RSS: 'lucide:rss',
}
