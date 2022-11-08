import type { MarkdownInstance, MarkdownLayoutProps } from 'astro';


type PostsListProps = {
    posts: MarkdownInstance<Record<string, any>>[]
}

export function PostsList({ posts }: PostsListProps): JSX.Element {



    return <ul className="hover:list-['➨'] hover:marker:text-emerald-700 list-none list-inside">
        {posts.map((post) => <li key={post.url}><a className='text-green-500' href={post.url}> {post.frontmatter.title}</a></li>)}
    </ul>

}