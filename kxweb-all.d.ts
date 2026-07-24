type Nullable<T> = T | null | undefined
declare function KtSingleton<T>(): T & (abstract new() => any);
export declare namespace kotlin.collections {
    interface KtList<out E> /* extends kotlin.collections.Collection<E> */ {
        asJsReadonlyArrayView(): ReadonlyArray<E>;
        readonly __doNotUseOrImplementIt: {
            readonly "kotlin.collections.KtList": unique symbol;
        };
    }
    namespace KtList {
        function fromJsArray<E>(array: ReadonlyArray<E>): kotlin.collections.KtList<E>;
    }
    interface KtMap<K, out V> {
        asJsReadonlyMapView(): ReadonlyMap<K, V>;
        readonly __doNotUseOrImplementIt: {
            readonly "kotlin.collections.KtMap": unique symbol;
        };
    }
    namespace KtMap {
        function fromJsMap<K, V>(map: ReadonlyMap<K, V>): kotlin.collections.KtMap<K, V>;
    }
}
export declare namespace io.ktor.client.engine.js {
    /** @deprecated  */
    const initHook: any;
}
export declare namespace work.socialhub.kxweb {
    interface XWeb {
        account(): work.socialhub.kxweb.api.AccountResource;
        search(): work.socialhub.kxweb.api.SearchResource;
        tweet(): work.socialhub.kxweb.api.TweetResource;
        home(): work.socialhub.kxweb.api.HomeResource;
        user(): work.socialhub.kxweb.api.UserResource;
        engagement(): work.socialhub.kxweb.api.EngagementResource;
        post(): work.socialhub.kxweb.api.PostResource;
        follow(): work.socialhub.kxweb.api.FollowResource;
        bookmark(): work.socialhub.kxweb.api.BookmarkResource;
        list(): work.socialhub.kxweb.api.ListResource;
        media(): work.socialhub.kxweb.api.MediaResource;
        explore(): work.socialhub.kxweb.api.ExploreResource;
        timeline(): work.socialhub.kxweb.api.TimelineResource;
        trend(): work.socialhub.kxweb.api.TrendResource;
        readonly __doNotUseOrImplementIt: {
            readonly "work.socialhub.kxweb.XWeb": unique symbol;
        };
    }
}
export declare namespace work.socialhub.kxweb {
    class XWebConfig {
        constructor();
        get apiBaseUri(): string;
        set apiBaseUri(value: string);
        get authToken(): Nullable<string>;
        set authToken(value: Nullable<string>);
        get csrfToken(): Nullable<string>;
        set csrfToken(value: Nullable<string>);
        get oauthToken(): Nullable<string>;
        set oauthToken(value: Nullable<string>);
        get oauthSecret(): Nullable<string>;
        set oauthSecret(value: Nullable<string>);
        get guestMode(): boolean;
        set guestMode(value: boolean);
        get guestToken(): Nullable<string>;
        set guestToken(value: Nullable<string>);
        get skipSSLValidation(): boolean;
        set skipSSLValidation(value: boolean);
        get requestTimeoutMillis(): Nullable<bigint>;
        set requestTimeoutMillis(value: Nullable<bigint>);
        get connectTimeoutMillis(): Nullable<bigint>;
        set connectTimeoutMillis(value: Nullable<bigint>);
        get socketTimeoutMillis(): Nullable<bigint>;
        set socketTimeoutMillis(value: Nullable<bigint>);
        get cookieString(): Nullable<string>;
        set cookieString(value: Nullable<string>);
        get enableClientTransaction(): boolean;
        set enableClientTransaction(value: boolean);
        get clientTransactionId(): Nullable<string>;
        set clientTransactionId(value: Nullable<string>);
        resolveSession(endpoint?: string): work.socialhub.kxweb.XWebConfig;
    }
    namespace XWebConfig {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => XWebConfig;
        }
    }
}
export declare namespace work.socialhub.kxweb {
    abstract class XWebFactory extends KtSingleton<XWebFactory.$metadata$.constructor>() {
        private constructor();
    }
    namespace XWebFactory {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            abstract class constructor {
                instanceFromConfig(config?: work.socialhub.kxweb.XWebConfig): work.socialhub.kxweb.XWeb;
                instanceFromCookies(authToken: string, csrfToken: string): work.socialhub.kxweb.XWeb;
                instanceFromCookieString(cookieString: string): work.socialhub.kxweb.XWeb;
                instanceGuest(): work.socialhub.kxweb.XWeb;
                instanceFromOAuth(oauthToken: string, oauthSecret: string): work.socialhub.kxweb.XWeb;
                instanceFromPool(pool: work.socialhub.kxweb.XWebSessionPool): work.socialhub.kxweb.XWeb;
                instanceFromPoolWithConfig(pool: work.socialhub.kxweb.XWebSessionPool, config: work.socialhub.kxweb.XWebConfig): work.socialhub.kxweb.XWeb;
                instanceFromSessions(sessions: kotlin.collections.KtList<work.socialhub.kxweb.XWebSession>): work.socialhub.kxweb.XWeb;
                instanceFromJsonLines(jsonLines: string): work.socialhub.kxweb.XWeb;
                private constructor();
            }
        }
    }
}
export declare namespace work.socialhub.kxweb {
    abstract class XWebSession {
        private constructor();
        abstract get label(): Nullable<string>;
    }
    namespace XWebSession {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => XWebSession;
        }
        class Cookie extends work.socialhub.kxweb.XWebSession.$metadata$.constructor {
            constructor(authToken: string, csrfToken: string, cookieString?: Nullable<string>, label?: Nullable<string>);
            get authToken(): string;
            get csrfToken(): string;
            get cookieString(): Nullable<string>;
            get label(): Nullable<string>;
            copy(authToken?: string, csrfToken?: string, cookieString?: Nullable<string>, label?: Nullable<string>): work.socialhub.kxweb.XWebSession.Cookie;
            toString(): string;
            hashCode(): number;
            equals(other: Nullable<any>): boolean;
        }
        namespace Cookie {
            /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
            namespace $metadata$ {
                const constructor: abstract new () => Cookie;
            }
        }
        class OAuth extends work.socialhub.kxweb.XWebSession.$metadata$.constructor {
            constructor(oauthToken: string, oauthSecret: string, label?: Nullable<string>);
            get oauthToken(): string;
            get oauthSecret(): string;
            get label(): Nullable<string>;
            copy(oauthToken?: string, oauthSecret?: string, label?: Nullable<string>): work.socialhub.kxweb.XWebSession.OAuth;
            toString(): string;
            hashCode(): number;
            equals(other: Nullable<any>): boolean;
        }
        namespace OAuth {
            /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
            namespace $metadata$ {
                const constructor: abstract new () => OAuth;
            }
        }
        abstract class Companion extends KtSingleton<Companion.$metadata$.constructor>() {
            private constructor();
        }
        namespace Companion {
            /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
            namespace $metadata$ {
                abstract class constructor {
                    cookie(authToken: string, csrfToken: string, cookieString?: Nullable<string>, label?: Nullable<string>): work.socialhub.kxweb.XWebSession;
                    oauth(oauthToken: string, oauthSecret: string, label?: Nullable<string>): work.socialhub.kxweb.XWebSession;
                    parseJsonLines(jsonLines: string): kotlin.collections.KtList<work.socialhub.kxweb.XWebSession>;
                    private constructor();
                }
            }
        }
    }
}
export declare namespace work.socialhub.kxweb {
    class XWebSessionPool {
        constructor(sessions: kotlin.collections.KtList<work.socialhub.kxweb.XWebSession>);
        get globalLimitDurationSeconds(): bigint;
        set globalLimitDurationSeconds(value: bigint);
        get size(): number;
        get availableCount(): number;
        acquireSession(endpoint?: string): Nullable<work.socialhub.kxweb.XWebSession>;
        updateRateLimit(session: work.socialhub.kxweb.XWebSession, endpoint: string, rateLimit: work.socialhub.kxweb.entity.share.RateLimit): void;
        markGloballyLimited(session: work.socialhub.kxweb.XWebSession): void;
        invalidateSession(session: work.socialhub.kxweb.XWebSession): void;
        addSession(session: work.socialhub.kxweb.XWebSession): void;
        removeSession(session: work.socialhub.kxweb.XWebSession): void;
        getRateLimit(session: work.socialhub.kxweb.XWebSession, endpoint: string): Nullable<work.socialhub.kxweb.entity.share.RateLimit>;
        isSessionAvailable(session: work.socialhub.kxweb.XWebSession, endpoint?: string): boolean;
    }
    namespace XWebSessionPool {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => XWebSessionPool;
        }
    }
}
export declare namespace work.socialhub.kxweb.api {
    interface AccountResource {
        getCurrentUser(): Promise<work.socialhub.kxweb.entity.share.Response<work.socialhub.kxweb.entity.account.GetCurrentUserResponse>>;
        readonly __doNotUseOrImplementIt: {
            readonly "work.socialhub.kxweb.api.AccountResource": unique symbol;
        };
    }
}
export declare namespace work.socialhub.kxweb.api {
    interface BookmarkResource {
        getBookmarks(request: work.socialhub.kxweb.entity.bookmark.GetBookmarksRequest): Promise<work.socialhub.kxweb.entity.share.Response<work.socialhub.kxweb.entity.bookmark.GetBookmarksResponse>>;
        searchBookmarks(request: work.socialhub.kxweb.entity.bookmark.SearchBookmarksRequest): Promise<work.socialhub.kxweb.entity.share.Response<work.socialhub.kxweb.entity.search.SearchSearchResponse>>;
        bookmark(request: work.socialhub.kxweb.entity.bookmark.BookmarkRequest): Promise<work.socialhub.kxweb.entity.share.Response<work.socialhub.kxweb.model.MutationResult>>;
        unbookmark(request: work.socialhub.kxweb.entity.bookmark.BookmarkRequest): Promise<work.socialhub.kxweb.entity.share.Response<work.socialhub.kxweb.model.MutationResult>>;
        getBookmarkFolderTimeline(request: work.socialhub.kxweb.entity.bookmark.BookmarkFolderTimelineRequest): Promise<work.socialhub.kxweb.entity.share.Response<work.socialhub.kxweb.entity.bookmark.GetBookmarksResponse>>;
        readonly __doNotUseOrImplementIt: {
            readonly "work.socialhub.kxweb.api.BookmarkResource": unique symbol;
        };
    }
}
export declare namespace work.socialhub.kxweb.api {
    interface EngagementResource {
        like(request: work.socialhub.kxweb.entity.engagement.LikeRequest): Promise<work.socialhub.kxweb.entity.share.Response<work.socialhub.kxweb.model.MutationResult>>;
        unlike(request: work.socialhub.kxweb.entity.engagement.LikeRequest): Promise<work.socialhub.kxweb.entity.share.Response<work.socialhub.kxweb.model.MutationResult>>;
        retweet(request: work.socialhub.kxweb.entity.engagement.RetweetRequest): Promise<work.socialhub.kxweb.entity.share.Response<work.socialhub.kxweb.model.MutationResult>>;
        unretweet(request: work.socialhub.kxweb.entity.engagement.RetweetRequest): Promise<work.socialhub.kxweb.entity.share.Response<work.socialhub.kxweb.model.MutationResult>>;
        readonly __doNotUseOrImplementIt: {
            readonly "work.socialhub.kxweb.api.EngagementResource": unique symbol;
        };
    }
}
export declare namespace work.socialhub.kxweb.api {
    interface ExploreResource {
        getNews(request: work.socialhub.kxweb.entity.explore.GetNewsRequest): Promise<work.socialhub.kxweb.entity.share.Response<work.socialhub.kxweb.entity.explore.GetNewsResponse>>;
        readonly __doNotUseOrImplementIt: {
            readonly "work.socialhub.kxweb.api.ExploreResource": unique symbol;
        };
    }
}
export declare namespace work.socialhub.kxweb.api {
    interface FollowResource {
        follow(request: work.socialhub.kxweb.entity.follow.FollowRequest): Promise<work.socialhub.kxweb.entity.share.Response<work.socialhub.kxweb.model.MutationResult>>;
        unfollow(request: work.socialhub.kxweb.entity.follow.FollowRequest): Promise<work.socialhub.kxweb.entity.share.Response<work.socialhub.kxweb.model.MutationResult>>;
        readonly __doNotUseOrImplementIt: {
            readonly "work.socialhub.kxweb.api.FollowResource": unique symbol;
        };
    }
}
export declare namespace work.socialhub.kxweb.api {
    interface HomeResource {
        getHomeTimeline(request: work.socialhub.kxweb.entity.home.HomeTimelineRequest): Promise<work.socialhub.kxweb.entity.share.Response<work.socialhub.kxweb.entity.home.HomeTimelineResponse>>;
        getHomeLatestTimeline(request: work.socialhub.kxweb.entity.home.HomeTimelineRequest): Promise<work.socialhub.kxweb.entity.share.Response<work.socialhub.kxweb.entity.home.HomeTimelineResponse>>;
        readonly __doNotUseOrImplementIt: {
            readonly "work.socialhub.kxweb.api.HomeResource": unique symbol;
        };
    }
}
export declare namespace work.socialhub.kxweb.api {
    interface ListResource {
        getOwnedLists(request: work.socialhub.kxweb.entity.list.GetListsRequest): Promise<work.socialhub.kxweb.entity.share.Response<work.socialhub.kxweb.entity.list.ListTimelineResponse>>;
        getListMemberships(request: work.socialhub.kxweb.entity.list.GetListsRequest): Promise<work.socialhub.kxweb.entity.share.Response<work.socialhub.kxweb.entity.list.ListTimelineResponse>>;
        getListTimeline(request: work.socialhub.kxweb.entity.list.ListTimelineRequest): Promise<work.socialhub.kxweb.entity.share.Response<work.socialhub.kxweb.entity.list.ListTimelineResponse>>;
        readonly __doNotUseOrImplementIt: {
            readonly "work.socialhub.kxweb.api.ListResource": unique symbol;
        };
    }
}
export declare namespace work.socialhub.kxweb.api {
    interface MediaResource {
        uploadMedia(request: work.socialhub.kxweb.entity.media.UploadMediaRequest): Promise<work.socialhub.kxweb.entity.share.Response<work.socialhub.kxweb.model.UploadMediaResult>>;
        readonly __doNotUseOrImplementIt: {
            readonly "work.socialhub.kxweb.api.MediaResource": unique symbol;
        };
    }
}
export declare namespace work.socialhub.kxweb.api {
    interface PostResource {
        createTweet(request: work.socialhub.kxweb.entity.post.CreateTweetRequest): Promise<work.socialhub.kxweb.entity.share.Response<work.socialhub.kxweb.model.Tweet>>;
        deleteTweet(request: work.socialhub.kxweb.entity.post.DeleteTweetRequest): Promise<work.socialhub.kxweb.entity.share.Response<work.socialhub.kxweb.model.MutationResult>>;
        readonly __doNotUseOrImplementIt: {
            readonly "work.socialhub.kxweb.api.PostResource": unique symbol;
        };
    }
}
export declare namespace work.socialhub.kxweb.api {
    interface SearchResource {
        searchTweets(request: work.socialhub.kxweb.entity.search.SearchSearchRequest): Promise<work.socialhub.kxweb.entity.share.Response<work.socialhub.kxweb.entity.search.SearchSearchResponse>>;
        searchUsers(request: work.socialhub.kxweb.entity.search.SearchUsersRequest): Promise<work.socialhub.kxweb.entity.share.Response<work.socialhub.kxweb.entity.search.SearchUsersResponse>>;
        readonly __doNotUseOrImplementIt: {
            readonly "work.socialhub.kxweb.api.SearchResource": unique symbol;
        };
    }
}
export declare namespace work.socialhub.kxweb.api {
    interface TimelineResource {
        getLikes(request: work.socialhub.kxweb.entity.timeline.GetLikesRequest): Promise<work.socialhub.kxweb.entity.share.Response<work.socialhub.kxweb.entity.timeline.GetLikesResponse>>;
        readonly __doNotUseOrImplementIt: {
            readonly "work.socialhub.kxweb.api.TimelineResource": unique symbol;
        };
    }
}
export declare namespace work.socialhub.kxweb.api {
    interface TrendResource {
        getTrendLocations(): Promise<work.socialhub.kxweb.entity.share.Response<work.socialhub.kxweb.entity.trend.GetTrendLocationsResponse>>;
        getTrends(request: work.socialhub.kxweb.entity.trend.GetTrendsRequest): Promise<work.socialhub.kxweb.entity.share.Response<work.socialhub.kxweb.entity.trend.GetTrendsResponse>>;
        readonly __doNotUseOrImplementIt: {
            readonly "work.socialhub.kxweb.api.TrendResource": unique symbol;
        };
    }
}
export declare namespace work.socialhub.kxweb.api {
    interface TweetResource {
        getTweet(tweetId: string, withArticle?: boolean): Promise<work.socialhub.kxweb.entity.share.Response<work.socialhub.kxweb.model.Tweet>>;
        getTweetDetail(request: work.socialhub.kxweb.entity.tweet.TweetDetailRequest): Promise<work.socialhub.kxweb.entity.share.Response<work.socialhub.kxweb.entity.tweet.TweetDetailResponse>>;
        getReplies(request: work.socialhub.kxweb.entity.tweet.GetRepliesRequest): Promise<work.socialhub.kxweb.entity.share.Response<work.socialhub.kxweb.entity.tweet.GetRepliesResponse>>;
        getThread(request: work.socialhub.kxweb.entity.tweet.GetThreadRequest): Promise<work.socialhub.kxweb.entity.share.Response<work.socialhub.kxweb.entity.tweet.GetThreadResponse>>;
        readonly __doNotUseOrImplementIt: {
            readonly "work.socialhub.kxweb.api.TweetResource": unique symbol;
        };
    }
}
export declare namespace work.socialhub.kxweb.api {
    interface UserResource {
        getUserByScreenName(request: work.socialhub.kxweb.entity.user.UserByScreenNameRequest): Promise<work.socialhub.kxweb.entity.share.Response<work.socialhub.kxweb.model.User>>;
        getUserIdByUsername(request: work.socialhub.kxweb.entity.user.GetUserIdByUsernameRequest): Promise<work.socialhub.kxweb.entity.share.Response<work.socialhub.kxweb.model.User>>;
        getUserAboutAccount(request: work.socialhub.kxweb.entity.user.GetUserAboutAccountRequest): Promise<work.socialhub.kxweb.entity.share.Response<work.socialhub.kxweb.entity.user.AboutAccountResponse>>;
        getUserTweets(request: work.socialhub.kxweb.entity.user.UserTweetsRequest): Promise<work.socialhub.kxweb.entity.share.Response<work.socialhub.kxweb.entity.user.UserTweetsResponse>>;
        getFollowing(request: work.socialhub.kxweb.entity.user.FollowingRequest): Promise<work.socialhub.kxweb.entity.share.Response<work.socialhub.kxweb.entity.user.FollowingResponse>>;
        getFollowers(request: work.socialhub.kxweb.entity.user.FollowingRequest): Promise<work.socialhub.kxweb.entity.share.Response<work.socialhub.kxweb.entity.user.FollowingResponse>>;
        readonly __doNotUseOrImplementIt: {
            readonly "work.socialhub.kxweb.api.UserResource": unique symbol;
        };
    }
}
export declare namespace work.socialhub.kxweb.entity.account {
    class GetCurrentUserResponse {
        constructor(userId?: Nullable<string>, screenName?: Nullable<string>, name?: Nullable<string>, user?: Nullable<work.socialhub.kxweb.model.User>);
        get userId(): Nullable<string>;
        set userId(value: Nullable<string>);
        get screenName(): Nullable<string>;
        set screenName(value: Nullable<string>);
        get name(): Nullable<string>;
        set name(value: Nullable<string>);
        get user(): Nullable<work.socialhub.kxweb.model.User>;
        set user(value: Nullable<work.socialhub.kxweb.model.User>);
        copy(userId?: Nullable<string>, screenName?: Nullable<string>, name?: Nullable<string>, user?: Nullable<work.socialhub.kxweb.model.User>): work.socialhub.kxweb.entity.account.GetCurrentUserResponse;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
    }
    namespace GetCurrentUserResponse {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => GetCurrentUserResponse;
        }
    }
}
export declare namespace work.socialhub.kxweb.entity.bookmark {
    class BookmarkFolderTimelineRequest {
        constructor();
        get folderId(): Nullable<string>;
        set folderId(value: Nullable<string>);
        get count(): number;
        set count(value: number);
        get cursor(): Nullable<string>;
        set cursor(value: Nullable<string>);
    }
    namespace BookmarkFolderTimelineRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => BookmarkFolderTimelineRequest;
        }
    }
}
export declare namespace work.socialhub.kxweb.entity.bookmark {
    class BookmarkRequest {
        constructor();
        get tweetId(): Nullable<string>;
        set tweetId(value: Nullable<string>);
    }
    namespace BookmarkRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => BookmarkRequest;
        }
    }
}
export declare namespace work.socialhub.kxweb.entity.bookmark {
    class GetBookmarksRequest {
        constructor();
        get count(): number;
        set count(value: number);
        get cursor(): Nullable<string>;
        set cursor(value: Nullable<string>);
    }
    namespace GetBookmarksRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => GetBookmarksRequest;
        }
    }
}
export declare namespace work.socialhub.kxweb.entity.bookmark {
    class GetBookmarksResponse {
        constructor(tweets?: kotlin.collections.KtList<work.socialhub.kxweb.model.Tweet>, cursor?: Nullable<string>);
        get tweets(): kotlin.collections.KtList<work.socialhub.kxweb.model.Tweet>;
        set tweets(value: kotlin.collections.KtList<work.socialhub.kxweb.model.Tweet>);
        get cursor(): Nullable<string>;
        set cursor(value: Nullable<string>);
        copy(tweets?: kotlin.collections.KtList<work.socialhub.kxweb.model.Tweet>, cursor?: Nullable<string>): work.socialhub.kxweb.entity.bookmark.GetBookmarksResponse;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
    }
    namespace GetBookmarksResponse {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => GetBookmarksResponse;
        }
    }
}
export declare namespace work.socialhub.kxweb.entity.bookmark {
    class SearchBookmarksRequest {
        constructor();
        get query(): Nullable<string>;
        set query(value: Nullable<string>);
        get count(): number;
        set count(value: number);
        get cursor(): Nullable<string>;
        set cursor(value: Nullable<string>);
    }
    namespace SearchBookmarksRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => SearchBookmarksRequest;
        }
    }
}
export declare namespace work.socialhub.kxweb.entity.engagement {
    class LikeRequest {
        constructor();
        get tweetId(): Nullable<string>;
        set tweetId(value: Nullable<string>);
    }
    namespace LikeRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => LikeRequest;
        }
    }
}
export declare namespace work.socialhub.kxweb.entity.engagement {
    class RetweetRequest {
        constructor();
        get tweetId(): Nullable<string>;
        set tweetId(value: Nullable<string>);
    }
    namespace RetweetRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => RetweetRequest;
        }
    }
}
export declare namespace work.socialhub.kxweb.entity.explore {
    abstract class ExploreTab {
        private constructor();
        static get FOR_YOU(): work.socialhub.kxweb.entity.explore.ExploreTab & {
            get name(): "FOR_YOU";
            get ordinal(): 0;
        };
        static get TRENDING(): work.socialhub.kxweb.entity.explore.ExploreTab & {
            get name(): "TRENDING";
            get ordinal(): 1;
        };
        static get NEWS(): work.socialhub.kxweb.entity.explore.ExploreTab & {
            get name(): "NEWS";
            get ordinal(): 2;
        };
        static get SPORTS(): work.socialhub.kxweb.entity.explore.ExploreTab & {
            get name(): "SPORTS";
            get ordinal(): 3;
        };
        static get ENTERTAINMENT(): work.socialhub.kxweb.entity.explore.ExploreTab & {
            get name(): "ENTERTAINMENT";
            get ordinal(): 4;
        };
        static values(): [typeof work.socialhub.kxweb.entity.explore.ExploreTab.FOR_YOU, typeof work.socialhub.kxweb.entity.explore.ExploreTab.TRENDING, typeof work.socialhub.kxweb.entity.explore.ExploreTab.NEWS, typeof work.socialhub.kxweb.entity.explore.ExploreTab.SPORTS, typeof work.socialhub.kxweb.entity.explore.ExploreTab.ENTERTAINMENT];
        static valueOf(value: string): work.socialhub.kxweb.entity.explore.ExploreTab;
        get name(): "FOR_YOU" | "TRENDING" | "NEWS" | "SPORTS" | "ENTERTAINMENT";
        get ordinal(): 0 | 1 | 2 | 3 | 4;
        get timelineId(): string;
    }
    namespace ExploreTab {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => ExploreTab;
        }
    }
}
export declare namespace work.socialhub.kxweb.entity.explore {
    class GetNewsRequest {
        constructor();
        get count(): number;
        set count(value: number);
        get cursor(): Nullable<string>;
        set cursor(value: Nullable<string>);
        get tab(): Nullable<work.socialhub.kxweb.entity.explore.ExploreTab>;
        set tab(value: Nullable<work.socialhub.kxweb.entity.explore.ExploreTab>);
    }
    namespace GetNewsRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => GetNewsRequest;
        }
    }
}
export declare namespace work.socialhub.kxweb.entity.explore {
    class GetNewsResponse {
        constructor(tweets?: kotlin.collections.KtList<work.socialhub.kxweb.model.Tweet>, cursor?: Nullable<string>);
        get tweets(): kotlin.collections.KtList<work.socialhub.kxweb.model.Tweet>;
        set tweets(value: kotlin.collections.KtList<work.socialhub.kxweb.model.Tweet>);
        get cursor(): Nullable<string>;
        set cursor(value: Nullable<string>);
        copy(tweets?: kotlin.collections.KtList<work.socialhub.kxweb.model.Tweet>, cursor?: Nullable<string>): work.socialhub.kxweb.entity.explore.GetNewsResponse;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
    }
    namespace GetNewsResponse {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => GetNewsResponse;
        }
    }
}
export declare namespace work.socialhub.kxweb.entity.follow {
    class FollowRequest {
        constructor();
        get userId(): Nullable<string>;
        set userId(value: Nullable<string>);
    }
    namespace FollowRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => FollowRequest;
        }
    }
}
export declare namespace work.socialhub.kxweb.entity.home {
    class HomeTimelineRequest {
        constructor();
        get count(): number;
        set count(value: number);
        get cursor(): Nullable<string>;
        set cursor(value: Nullable<string>);
    }
    namespace HomeTimelineRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => HomeTimelineRequest;
        }
    }
}
export declare namespace work.socialhub.kxweb.entity.home {
    class HomeTimelineResponse {
        constructor(tweets?: kotlin.collections.KtList<work.socialhub.kxweb.model.Tweet>, cursor?: Nullable<string>);
        get tweets(): kotlin.collections.KtList<work.socialhub.kxweb.model.Tweet>;
        set tweets(value: kotlin.collections.KtList<work.socialhub.kxweb.model.Tweet>);
        get cursor(): Nullable<string>;
        set cursor(value: Nullable<string>);
        copy(tweets?: kotlin.collections.KtList<work.socialhub.kxweb.model.Tweet>, cursor?: Nullable<string>): work.socialhub.kxweb.entity.home.HomeTimelineResponse;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
    }
    namespace HomeTimelineResponse {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => HomeTimelineResponse;
        }
    }
}
export declare namespace work.socialhub.kxweb.entity.list {
    class GetListsRequest {
        constructor();
        get userId(): Nullable<string>;
        set userId(value: Nullable<string>);
        get count(): number;
        set count(value: number);
        get cursor(): Nullable<string>;
        set cursor(value: Nullable<string>);
    }
    namespace GetListsRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => GetListsRequest;
        }
    }
}
export declare namespace work.socialhub.kxweb.entity.list {
    class ListTimelineRequest {
        constructor();
        get listId(): Nullable<string>;
        set listId(value: Nullable<string>);
        get count(): number;
        set count(value: number);
        get cursor(): Nullable<string>;
        set cursor(value: Nullable<string>);
    }
    namespace ListTimelineRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => ListTimelineRequest;
        }
    }
}
export declare namespace work.socialhub.kxweb.entity.list {
    class ListTimelineResponse {
        constructor(tweets?: kotlin.collections.KtList<work.socialhub.kxweb.model.Tweet>, cursor?: Nullable<string>);
        get tweets(): kotlin.collections.KtList<work.socialhub.kxweb.model.Tweet>;
        set tweets(value: kotlin.collections.KtList<work.socialhub.kxweb.model.Tweet>);
        get cursor(): Nullable<string>;
        set cursor(value: Nullable<string>);
        copy(tweets?: kotlin.collections.KtList<work.socialhub.kxweb.model.Tweet>, cursor?: Nullable<string>): work.socialhub.kxweb.entity.list.ListTimelineResponse;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
    }
    namespace ListTimelineResponse {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => ListTimelineResponse;
        }
    }
}
export declare namespace work.socialhub.kxweb.entity.media {
    class UploadMediaRequest {
        constructor();
        get data(): Nullable<Int8Array>;
        set data(value: Nullable<Int8Array>);
        get mimeType(): Nullable<string>;
        set mimeType(value: Nullable<string>);
        get altText(): Nullable<string>;
        set altText(value: Nullable<string>);
    }
    namespace UploadMediaRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => UploadMediaRequest;
        }
    }
}
export declare namespace work.socialhub.kxweb.entity.post {
    class CreateTweetRequest {
        constructor();
        get text(): Nullable<string>;
        set text(value: Nullable<string>);
        get mediaIds(): kotlin.collections.KtList<string>;
        set mediaIds(value: kotlin.collections.KtList<string>);
        get replyToTweetId(): Nullable<string>;
        set replyToTweetId(value: Nullable<string>);
    }
    namespace CreateTweetRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => CreateTweetRequest;
        }
    }
}
export declare namespace work.socialhub.kxweb.entity.post {
    class DeleteTweetRequest {
        constructor();
        get tweetId(): Nullable<string>;
        set tweetId(value: Nullable<string>);
    }
    namespace DeleteTweetRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => DeleteTweetRequest;
        }
    }
}
export declare namespace work.socialhub.kxweb.entity.search {
    class SearchSearchRequest {
        constructor();
        get query(): Nullable<string>;
        set query(value: Nullable<string>);
        get count(): number;
        set count(value: number);
        get searchType(): work.socialhub.kxweb.entity.search.SearchType;
        set searchType(value: work.socialhub.kxweb.entity.search.SearchType);
        get cursor(): Nullable<string>;
        set cursor(value: Nullable<string>);
    }
    namespace SearchSearchRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => SearchSearchRequest;
        }
    }
}
export declare namespace work.socialhub.kxweb.entity.search {
    class SearchSearchResponse {
        constructor(tweets?: kotlin.collections.KtList<work.socialhub.kxweb.model.Tweet>, cursor?: Nullable<string>);
        get tweets(): kotlin.collections.KtList<work.socialhub.kxweb.model.Tweet>;
        set tweets(value: kotlin.collections.KtList<work.socialhub.kxweb.model.Tweet>);
        get cursor(): Nullable<string>;
        set cursor(value: Nullable<string>);
        copy(tweets?: kotlin.collections.KtList<work.socialhub.kxweb.model.Tweet>, cursor?: Nullable<string>): work.socialhub.kxweb.entity.search.SearchSearchResponse;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
    }
    namespace SearchSearchResponse {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => SearchSearchResponse;
        }
    }
}
export declare namespace work.socialhub.kxweb.entity.search {
    abstract class SearchType {
        private constructor();
        static get LATEST(): work.socialhub.kxweb.entity.search.SearchType & {
            get name(): "LATEST";
            get ordinal(): 0;
        };
        static get TOP(): work.socialhub.kxweb.entity.search.SearchType & {
            get name(): "TOP";
            get ordinal(): 1;
        };
        static get PEOPLE(): work.socialhub.kxweb.entity.search.SearchType & {
            get name(): "PEOPLE";
            get ordinal(): 2;
        };
        static get MEDIA(): work.socialhub.kxweb.entity.search.SearchType & {
            get name(): "MEDIA";
            get ordinal(): 3;
        };
        static get PHOTOS(): work.socialhub.kxweb.entity.search.SearchType & {
            get name(): "PHOTOS";
            get ordinal(): 4;
        };
        static get VIDEOS(): work.socialhub.kxweb.entity.search.SearchType & {
            get name(): "VIDEOS";
            get ordinal(): 5;
        };
        static values(): [typeof work.socialhub.kxweb.entity.search.SearchType.LATEST, typeof work.socialhub.kxweb.entity.search.SearchType.TOP, typeof work.socialhub.kxweb.entity.search.SearchType.PEOPLE, typeof work.socialhub.kxweb.entity.search.SearchType.MEDIA, typeof work.socialhub.kxweb.entity.search.SearchType.PHOTOS, typeof work.socialhub.kxweb.entity.search.SearchType.VIDEOS];
        static valueOf(value: string): work.socialhub.kxweb.entity.search.SearchType;
        get name(): "LATEST" | "TOP" | "PEOPLE" | "MEDIA" | "PHOTOS" | "VIDEOS";
        get ordinal(): 0 | 1 | 2 | 3 | 4 | 5;
        get product(): string;
    }
    namespace SearchType {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => SearchType;
        }
    }
}
export declare namespace work.socialhub.kxweb.entity.search {
    class SearchUsersRequest {
        constructor();
        get query(): Nullable<string>;
        set query(value: Nullable<string>);
        get count(): number;
        set count(value: number);
        get cursor(): Nullable<string>;
        set cursor(value: Nullable<string>);
    }
    namespace SearchUsersRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => SearchUsersRequest;
        }
    }
}
export declare namespace work.socialhub.kxweb.entity.search {
    class SearchUsersResponse {
        constructor(users?: kotlin.collections.KtList<work.socialhub.kxweb.model.User>, cursor?: Nullable<string>);
        get users(): kotlin.collections.KtList<work.socialhub.kxweb.model.User>;
        set users(value: kotlin.collections.KtList<work.socialhub.kxweb.model.User>);
        get cursor(): Nullable<string>;
        set cursor(value: Nullable<string>);
        copy(users?: kotlin.collections.KtList<work.socialhub.kxweb.model.User>, cursor?: Nullable<string>): work.socialhub.kxweb.entity.search.SearchUsersResponse;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
    }
    namespace SearchUsersResponse {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => SearchUsersResponse;
        }
    }
}
export declare namespace work.socialhub.kxweb.entity.share {
    class RateLimit {
        constructor(limit: number, remaining: number, resetEpochSeconds: bigint);
        get limit(): number;
        get remaining(): number;
        get resetEpochSeconds(): bigint;
        isLimited(): boolean;
        secondsUntilReset(): bigint;
        copy(limit?: number, remaining?: number, resetEpochSeconds?: bigint): work.socialhub.kxweb.entity.share.RateLimit;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
    }
    namespace RateLimit {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => RateLimit;
        }
        abstract class Companion extends KtSingleton<Companion.$metadata$.constructor>() {
            private constructor();
        }
        namespace Companion {
            /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
            namespace $metadata$ {
                abstract class constructor {
                    get REMAINING_THRESHOLD(): number;
                    fromHeaders(headers: kotlin.collections.KtMap<string, kotlin.collections.KtList<string>>): Nullable<work.socialhub.kxweb.entity.share.RateLimit>;
                    private constructor();
                }
            }
        }
    }
}
export declare namespace work.socialhub.kxweb.entity.share {
    class Response<T> {
        constructor(data: T, json: string);
        get data(): T;
        get json(): string;
        copy(data?: T, json?: string): work.socialhub.kxweb.entity.share.Response<T>;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
    }
    namespace Response {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new <T>() => Response<T>;
        }
    }
    class ResponseUnit {
        constructor(json: string);
        get json(): string;
        copy(json?: string): work.socialhub.kxweb.entity.share.ResponseUnit;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
    }
    namespace ResponseUnit {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => ResponseUnit;
        }
    }
}
export declare namespace work.socialhub.kxweb.entity.timeline {
    class GetLikesRequest {
        constructor();
        get userId(): Nullable<string>;
        set userId(value: Nullable<string>);
        get count(): number;
        set count(value: number);
        get cursor(): Nullable<string>;
        set cursor(value: Nullable<string>);
    }
    namespace GetLikesRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => GetLikesRequest;
        }
    }
}
export declare namespace work.socialhub.kxweb.entity.timeline {
    class GetLikesResponse {
        constructor(tweets?: kotlin.collections.KtList<work.socialhub.kxweb.model.Tweet>, cursor?: Nullable<string>);
        get tweets(): kotlin.collections.KtList<work.socialhub.kxweb.model.Tweet>;
        set tweets(value: kotlin.collections.KtList<work.socialhub.kxweb.model.Tweet>);
        get cursor(): Nullable<string>;
        set cursor(value: Nullable<string>);
        copy(tweets?: kotlin.collections.KtList<work.socialhub.kxweb.model.Tweet>, cursor?: Nullable<string>): work.socialhub.kxweb.entity.timeline.GetLikesResponse;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
    }
    namespace GetLikesResponse {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => GetLikesResponse;
        }
    }
}
export declare namespace work.socialhub.kxweb.entity.trend {
    class GetTrendLocationsResponse {
        constructor(locations?: kotlin.collections.KtList<work.socialhub.kxweb.model.TrendLocation>);
        get locations(): kotlin.collections.KtList<work.socialhub.kxweb.model.TrendLocation>;
        set locations(value: kotlin.collections.KtList<work.socialhub.kxweb.model.TrendLocation>);
        copy(locations?: kotlin.collections.KtList<work.socialhub.kxweb.model.TrendLocation>): work.socialhub.kxweb.entity.trend.GetTrendLocationsResponse;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
    }
    namespace GetTrendLocationsResponse {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => GetTrendLocationsResponse;
        }
    }
}
export declare namespace work.socialhub.kxweb.entity.trend {
    class GetTrendsRequest {
        constructor();
        get woeid(): bigint;
        set woeid(value: bigint);
    }
    namespace GetTrendsRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => GetTrendsRequest;
        }
    }
}
export declare namespace work.socialhub.kxweb.entity.trend {
    class GetTrendsResponse {
        constructor(trends?: kotlin.collections.KtList<work.socialhub.kxweb.model.Trend>, asOf?: Nullable<string>, createdAt?: Nullable<string>, locationName?: Nullable<string>);
        get trends(): kotlin.collections.KtList<work.socialhub.kxweb.model.Trend>;
        set trends(value: kotlin.collections.KtList<work.socialhub.kxweb.model.Trend>);
        get asOf(): Nullable<string>;
        set asOf(value: Nullable<string>);
        get createdAt(): Nullable<string>;
        set createdAt(value: Nullable<string>);
        get locationName(): Nullable<string>;
        set locationName(value: Nullable<string>);
        copy(trends?: kotlin.collections.KtList<work.socialhub.kxweb.model.Trend>, asOf?: Nullable<string>, createdAt?: Nullable<string>, locationName?: Nullable<string>): work.socialhub.kxweb.entity.trend.GetTrendsResponse;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
    }
    namespace GetTrendsResponse {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => GetTrendsResponse;
        }
    }
}
export declare namespace work.socialhub.kxweb.entity.tweet {
    class GetRepliesRequest {
        constructor();
        get tweetId(): Nullable<string>;
        set tweetId(value: Nullable<string>);
        get cursor(): Nullable<string>;
        set cursor(value: Nullable<string>);
    }
    namespace GetRepliesRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => GetRepliesRequest;
        }
    }
}
export declare namespace work.socialhub.kxweb.entity.tweet {
    class GetRepliesResponse {
        constructor(replies?: kotlin.collections.KtList<work.socialhub.kxweb.model.Tweet>, cursor?: Nullable<string>);
        get replies(): kotlin.collections.KtList<work.socialhub.kxweb.model.Tweet>;
        set replies(value: kotlin.collections.KtList<work.socialhub.kxweb.model.Tweet>);
        get cursor(): Nullable<string>;
        set cursor(value: Nullable<string>);
        copy(replies?: kotlin.collections.KtList<work.socialhub.kxweb.model.Tweet>, cursor?: Nullable<string>): work.socialhub.kxweb.entity.tweet.GetRepliesResponse;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
    }
    namespace GetRepliesResponse {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => GetRepliesResponse;
        }
    }
}
export declare namespace work.socialhub.kxweb.entity.tweet {
    class GetThreadRequest {
        constructor();
        get tweetId(): Nullable<string>;
        set tweetId(value: Nullable<string>);
        get cursor(): Nullable<string>;
        set cursor(value: Nullable<string>);
    }
    namespace GetThreadRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => GetThreadRequest;
        }
    }
}
export declare namespace work.socialhub.kxweb.entity.tweet {
    class GetThreadResponse {
        constructor(tweets?: kotlin.collections.KtList<work.socialhub.kxweb.model.Tweet>, cursor?: Nullable<string>);
        get tweets(): kotlin.collections.KtList<work.socialhub.kxweb.model.Tweet>;
        set tweets(value: kotlin.collections.KtList<work.socialhub.kxweb.model.Tweet>);
        get cursor(): Nullable<string>;
        set cursor(value: Nullable<string>);
        copy(tweets?: kotlin.collections.KtList<work.socialhub.kxweb.model.Tweet>, cursor?: Nullable<string>): work.socialhub.kxweb.entity.tweet.GetThreadResponse;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
    }
    namespace GetThreadResponse {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => GetThreadResponse;
        }
    }
}
export declare namespace work.socialhub.kxweb.entity.tweet {
    class TweetDetailRequest {
        constructor();
        get tweetId(): Nullable<string>;
        set tweetId(value: Nullable<string>);
        get cursor(): Nullable<string>;
        set cursor(value: Nullable<string>);
    }
    namespace TweetDetailRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => TweetDetailRequest;
        }
    }
}
export declare namespace work.socialhub.kxweb.entity.tweet {
    class TweetDetailResponse {
        constructor(tweets?: kotlin.collections.KtList<work.socialhub.kxweb.model.Tweet>, cursor?: Nullable<string>);
        get tweets(): kotlin.collections.KtList<work.socialhub.kxweb.model.Tweet>;
        set tweets(value: kotlin.collections.KtList<work.socialhub.kxweb.model.Tweet>);
        get cursor(): Nullable<string>;
        set cursor(value: Nullable<string>);
        copy(tweets?: kotlin.collections.KtList<work.socialhub.kxweb.model.Tweet>, cursor?: Nullable<string>): work.socialhub.kxweb.entity.tweet.TweetDetailResponse;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
    }
    namespace TweetDetailResponse {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => TweetDetailResponse;
        }
    }
}
export declare namespace work.socialhub.kxweb.entity.user {
    class AboutAccountResponse {
        constructor(aboutAccount?: Nullable<work.socialhub.kxweb.model.AboutAccount>);
        get aboutAccount(): Nullable<work.socialhub.kxweb.model.AboutAccount>;
        set aboutAccount(value: Nullable<work.socialhub.kxweb.model.AboutAccount>);
        copy(aboutAccount?: Nullable<work.socialhub.kxweb.model.AboutAccount>): work.socialhub.kxweb.entity.user.AboutAccountResponse;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
    }
    namespace AboutAccountResponse {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => AboutAccountResponse;
        }
    }
}
export declare namespace work.socialhub.kxweb.entity.user {
    class FollowingRequest {
        constructor();
        get userId(): Nullable<string>;
        set userId(value: Nullable<string>);
        get count(): number;
        set count(value: number);
        get cursor(): Nullable<string>;
        set cursor(value: Nullable<string>);
    }
    namespace FollowingRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => FollowingRequest;
        }
    }
}
export declare namespace work.socialhub.kxweb.entity.user {
    class FollowingResponse {
        constructor(users?: kotlin.collections.KtList<work.socialhub.kxweb.model.User>, cursor?: Nullable<string>);
        get users(): kotlin.collections.KtList<work.socialhub.kxweb.model.User>;
        set users(value: kotlin.collections.KtList<work.socialhub.kxweb.model.User>);
        get cursor(): Nullable<string>;
        set cursor(value: Nullable<string>);
        copy(users?: kotlin.collections.KtList<work.socialhub.kxweb.model.User>, cursor?: Nullable<string>): work.socialhub.kxweb.entity.user.FollowingResponse;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
    }
    namespace FollowingResponse {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => FollowingResponse;
        }
    }
}
export declare namespace work.socialhub.kxweb.entity.user {
    class GetUserAboutAccountRequest {
        constructor();
        get screenName(): Nullable<string>;
        set screenName(value: Nullable<string>);
    }
    namespace GetUserAboutAccountRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => GetUserAboutAccountRequest;
        }
    }
}
export declare namespace work.socialhub.kxweb.entity.user {
    class GetUserIdByUsernameRequest {
        constructor();
        get username(): Nullable<string>;
        set username(value: Nullable<string>);
    }
    namespace GetUserIdByUsernameRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => GetUserIdByUsernameRequest;
        }
    }
}
export declare namespace work.socialhub.kxweb.entity.user {
    class UserByScreenNameRequest {
        constructor();
        get screenName(): Nullable<string>;
        set screenName(value: Nullable<string>);
    }
    namespace UserByScreenNameRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => UserByScreenNameRequest;
        }
    }
}
export declare namespace work.socialhub.kxweb.entity.user {
    class UserTweetsRequest {
        constructor();
        get userId(): Nullable<string>;
        set userId(value: Nullable<string>);
        get count(): number;
        set count(value: number);
        get cursor(): Nullable<string>;
        set cursor(value: Nullable<string>);
    }
    namespace UserTweetsRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => UserTweetsRequest;
        }
    }
}
export declare namespace work.socialhub.kxweb.entity.user {
    class UserTweetsResponse {
        constructor(tweets?: kotlin.collections.KtList<work.socialhub.kxweb.model.Tweet>, cursor?: Nullable<string>);
        get tweets(): kotlin.collections.KtList<work.socialhub.kxweb.model.Tweet>;
        set tweets(value: kotlin.collections.KtList<work.socialhub.kxweb.model.Tweet>);
        get cursor(): Nullable<string>;
        set cursor(value: Nullable<string>);
        copy(tweets?: kotlin.collections.KtList<work.socialhub.kxweb.model.Tweet>, cursor?: Nullable<string>): work.socialhub.kxweb.entity.user.UserTweetsResponse;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
    }
    namespace UserTweetsResponse {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => UserTweetsResponse;
        }
    }
}
export declare namespace work.socialhub.kxweb.model {
    class AboutAccount {
        constructor(id?: Nullable<string>, createdAt?: Nullable<string>, location?: Nullable<string>, description?: Nullable<string>);
        get id(): Nullable<string>;
        set id(value: Nullable<string>);
        get createdAt(): Nullable<string>;
        set createdAt(value: Nullable<string>);
        get location(): Nullable<string>;
        set location(value: Nullable<string>);
        get description(): Nullable<string>;
        set description(value: Nullable<string>);
        copy(id?: Nullable<string>, createdAt?: Nullable<string>, location?: Nullable<string>, description?: Nullable<string>): work.socialhub.kxweb.model.AboutAccount;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
    }
    namespace AboutAccount {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => AboutAccount;
        }
    }
}
export declare namespace work.socialhub.kxweb.model {
    class Article {
        constructor(id?: Nullable<string>, title?: Nullable<string>, previewText?: Nullable<string>, plainText?: Nullable<string>, coverImageUrl?: Nullable<string>);
        get id(): Nullable<string>;
        set id(value: Nullable<string>);
        get title(): Nullable<string>;
        set title(value: Nullable<string>);
        get previewText(): Nullable<string>;
        set previewText(value: Nullable<string>);
        get plainText(): Nullable<string>;
        set plainText(value: Nullable<string>);
        get coverImageUrl(): Nullable<string>;
        set coverImageUrl(value: Nullable<string>);
        copy(id?: Nullable<string>, title?: Nullable<string>, previewText?: Nullable<string>, plainText?: Nullable<string>, coverImageUrl?: Nullable<string>): work.socialhub.kxweb.model.Article;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
    }
    namespace Article {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => Article;
        }
    }
}
export declare namespace work.socialhub.kxweb.model {
    class Media {
        constructor(type?: Nullable<string>, url?: Nullable<string>, width?: Nullable<number>, height?: Nullable<number>);
        get type(): Nullable<string>;
        set type(value: Nullable<string>);
        get url(): Nullable<string>;
        set url(value: Nullable<string>);
        get width(): Nullable<number>;
        set width(value: Nullable<number>);
        get height(): Nullable<number>;
        set height(value: Nullable<number>);
        copy(type?: Nullable<string>, url?: Nullable<string>, width?: Nullable<number>, height?: Nullable<number>): work.socialhub.kxweb.model.Media;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
    }
    namespace Media {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => Media;
        }
    }
}
export declare namespace work.socialhub.kxweb.model {
    class MutationResult {
        constructor(success?: boolean, error?: Nullable<string>);
        get success(): boolean;
        set success(value: boolean);
        get error(): Nullable<string>;
        set error(value: Nullable<string>);
        copy(success?: boolean, error?: Nullable<string>): work.socialhub.kxweb.model.MutationResult;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
    }
    namespace MutationResult {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => MutationResult;
        }
    }
}
export declare namespace work.socialhub.kxweb.model {
    class Trend {
        constructor(name?: Nullable<string>, query?: Nullable<string>, url?: Nullable<string>, tweetVolume?: Nullable<bigint>);
        get name(): Nullable<string>;
        set name(value: Nullable<string>);
        get query(): Nullable<string>;
        set query(value: Nullable<string>);
        get url(): Nullable<string>;
        set url(value: Nullable<string>);
        get tweetVolume(): Nullable<bigint>;
        set tweetVolume(value: Nullable<bigint>);
        copy(name?: Nullable<string>, query?: Nullable<string>, url?: Nullable<string>, tweetVolume?: Nullable<bigint>): work.socialhub.kxweb.model.Trend;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
    }
    namespace Trend {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => Trend;
        }
    }
}
export declare namespace work.socialhub.kxweb.model {
    class TrendLocation {
        constructor(name?: Nullable<string>, woeid?: Nullable<bigint>, country?: Nullable<string>, countryCode?: Nullable<string>, placeType?: Nullable<string>, parentId?: Nullable<bigint>, url?: Nullable<string>);
        get name(): Nullable<string>;
        set name(value: Nullable<string>);
        get woeid(): Nullable<bigint>;
        set woeid(value: Nullable<bigint>);
        get country(): Nullable<string>;
        set country(value: Nullable<string>);
        get countryCode(): Nullable<string>;
        set countryCode(value: Nullable<string>);
        get placeType(): Nullable<string>;
        set placeType(value: Nullable<string>);
        get parentId(): Nullable<bigint>;
        set parentId(value: Nullable<bigint>);
        get url(): Nullable<string>;
        set url(value: Nullable<string>);
        copy(name?: Nullable<string>, woeid?: Nullable<bigint>, country?: Nullable<string>, countryCode?: Nullable<string>, placeType?: Nullable<string>, parentId?: Nullable<bigint>, url?: Nullable<string>): work.socialhub.kxweb.model.TrendLocation;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
    }
    namespace TrendLocation {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => TrendLocation;
        }
    }
}
export declare namespace work.socialhub.kxweb.model {
    class Tweet {
        constructor(id?: Nullable<string>, text?: Nullable<string>, createdAt?: Nullable<string>, user?: Nullable<work.socialhub.kxweb.model.User>, replyCount?: Nullable<number>, retweetCount?: Nullable<number>, favoriteCount?: Nullable<number>, bookmarkCount?: Nullable<number>, quoteCount?: Nullable<number>, media?: kotlin.collections.KtList<work.socialhub.kxweb.model.Media>, viewCount?: Nullable<bigint>, inReplyToStatusId?: Nullable<string>, conversationId?: Nullable<string>, lang?: Nullable<string>, article?: Nullable<work.socialhub.kxweb.model.Article>, retweetedTweet?: Nullable<work.socialhub.kxweb.model.Tweet>);
        get id(): Nullable<string>;
        set id(value: Nullable<string>);
        get text(): Nullable<string>;
        set text(value: Nullable<string>);
        get createdAt(): Nullable<string>;
        set createdAt(value: Nullable<string>);
        get user(): Nullable<work.socialhub.kxweb.model.User>;
        set user(value: Nullable<work.socialhub.kxweb.model.User>);
        get replyCount(): Nullable<number>;
        set replyCount(value: Nullable<number>);
        get retweetCount(): Nullable<number>;
        set retweetCount(value: Nullable<number>);
        get favoriteCount(): Nullable<number>;
        set favoriteCount(value: Nullable<number>);
        get bookmarkCount(): Nullable<number>;
        set bookmarkCount(value: Nullable<number>);
        get quoteCount(): Nullable<number>;
        set quoteCount(value: Nullable<number>);
        get media(): kotlin.collections.KtList<work.socialhub.kxweb.model.Media>;
        set media(value: kotlin.collections.KtList<work.socialhub.kxweb.model.Media>);
        get viewCount(): Nullable<bigint>;
        set viewCount(value: Nullable<bigint>);
        get inReplyToStatusId(): Nullable<string>;
        set inReplyToStatusId(value: Nullable<string>);
        get conversationId(): Nullable<string>;
        set conversationId(value: Nullable<string>);
        get lang(): Nullable<string>;
        set lang(value: Nullable<string>);
        get article(): Nullable<work.socialhub.kxweb.model.Article>;
        set article(value: Nullable<work.socialhub.kxweb.model.Article>);
        get retweetedTweet(): Nullable<work.socialhub.kxweb.model.Tweet>;
        set retweetedTweet(value: Nullable<work.socialhub.kxweb.model.Tweet>);
        copy(id?: Nullable<string>, text?: Nullable<string>, createdAt?: Nullable<string>, user?: Nullable<work.socialhub.kxweb.model.User>, replyCount?: Nullable<number>, retweetCount?: Nullable<number>, favoriteCount?: Nullable<number>, bookmarkCount?: Nullable<number>, quoteCount?: Nullable<number>, media?: kotlin.collections.KtList<work.socialhub.kxweb.model.Media>, viewCount?: Nullable<bigint>, inReplyToStatusId?: Nullable<string>, conversationId?: Nullable<string>, lang?: Nullable<string>, article?: Nullable<work.socialhub.kxweb.model.Article>, retweetedTweet?: Nullable<work.socialhub.kxweb.model.Tweet>): work.socialhub.kxweb.model.Tweet;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
    }
    namespace Tweet {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => Tweet;
        }
    }
}
export declare namespace work.socialhub.kxweb.model {
    class TwitterList {
        constructor(id?: Nullable<string>, name?: Nullable<string>, description?: Nullable<string>, memberCount?: Nullable<number>, subscriberCount?: Nullable<number>, isPrivate?: Nullable<boolean>, createdAt?: Nullable<string>, owner?: Nullable<work.socialhub.kxweb.model.User>);
        get id(): Nullable<string>;
        set id(value: Nullable<string>);
        get name(): Nullable<string>;
        set name(value: Nullable<string>);
        get description(): Nullable<string>;
        set description(value: Nullable<string>);
        get memberCount(): Nullable<number>;
        set memberCount(value: Nullable<number>);
        get subscriberCount(): Nullable<number>;
        set subscriberCount(value: Nullable<number>);
        get isPrivate(): Nullable<boolean>;
        set isPrivate(value: Nullable<boolean>);
        get createdAt(): Nullable<string>;
        set createdAt(value: Nullable<string>);
        get owner(): Nullable<work.socialhub.kxweb.model.User>;
        set owner(value: Nullable<work.socialhub.kxweb.model.User>);
        copy(id?: Nullable<string>, name?: Nullable<string>, description?: Nullable<string>, memberCount?: Nullable<number>, subscriberCount?: Nullable<number>, isPrivate?: Nullable<boolean>, createdAt?: Nullable<string>, owner?: Nullable<work.socialhub.kxweb.model.User>): work.socialhub.kxweb.model.TwitterList;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
    }
    namespace TwitterList {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => TwitterList;
        }
    }
}
export declare namespace work.socialhub.kxweb.model {
    class UploadMediaResult {
        constructor(success?: boolean, mediaId?: Nullable<string>, error?: Nullable<string>);
        get success(): boolean;
        set success(value: boolean);
        get mediaId(): Nullable<string>;
        set mediaId(value: Nullable<string>);
        get error(): Nullable<string>;
        set error(value: Nullable<string>);
        copy(success?: boolean, mediaId?: Nullable<string>, error?: Nullable<string>): work.socialhub.kxweb.model.UploadMediaResult;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
    }
    namespace UploadMediaResult {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => UploadMediaResult;
        }
    }
}
export declare namespace work.socialhub.kxweb.model {
    class User {
        constructor(id?: Nullable<string>, screenName?: Nullable<string>, name?: Nullable<string>, description?: Nullable<string>, profileImageUrl?: Nullable<string>, profileBannerUrl?: Nullable<string>, followersCount?: Nullable<number>, followingCount?: Nullable<number>, statusesCount?: Nullable<number>, listedCount?: Nullable<number>, verified?: Nullable<boolean>, createdAt?: Nullable<string>, location?: Nullable<string>, url?: Nullable<string>);
        get id(): Nullable<string>;
        set id(value: Nullable<string>);
        get screenName(): Nullable<string>;
        set screenName(value: Nullable<string>);
        get name(): Nullable<string>;
        set name(value: Nullable<string>);
        get description(): Nullable<string>;
        set description(value: Nullable<string>);
        get profileImageUrl(): Nullable<string>;
        set profileImageUrl(value: Nullable<string>);
        get profileBannerUrl(): Nullable<string>;
        set profileBannerUrl(value: Nullable<string>);
        get followersCount(): Nullable<number>;
        set followersCount(value: Nullable<number>);
        get followingCount(): Nullable<number>;
        set followingCount(value: Nullable<number>);
        get statusesCount(): Nullable<number>;
        set statusesCount(value: Nullable<number>);
        get listedCount(): Nullable<number>;
        set listedCount(value: Nullable<number>);
        get verified(): Nullable<boolean>;
        set verified(value: Nullable<boolean>);
        get createdAt(): Nullable<string>;
        set createdAt(value: Nullable<string>);
        get location(): Nullable<string>;
        set location(value: Nullable<string>);
        get url(): Nullable<string>;
        set url(value: Nullable<string>);
        copy(id?: Nullable<string>, screenName?: Nullable<string>, name?: Nullable<string>, description?: Nullable<string>, profileImageUrl?: Nullable<string>, profileBannerUrl?: Nullable<string>, followersCount?: Nullable<number>, followingCount?: Nullable<number>, statusesCount?: Nullable<number>, listedCount?: Nullable<number>, verified?: Nullable<boolean>, createdAt?: Nullable<string>, location?: Nullable<string>, url?: Nullable<string>): work.socialhub.kxweb.model.User;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
    }
    namespace User {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => User;
        }
    }
}
export declare namespace work.socialhub.kxweb {
    abstract class KxwebFactory extends KtSingleton<KxwebFactory.$metadata$.constructor>() {
        private constructor();
    }
    namespace KxwebFactory {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            abstract class constructor {
                instanceFromConfig(config?: work.socialhub.kxweb.XWebConfig): work.socialhub.kxweb.XWeb;
                instanceFromCookies(authToken: string, csrfToken: string): work.socialhub.kxweb.XWeb;
                instanceFromCookieString(cookieString: string): work.socialhub.kxweb.XWeb;
                instanceFromOAuth(oauthToken: string, oauthSecret: string): work.socialhub.kxweb.XWeb;
                instanceFromPool(pool: work.socialhub.kxweb.XWebSessionPool): work.socialhub.kxweb.XWeb;
                instanceFromSessions(sessions: kotlin.collections.KtList<work.socialhub.kxweb.XWebSession>): work.socialhub.kxweb.XWeb;
                instanceFromJsonLines(jsonLines: string): work.socialhub.kxweb.XWeb;
                private constructor();
            }
        }
    }
}
export as namespace work_socialhub_kxweb_all;