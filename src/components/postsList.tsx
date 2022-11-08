import type { MarkdownInstance, MarkdownLayoutProps } from 'astro';


type PostsListProps = {
    posts: MarkdownInstance<Record<string, any>>[]
}

export function PostsList({ posts }: PostsListProps): JSX.Element {



    return <ul className=" list-none">
        {posts.map((post) =>
            <li key={post.url}><a className="hover:before:content-['➨'] hover:marker:text-emerald-700 text-green-500" href={post.url}> {post.frontmatter.title}</a></li>)}
    </ul>

}