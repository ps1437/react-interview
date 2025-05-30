import React from 'react';

const fetchPosts = async (page) => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    return Array.from({ length: 5 }, (_, i) => ({
        id: page * 5 + i,
        title: `Post ${page * 5 + i + 1}`,
        content: `Content for post ${page * 5 + i + 1}`
    }));
};

const fetchComments = async (page) => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    return Array.from({ length: 5 }, (_, i) => ({
        id: page * 5 + i,
        text: `Comment ${page * 5 + i + 1}`
    }));
};


export const InfiniteScrollComponent = () => {
    const [posts, setPosts] = React.useState([]);
    const [comments, setComments] = React.useState([]);
    const [postPage, setPostPage] = React.useState(1);
    const [commentPage, setCommentPage] = React.useState(1);
    const [isLoading, setIsLoading] = React.useState(false);
    const [hasMorePosts, setHasMorePosts] = React.useState(true);
    const [hasMoreComments, setHasMoreComments] = React.useState(true);

    const observer = React.useRef();

    const lastPostElementRef = React.useCallback(
        (node) => {
            if (isLoading) return;
            if (observer.current) observer.current.disconnect();
            observer.current = new IntersectionObserver((entries) => {
                if (entries[0].isIntersecting && hasMorePosts) {
                    setPostPage((prev) => prev + 1);
                }
            });
            if (node) observer.current.observe(node);
        },
        [isLoading, hasMorePosts]
    );

    const lastCommentElementRef = React.useCallback(
        (node) => {
            if (isLoading) return;
            if (observer.current) observer.current.disconnect();
            observer.current = new IntersectionObserver((entries) => {
                if (entries[0].isIntersecting && hasMoreComments) {
                    setCommentPage((prev) => prev + 1);
                }
            });
            if (node) observer.current.observe(node);
        },
        [isLoading, hasMoreComments]
    );

    React.useEffect(() => {
        const loadPosts = async () => {
            setIsLoading(true);
            try {
                const newPosts = await fetchPosts(postPage);
                if (newPosts.length === 0) {
                    setHasMorePosts(false);
                } else {
                    setPosts((prev) => [...prev, ...newPosts]);
                }
            } catch (error) {
                console.error('Error fetching posts:', error);
            } finally {
                setIsLoading(false);
            }
        };

        if (hasMorePosts) {
            loadPosts();
        }
    }, [postPage, hasMorePosts]);

    React.useEffect(() => {
        const loadComments = async () => {
            setIsLoading(true);
            try {
                const newComments = await fetchComments(commentPage);
                if (newComments.length === 0) {
                    setHasMoreComments(false);
                } else {
                    setComments((prev) => [...prev, ...newComments]);
                }
            } catch (error) {
                console.error('Error fetching comments:', error);
            } finally {
                setIsLoading(false);
            }
        };

        if (hasMoreComments) {
            loadComments();
        }
    }, [commentPage, hasMoreComments]);

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-4 text-center">Infinite Scroll with Multiple APIs</h1>
            <div className="flex flex-col md:flex-row gap-4">
                <div className="w-full md:w-1/2">
                    <h2 className="text-2xl font-semibold mb-2">Posts</h2>
                    {posts.map((post, index) => (
                        <div
                            key={post.id}
                            ref={index === posts.length - 1 ? lastPostElementRef : null}
                            className="bg-white p-4 mb-2 rounded shadow"
                        >
                            <h3 className="text-xl font-bold">{post.title}</h3>
                            <p>{post.content}</p>
                        </div>
                    ))}
                    {isLoading && <p className="text-center">Loading posts...</p>}
                    {!hasMorePosts && posts.length > 0 && (
                        <p className="text-center text-gray-500">No more posts to load</p>
                    )}
                </div>

                <div className="w-full md:w-1/2">
                    <h2 className="text-2xl font-semibold mb-2">Comments</h2>
                    {comments.map((comment, index) => (
                        <div
                            key={comment.id}
                            ref={index === comments.length - 1 ? lastCommentElementRef : null}
                            className="bg-white p-4 mb-2 rounded shadow"
                        >
                            <p>{comment.text}</p>
                        </div>
                    ))}
                    {isLoading && <p className="text-center">Loading comments...</p>}
                    {!hasMoreComments && comments.length > 0 && (
                        <p className="text-center text-gray-500">No more comments to load</p>
                    )}
                </div>
            </div>
        </div>
    );
};

