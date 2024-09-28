import {
  GraphQLResolveInfo,
  GraphQLScalarType,
  GraphQLScalarTypeConfig,
} from "graphql";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T,
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never;
    };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & {
  [P in K]-?: NonNullable<T[P]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string | number };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
  Date: { input: Date | string; output: Date | string };
  DateTime: { input: Date | string; output: Date | string };
  JSON: { input: any; output: any };
  ObjectId: { input: any; output: any };
  Upload: { input: any; output: any };
};

export type ChartData = {
  __typename?: "ChartData";
  datasets?: Maybe<Array<Maybe<Dataset>>>;
  labels?: Maybe<Array<Maybe<Scalars["String"]["output"]>>>;
};

export type CoinData = {
  __typename?: "CoinData";
  changePercentage?: Maybe<Scalars["Float"]["output"]>;
  chartData?: Maybe<ChartData>;
  image?: Maybe<Scalars["String"]["output"]>;
  name?: Maybe<Scalars["String"]["output"]>;
  price?: Maybe<Scalars["Float"]["output"]>;
  symbol?: Maybe<Scalars["String"]["output"]>;
  volume?: Maybe<Scalars["Float"]["output"]>;
};

export type Comment = {
  __typename?: "Comment";
  content?: Maybe<Scalars["String"]["output"]>;
  createdAt?: Maybe<Scalars["Date"]["output"]>;
  id?: Maybe<Scalars["ID"]["output"]>;
  postId?: Maybe<Scalars["ID"]["output"]>;
  updatedAt?: Maybe<Scalars["Date"]["output"]>;
  user?: Maybe<User>;
  userId?: Maybe<Scalars["ID"]["output"]>;
};

export type CommentInput = {
  content?: InputMaybe<Scalars["String"]["input"]>;
  postId?: InputMaybe<Scalars["ID"]["input"]>;
  user?: InputMaybe<Scalars["ID"]["input"]>;
};

export type Community = {
  __typename?: "Community";
  _id?: Maybe<Scalars["ID"]["output"]>;
  coverImage?: Maybe<Scalars["String"]["output"]>;
  createdAt?: Maybe<Scalars["Date"]["output"]>;
  description?: Maybe<Scalars["String"]["output"]>;
  isVerified?: Maybe<Scalars["Boolean"]["output"]>;
  name?: Maybe<Scalars["String"]["output"]>;
  profileImage?: Maybe<Scalars["String"]["output"]>;
  updatedAt?: Maybe<Scalars["Date"]["output"]>;
  userId?: Maybe<Scalars["ID"]["output"]>;
};

export type CommunityInput = {
  coverImage?: InputMaybe<Scalars["Upload"]["input"]>;
  description: Scalars["String"]["input"];
  isVerified?: InputMaybe<Scalars["Boolean"]["input"]>;
  name: Scalars["String"]["input"];
  profileImage?: InputMaybe<Scalars["Upload"]["input"]>;
  userId: Scalars["ID"]["input"];
};

export type Contract = {
  __typename?: "Contract";
  abi?: Maybe<Scalars["JSON"]["output"]>;
  contractAddress?: Maybe<Scalars["String"]["output"]>;
  createdAt?: Maybe<Scalars["Date"]["output"]>;
  name?: Maybe<Scalars["String"]["output"]>;
  network?: Maybe<Scalars["String"]["output"]>;
  provider?: Maybe<Scalars["String"]["output"]>;
  updatedAt?: Maybe<Scalars["Date"]["output"]>;
  userId?: Maybe<Scalars["ID"]["output"]>;
};

export type ContractInput = {
  abi?: InputMaybe<Scalars["String"]["input"]>;
  contractAddress: Scalars["String"]["input"];
  name: Scalars["String"]["input"];
  network?: InputMaybe<Scalars["String"]["input"]>;
  provider?: InputMaybe<Scalars["String"]["input"]>;
  userId?: InputMaybe<Scalars["ID"]["input"]>;
};

export type CreateCommentResponse = {
  __typename?: "CreateCommentResponse";
  comment?: Maybe<Comment>;
  message?: Maybe<Scalars["String"]["output"]>;
};

export type CreateCommunityResponse = {
  __typename?: "CreateCommunityResponse";
  _id?: Maybe<Scalars["ID"]["output"]>;
  coverImage?: Maybe<Scalars["String"]["output"]>;
  createdAt?: Maybe<Scalars["Date"]["output"]>;
  description?: Maybe<Scalars["String"]["output"]>;
  isVerified?: Maybe<Scalars["Boolean"]["output"]>;
  name?: Maybe<Scalars["String"]["output"]>;
  profileImage?: Maybe<Scalars["String"]["output"]>;
  updatedAt?: Maybe<Scalars["Date"]["output"]>;
  userId?: Maybe<Scalars["ID"]["output"]>;
};

export type CreateContractResponse = {
  __typename?: "CreateContractResponse";
  message?: Maybe<Scalars["String"]["output"]>;
};

export type CreatePostResponse = {
  __typename?: "CreatePostResponse";
  message?: Maybe<Scalars["String"]["output"]>;
};

export type CreateShareResponse = {
  __typename?: "CreateShareResponse";
  message?: Maybe<Scalars["String"]["output"]>;
};

export type CreateUserResponse = {
  __typename?: "CreateUserResponse";
  message?: Maybe<Scalars["String"]["output"]>;
  token?: Maybe<Scalars["String"]["output"]>;
};

export type Dataset = {
  __typename?: "Dataset";
  data?: Maybe<Array<Maybe<Scalars["Float"]["output"]>>>;
};

export type LoginResponse = {
  __typename?: "LoginResponse";
  message?: Maybe<Scalars["String"]["output"]>;
  token?: Maybe<Scalars["String"]["output"]>;
};

export type Mutation = {
  __typename?: "Mutation";
  checkUsername?: Maybe<Scalars["String"]["output"]>;
  createComment?: Maybe<CreateCommentResponse>;
  createCommunity?: Maybe<CreateCommunityResponse>;
  createContract?: Maybe<CreateContractResponse>;
  createPost?: Maybe<CreatePostResponse>;
  createShare?: Maybe<CreateShareResponse>;
  createUser?: Maybe<CreateUserResponse>;
  createWallet?: Maybe<Scalars["String"]["output"]>;
  deleteCommunity?: Maybe<Scalars["String"]["output"]>;
  deletePost?: Maybe<Scalars["String"]["output"]>;
  deleteUser?: Maybe<Scalars["String"]["output"]>;
  doLike?: Maybe<Scalars["String"]["output"]>;
  followUnfollowUser?: Maybe<Scalars["String"]["output"]>;
  loginUser?: Maybe<LoginResponse>;
  transferFunds?: Maybe<TransferFundsResponse>;
  updateCommunity?: Maybe<Scalars["String"]["output"]>;
  updatePost?: Maybe<Scalars["String"]["output"]>;
  updateUser: Scalars["String"]["output"];
  updateWallet?: Maybe<Scalars["String"]["output"]>;
};

export type MutationCheckUsernameArgs = {
  username: Scalars["String"]["input"];
};

export type MutationCreateCommentArgs = {
  comment: CommentInput;
};

export type MutationCreateCommunityArgs = {
  community: CommunityInput;
};

export type MutationCreateContractArgs = {
  contract: ContractInput;
};

export type MutationCreatePostArgs = {
  post: PostInput;
};

export type MutationCreateShareArgs = {
  share: ShareInput;
};

export type MutationCreateUserArgs = {
  user: UserInput;
};

export type MutationCreateWalletArgs = {
  wallet: WalletInput;
};

export type MutationDeleteCommunityArgs = {
  id: Scalars["ID"]["input"];
};

export type MutationDeletePostArgs = {
  id: Scalars["ID"]["input"];
};

export type MutationDeleteUserArgs = {
  id: Scalars["ID"]["input"];
};

export type MutationDoLikeArgs = {
  postId: Scalars["ID"]["input"];
};

export type MutationFollowUnfollowUserArgs = {
  userId: Scalars["ID"]["input"];
};

export type MutationLoginUserArgs = {
  user: UserInput;
};

export type MutationTransferFundsArgs = {
  transferFunds: TransferFundsInput;
};

export type MutationUpdateCommunityArgs = {
  community: CommunityInput;
  id: Scalars["ID"]["input"];
};

export type MutationUpdatePostArgs = {
  id: Scalars["ID"]["input"];
  post: PostInput;
};

export type MutationUpdateUserArgs = {
  user: UpdateUserInput;
};

export type MutationUpdateWalletArgs = {
  id: Scalars["ID"]["input"];
  wallet: WalletInput;
};

export type Post = {
  __typename?: "Post";
  community?: Maybe<Community>;
  communityId?: Maybe<Scalars["ID"]["output"]>;
  content?: Maybe<Scalars["String"]["output"]>;
  createdAt?: Maybe<Scalars["Date"]["output"]>;
  id?: Maybe<Scalars["ID"]["output"]>;
  image?: Maybe<Scalars["String"]["output"]>;
  isVerified?: Maybe<Scalars["Boolean"]["output"]>;
  likes?: Maybe<Array<Maybe<Scalars["ID"]["output"]>>>;
  stats?: Maybe<PostStats>;
  title?: Maybe<Scalars["String"]["output"]>;
  updatedAt?: Maybe<Scalars["Date"]["output"]>;
  userId?: Maybe<User>;
};

export type PostFilter = {
  content?: InputMaybe<Scalars["String"]["input"]>;
  length?: InputMaybe<Scalars["Int"]["input"]>;
  title?: InputMaybe<Scalars["String"]["input"]>;
};

export type PostInput = {
  communityId?: InputMaybe<Scalars["ID"]["input"]>;
  content?: InputMaybe<Scalars["String"]["input"]>;
  createdAt?: InputMaybe<Scalars["Date"]["input"]>;
  image?: InputMaybe<Scalars["Upload"]["input"]>;
  isVerified?: InputMaybe<Scalars["Boolean"]["input"]>;
  title?: InputMaybe<Scalars["String"]["input"]>;
  updatedAt?: InputMaybe<Scalars["Date"]["input"]>;
  userId?: InputMaybe<Scalars["ID"]["input"]>;
};

export type PostStats = {
  __typename?: "PostStats";
  totalComments?: Maybe<Scalars["Int"]["output"]>;
  totalLikes?: Maybe<Scalars["Int"]["output"]>;
  totalShares?: Maybe<Scalars["Int"]["output"]>;
};

export type Query = {
  __typename?: "Query";
  getAllPosts?: Maybe<Array<Maybe<Post>>>;
  getCoinData: CoinData;
  getComments?: Maybe<Array<Maybe<Comment>>>;
  getCommunityPosts?: Maybe<Array<Maybe<Post>>>;
  getContracts?: Maybe<Array<Maybe<Contract>>>;
  getFollowingPosts?: Maybe<Array<Maybe<Post>>>;
  getPost?: Maybe<Post>;
  getShares?: Maybe<Array<Maybe<Share>>>;
  getUser?: Maybe<User>;
  getUserComments?: Maybe<Array<Maybe<Comment>>>;
  getUserCommunities?: Maybe<Array<Maybe<Community>>>;
  getUserFollowers?: Maybe<Array<Maybe<User>>>;
  getUserFollowing?: Maybe<Array<Maybe<User>>>;
  getUserPosts?: Maybe<Array<Maybe<Post>>>;
  getUserShares?: Maybe<Array<Maybe<Share>>>;
  getWallet?: Maybe<Wallet>;
  me?: Maybe<User>;
};

export type QueryGetAllPostsArgs = {
  filters?: InputMaybe<PostFilter>;
};

export type QueryGetCoinDataArgs = {
  currency: Scalars["String"]["input"];
  days: Scalars["Int"]["input"];
};

export type QueryGetCommentsArgs = {
  id: Scalars["ID"]["input"];
};

export type QueryGetCommunityPostsArgs = {
  id: Scalars["ID"]["input"];
};

export type QueryGetPostArgs = {
  id: Scalars["ID"]["input"];
};

export type QueryGetSharesArgs = {
  id: Scalars["ID"]["input"];
};

export type QueryGetUserArgs = {
  id: Scalars["ID"]["input"];
};

export type QueryGetUserCommentsArgs = {
  id: Scalars["ID"]["input"];
};

export type QueryGetUserCommunitiesArgs = {
  id: Scalars["ID"]["input"];
};

export type QueryGetUserFollowersArgs = {
  id: Scalars["ID"]["input"];
};

export type QueryGetUserFollowingArgs = {
  id: Scalars["ID"]["input"];
};

export type QueryGetUserPostsArgs = {
  id: Scalars["ID"]["input"];
};

export type QueryGetUserSharesArgs = {
  id: Scalars["ID"]["input"];
};

export type Share = {
  __typename?: "Share";
  createdAt?: Maybe<Scalars["Date"]["output"]>;
  id?: Maybe<Scalars["ID"]["output"]>;
  postId?: Maybe<Scalars["ID"]["output"]>;
  updatedAt?: Maybe<Scalars["Date"]["output"]>;
  userId?: Maybe<Scalars["ID"]["output"]>;
};

export type ShareInput = {
  postId?: InputMaybe<Scalars["ID"]["input"]>;
  userId?: InputMaybe<Scalars["ID"]["input"]>;
};

export type TransferFundsInput = {
  address: Scalars["String"]["input"];
  amount: Scalars["String"]["input"];
};

export type TransferFundsResponse = {
  __typename?: "TransferFundsResponse";
  message?: Maybe<Scalars["String"]["output"]>;
};

export type UpdateUserInput = {
  address?: InputMaybe<Scalars["String"]["input"]>;
  bio?: InputMaybe<Scalars["String"]["input"]>;
  email?: InputMaybe<Scalars["String"]["input"]>;
  firstName?: InputMaybe<Scalars["String"]["input"]>;
  lastName?: InputMaybe<Scalars["String"]["input"]>;
  password?: InputMaybe<Scalars["String"]["input"]>;
  phone?: InputMaybe<Scalars["String"]["input"]>;
  profileImage?: InputMaybe<Scalars["Upload"]["input"]>;
  username?: InputMaybe<Scalars["String"]["input"]>;
};

export type User = {
  __typename?: "User";
  address?: Maybe<Scalars["String"]["output"]>;
  bio?: Maybe<Scalars["String"]["output"]>;
  createdAt?: Maybe<Scalars["Date"]["output"]>;
  email?: Maybe<Scalars["String"]["output"]>;
  firstName?: Maybe<Scalars["String"]["output"]>;
  followers?: Maybe<Array<Maybe<Scalars["ID"]["output"]>>>;
  following?: Maybe<Array<Maybe<Scalars["ID"]["output"]>>>;
  id: Scalars["ID"]["output"];
  isVerified?: Maybe<Scalars["Boolean"]["output"]>;
  lastName?: Maybe<Scalars["String"]["output"]>;
  phone?: Maybe<Scalars["String"]["output"]>;
  profileImage?: Maybe<Scalars["String"]["output"]>;
  updatedAt?: Maybe<Scalars["Date"]["output"]>;
  username: Scalars["String"]["output"];
};

export type UserInput = {
  address?: InputMaybe<Scalars["String"]["input"]>;
  bio?: InputMaybe<Scalars["String"]["input"]>;
  email?: InputMaybe<Scalars["String"]["input"]>;
  firstName?: InputMaybe<Scalars["String"]["input"]>;
  lastName?: InputMaybe<Scalars["String"]["input"]>;
  password: Scalars["String"]["input"];
  phone?: InputMaybe<Scalars["String"]["input"]>;
  profileImage?: InputMaybe<Scalars["Upload"]["input"]>;
  username: Scalars["String"]["input"];
};

export type Wallet = {
  __typename?: "Wallet";
  address?: Maybe<Scalars["String"]["output"]>;
  balance?: Maybe<Scalars["String"]["output"]>;
  createdAt?: Maybe<Scalars["Date"]["output"]>;
  mnemonic?: Maybe<Scalars["String"]["output"]>;
  privateKey?: Maybe<Scalars["String"]["output"]>;
  publicKey?: Maybe<Scalars["String"]["output"]>;
  updatedAt?: Maybe<Scalars["Date"]["output"]>;
  userId?: Maybe<Scalars["ID"]["output"]>;
};

export type WalletInput = {
  address?: InputMaybe<Scalars["String"]["input"]>;
  balance?: InputMaybe<Scalars["String"]["input"]>;
  mnemonic?: InputMaybe<Scalars["String"]["input"]>;
  privateKey?: InputMaybe<Scalars["String"]["input"]>;
  publicKey?: InputMaybe<Scalars["String"]["input"]>;
};

export type ResolverTypeWrapper<T> = Promise<T> | T;

export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs,
> {
  subscribe: SubscriptionSubscribeFn<
    { [key in TKey]: TResult },
    TParent,
    TContext,
    TArgs
  >;
  resolve?: SubscriptionResolveFn<
    TResult,
    { [key in TKey]: TResult },
    TContext,
    TArgs
  >;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs,
> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<
  TResult,
  TKey extends string,
  TParent = {},
  TContext = {},
  TArgs = {},
> =
  | ((
      ...args: any[]
    ) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo,
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (
  obj: T,
  context: TContext,
  info: GraphQLResolveInfo,
) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<
  TResult = {},
  TParent = {},
  TContext = {},
  TArgs = {},
> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  ChartData: ResolverTypeWrapper<ChartData>;
  String: ResolverTypeWrapper<Scalars["String"]["output"]>;
  CoinData: ResolverTypeWrapper<CoinData>;
  Float: ResolverTypeWrapper<Scalars["Float"]["output"]>;
  Comment: ResolverTypeWrapper<Comment>;
  ID: ResolverTypeWrapper<Scalars["ID"]["output"]>;
  CommentInput: CommentInput;
  Community: ResolverTypeWrapper<Community>;
  Boolean: ResolverTypeWrapper<Scalars["Boolean"]["output"]>;
  CommunityInput: CommunityInput;
  Contract: ResolverTypeWrapper<Contract>;
  ContractInput: ContractInput;
  CreateCommentResponse: ResolverTypeWrapper<CreateCommentResponse>;
  CreateCommunityResponse: ResolverTypeWrapper<CreateCommunityResponse>;
  CreateContractResponse: ResolverTypeWrapper<CreateContractResponse>;
  CreatePostResponse: ResolverTypeWrapper<CreatePostResponse>;
  CreateShareResponse: ResolverTypeWrapper<CreateShareResponse>;
  CreateUserResponse: ResolverTypeWrapper<CreateUserResponse>;
  Dataset: ResolverTypeWrapper<Dataset>;
  Date: ResolverTypeWrapper<Scalars["Date"]["output"]>;
  DateTime: ResolverTypeWrapper<Scalars["DateTime"]["output"]>;
  JSON: ResolverTypeWrapper<Scalars["JSON"]["output"]>;
  LoginResponse: ResolverTypeWrapper<LoginResponse>;
  Mutation: ResolverTypeWrapper<{}>;
  ObjectId: ResolverTypeWrapper<Scalars["ObjectId"]["output"]>;
  Post: ResolverTypeWrapper<Post>;
  PostFilter: PostFilter;
  Int: ResolverTypeWrapper<Scalars["Int"]["output"]>;
  PostInput: PostInput;
  PostStats: ResolverTypeWrapper<PostStats>;
  Query: ResolverTypeWrapper<{}>;
  Share: ResolverTypeWrapper<Share>;
  ShareInput: ShareInput;
  TransferFundsInput: TransferFundsInput;
  TransferFundsResponse: ResolverTypeWrapper<TransferFundsResponse>;
  UpdateUserInput: UpdateUserInput;
  Upload: ResolverTypeWrapper<Scalars["Upload"]["output"]>;
  User: ResolverTypeWrapper<User>;
  UserInput: UserInput;
  Wallet: ResolverTypeWrapper<Wallet>;
  WalletInput: WalletInput;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  ChartData: ChartData;
  String: Scalars["String"]["output"];
  CoinData: CoinData;
  Float: Scalars["Float"]["output"];
  Comment: Comment;
  ID: Scalars["ID"]["output"];
  CommentInput: CommentInput;
  Community: Community;
  Boolean: Scalars["Boolean"]["output"];
  CommunityInput: CommunityInput;
  Contract: Contract;
  ContractInput: ContractInput;
  CreateCommentResponse: CreateCommentResponse;
  CreateCommunityResponse: CreateCommunityResponse;
  CreateContractResponse: CreateContractResponse;
  CreatePostResponse: CreatePostResponse;
  CreateShareResponse: CreateShareResponse;
  CreateUserResponse: CreateUserResponse;
  Dataset: Dataset;
  Date: Scalars["Date"]["output"];
  DateTime: Scalars["DateTime"]["output"];
  JSON: Scalars["JSON"]["output"];
  LoginResponse: LoginResponse;
  Mutation: {};
  ObjectId: Scalars["ObjectId"]["output"];
  Post: Post;
  PostFilter: PostFilter;
  Int: Scalars["Int"]["output"];
  PostInput: PostInput;
  PostStats: PostStats;
  Query: {};
  Share: Share;
  ShareInput: ShareInput;
  TransferFundsInput: TransferFundsInput;
  TransferFundsResponse: TransferFundsResponse;
  UpdateUserInput: UpdateUserInput;
  Upload: Scalars["Upload"]["output"];
  User: User;
  UserInput: UserInput;
  Wallet: Wallet;
  WalletInput: WalletInput;
};

export type ChartDataResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes["ChartData"] = ResolversParentTypes["ChartData"],
> = {
  datasets?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["Dataset"]>>>,
    ParentType,
    ContextType
  >;
  labels?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["String"]>>>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CoinDataResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes["CoinData"] = ResolversParentTypes["CoinData"],
> = {
  changePercentage?: Resolver<
    Maybe<ResolversTypes["Float"]>,
    ParentType,
    ContextType
  >;
  chartData?: Resolver<
    Maybe<ResolversTypes["ChartData"]>,
    ParentType,
    ContextType
  >;
  image?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  price?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  symbol?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  volume?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CommentResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes["Comment"] = ResolversParentTypes["Comment"],
> = {
  content?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes["Date"]>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes["ID"]>, ParentType, ContextType>;
  postId?: Resolver<Maybe<ResolversTypes["ID"]>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes["Date"]>, ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes["User"]>, ParentType, ContextType>;
  userId?: Resolver<Maybe<ResolversTypes["ID"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CommunityResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes["Community"] = ResolversParentTypes["Community"],
> = {
  _id?: Resolver<Maybe<ResolversTypes["ID"]>, ParentType, ContextType>;
  coverImage?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  createdAt?: Resolver<Maybe<ResolversTypes["Date"]>, ParentType, ContextType>;
  description?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  isVerified?: Resolver<
    Maybe<ResolversTypes["Boolean"]>,
    ParentType,
    ContextType
  >;
  name?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  profileImage?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  updatedAt?: Resolver<Maybe<ResolversTypes["Date"]>, ParentType, ContextType>;
  userId?: Resolver<Maybe<ResolversTypes["ID"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ContractResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes["Contract"] = ResolversParentTypes["Contract"],
> = {
  abi?: Resolver<Maybe<ResolversTypes["JSON"]>, ParentType, ContextType>;
  contractAddress?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  createdAt?: Resolver<Maybe<ResolversTypes["Date"]>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  network?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  provider?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes["Date"]>, ParentType, ContextType>;
  userId?: Resolver<Maybe<ResolversTypes["ID"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateCommentResponseResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes["CreateCommentResponse"] = ResolversParentTypes["CreateCommentResponse"],
> = {
  comment?: Resolver<Maybe<ResolversTypes["Comment"]>, ParentType, ContextType>;
  message?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateCommunityResponseResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes["CreateCommunityResponse"] = ResolversParentTypes["CreateCommunityResponse"],
> = {
  _id?: Resolver<Maybe<ResolversTypes["ID"]>, ParentType, ContextType>;
  coverImage?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  createdAt?: Resolver<Maybe<ResolversTypes["Date"]>, ParentType, ContextType>;
  description?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  isVerified?: Resolver<
    Maybe<ResolversTypes["Boolean"]>,
    ParentType,
    ContextType
  >;
  name?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  profileImage?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  updatedAt?: Resolver<Maybe<ResolversTypes["Date"]>, ParentType, ContextType>;
  userId?: Resolver<Maybe<ResolversTypes["ID"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateContractResponseResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes["CreateContractResponse"] = ResolversParentTypes["CreateContractResponse"],
> = {
  message?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreatePostResponseResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes["CreatePostResponse"] = ResolversParentTypes["CreatePostResponse"],
> = {
  message?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateShareResponseResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes["CreateShareResponse"] = ResolversParentTypes["CreateShareResponse"],
> = {
  message?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateUserResponseResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes["CreateUserResponse"] = ResolversParentTypes["CreateUserResponse"],
> = {
  message?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  token?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DatasetResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes["Dataset"] = ResolversParentTypes["Dataset"],
> = {
  data?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["Float"]>>>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface DateScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes["Date"], any> {
  name: "Date";
}

export interface DateTimeScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes["DateTime"], any> {
  name: "DateTime";
}

export interface JsonScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes["JSON"], any> {
  name: "JSON";
}

export type LoginResponseResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes["LoginResponse"] = ResolversParentTypes["LoginResponse"],
> = {
  message?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  token?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes["Mutation"] = ResolversParentTypes["Mutation"],
> = {
  checkUsername?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType,
    RequireFields<MutationCheckUsernameArgs, "username">
  >;
  createComment?: Resolver<
    Maybe<ResolversTypes["CreateCommentResponse"]>,
    ParentType,
    ContextType,
    RequireFields<MutationCreateCommentArgs, "comment">
  >;
  createCommunity?: Resolver<
    Maybe<ResolversTypes["CreateCommunityResponse"]>,
    ParentType,
    ContextType,
    RequireFields<MutationCreateCommunityArgs, "community">
  >;
  createContract?: Resolver<
    Maybe<ResolversTypes["CreateContractResponse"]>,
    ParentType,
    ContextType,
    RequireFields<MutationCreateContractArgs, "contract">
  >;
  createPost?: Resolver<
    Maybe<ResolversTypes["CreatePostResponse"]>,
    ParentType,
    ContextType,
    RequireFields<MutationCreatePostArgs, "post">
  >;
  createShare?: Resolver<
    Maybe<ResolversTypes["CreateShareResponse"]>,
    ParentType,
    ContextType,
    RequireFields<MutationCreateShareArgs, "share">
  >;
  createUser?: Resolver<
    Maybe<ResolversTypes["CreateUserResponse"]>,
    ParentType,
    ContextType,
    RequireFields<MutationCreateUserArgs, "user">
  >;
  createWallet?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType,
    RequireFields<MutationCreateWalletArgs, "wallet">
  >;
  deleteCommunity?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType,
    RequireFields<MutationDeleteCommunityArgs, "id">
  >;
  deletePost?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType,
    RequireFields<MutationDeletePostArgs, "id">
  >;
  deleteUser?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType,
    RequireFields<MutationDeleteUserArgs, "id">
  >;
  doLike?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType,
    RequireFields<MutationDoLikeArgs, "postId">
  >;
  followUnfollowUser?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType,
    RequireFields<MutationFollowUnfollowUserArgs, "userId">
  >;
  loginUser?: Resolver<
    Maybe<ResolversTypes["LoginResponse"]>,
    ParentType,
    ContextType,
    RequireFields<MutationLoginUserArgs, "user">
  >;
  transferFunds?: Resolver<
    Maybe<ResolversTypes["TransferFundsResponse"]>,
    ParentType,
    ContextType,
    RequireFields<MutationTransferFundsArgs, "transferFunds">
  >;
  updateCommunity?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType,
    RequireFields<MutationUpdateCommunityArgs, "community" | "id">
  >;
  updatePost?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType,
    RequireFields<MutationUpdatePostArgs, "id" | "post">
  >;
  updateUser?: Resolver<
    ResolversTypes["String"],
    ParentType,
    ContextType,
    RequireFields<MutationUpdateUserArgs, "user">
  >;
  updateWallet?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType,
    RequireFields<MutationUpdateWalletArgs, "id" | "wallet">
  >;
};

export interface ObjectIdScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes["ObjectId"], any> {
  name: "ObjectId";
}

export type PostResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes["Post"] = ResolversParentTypes["Post"],
> = {
  community?: Resolver<
    Maybe<ResolversTypes["Community"]>,
    ParentType,
    ContextType
  >;
  communityId?: Resolver<Maybe<ResolversTypes["ID"]>, ParentType, ContextType>;
  content?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes["Date"]>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes["ID"]>, ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  isVerified?: Resolver<
    Maybe<ResolversTypes["Boolean"]>,
    ParentType,
    ContextType
  >;
  likes?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["ID"]>>>,
    ParentType,
    ContextType
  >;
  stats?: Resolver<Maybe<ResolversTypes["PostStats"]>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes["Date"]>, ParentType, ContextType>;
  userId?: Resolver<Maybe<ResolversTypes["User"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PostStatsResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes["PostStats"] = ResolversParentTypes["PostStats"],
> = {
  totalComments?: Resolver<
    Maybe<ResolversTypes["Int"]>,
    ParentType,
    ContextType
  >;
  totalLikes?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  totalShares?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes["Query"] = ResolversParentTypes["Query"],
> = {
  getAllPosts?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["Post"]>>>,
    ParentType,
    ContextType,
    Partial<QueryGetAllPostsArgs>
  >;
  getCoinData?: Resolver<
    ResolversTypes["CoinData"],
    ParentType,
    ContextType,
    RequireFields<QueryGetCoinDataArgs, "currency" | "days">
  >;
  getComments?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["Comment"]>>>,
    ParentType,
    ContextType,
    RequireFields<QueryGetCommentsArgs, "id">
  >;
  getCommunityPosts?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["Post"]>>>,
    ParentType,
    ContextType,
    RequireFields<QueryGetCommunityPostsArgs, "id">
  >;
  getContracts?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["Contract"]>>>,
    ParentType,
    ContextType
  >;
  getFollowingPosts?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["Post"]>>>,
    ParentType,
    ContextType
  >;
  getPost?: Resolver<
    Maybe<ResolversTypes["Post"]>,
    ParentType,
    ContextType,
    RequireFields<QueryGetPostArgs, "id">
  >;
  getShares?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["Share"]>>>,
    ParentType,
    ContextType,
    RequireFields<QueryGetSharesArgs, "id">
  >;
  getUser?: Resolver<
    Maybe<ResolversTypes["User"]>,
    ParentType,
    ContextType,
    RequireFields<QueryGetUserArgs, "id">
  >;
  getUserComments?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["Comment"]>>>,
    ParentType,
    ContextType,
    RequireFields<QueryGetUserCommentsArgs, "id">
  >;
  getUserCommunities?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["Community"]>>>,
    ParentType,
    ContextType,
    RequireFields<QueryGetUserCommunitiesArgs, "id">
  >;
  getUserFollowers?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["User"]>>>,
    ParentType,
    ContextType,
    RequireFields<QueryGetUserFollowersArgs, "id">
  >;
  getUserFollowing?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["User"]>>>,
    ParentType,
    ContextType,
    RequireFields<QueryGetUserFollowingArgs, "id">
  >;
  getUserPosts?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["Post"]>>>,
    ParentType,
    ContextType,
    RequireFields<QueryGetUserPostsArgs, "id">
  >;
  getUserShares?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["Share"]>>>,
    ParentType,
    ContextType,
    RequireFields<QueryGetUserSharesArgs, "id">
  >;
  getWallet?: Resolver<
    Maybe<ResolversTypes["Wallet"]>,
    ParentType,
    ContextType
  >;
  me?: Resolver<Maybe<ResolversTypes["User"]>, ParentType, ContextType>;
};

export type ShareResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes["Share"] = ResolversParentTypes["Share"],
> = {
  createdAt?: Resolver<Maybe<ResolversTypes["Date"]>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes["ID"]>, ParentType, ContextType>;
  postId?: Resolver<Maybe<ResolversTypes["ID"]>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes["Date"]>, ParentType, ContextType>;
  userId?: Resolver<Maybe<ResolversTypes["ID"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TransferFundsResponseResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes["TransferFundsResponse"] = ResolversParentTypes["TransferFundsResponse"],
> = {
  message?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface UploadScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes["Upload"], any> {
  name: "Upload";
}

export type UserResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes["User"] = ResolversParentTypes["User"],
> = {
  address?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  bio?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes["Date"]>, ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  firstName?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  followers?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["ID"]>>>,
    ParentType,
    ContextType
  >;
  following?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["ID"]>>>,
    ParentType,
    ContextType
  >;
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  isVerified?: Resolver<
    Maybe<ResolversTypes["Boolean"]>,
    ParentType,
    ContextType
  >;
  lastName?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  phone?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  profileImage?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  updatedAt?: Resolver<Maybe<ResolversTypes["Date"]>, ParentType, ContextType>;
  username?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type WalletResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes["Wallet"] = ResolversParentTypes["Wallet"],
> = {
  address?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  balance?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes["Date"]>, ParentType, ContextType>;
  mnemonic?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  privateKey?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  publicKey?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  updatedAt?: Resolver<Maybe<ResolversTypes["Date"]>, ParentType, ContextType>;
  userId?: Resolver<Maybe<ResolversTypes["ID"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  ChartData?: ChartDataResolvers<ContextType>;
  CoinData?: CoinDataResolvers<ContextType>;
  Comment?: CommentResolvers<ContextType>;
  Community?: CommunityResolvers<ContextType>;
  Contract?: ContractResolvers<ContextType>;
  CreateCommentResponse?: CreateCommentResponseResolvers<ContextType>;
  CreateCommunityResponse?: CreateCommunityResponseResolvers<ContextType>;
  CreateContractResponse?: CreateContractResponseResolvers<ContextType>;
  CreatePostResponse?: CreatePostResponseResolvers<ContextType>;
  CreateShareResponse?: CreateShareResponseResolvers<ContextType>;
  CreateUserResponse?: CreateUserResponseResolvers<ContextType>;
  Dataset?: DatasetResolvers<ContextType>;
  Date?: GraphQLScalarType;
  DateTime?: GraphQLScalarType;
  JSON?: GraphQLScalarType;
  LoginResponse?: LoginResponseResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  ObjectId?: GraphQLScalarType;
  Post?: PostResolvers<ContextType>;
  PostStats?: PostStatsResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Share?: ShareResolvers<ContextType>;
  TransferFundsResponse?: TransferFundsResponseResolvers<ContextType>;
  Upload?: GraphQLScalarType;
  User?: UserResolvers<ContextType>;
  Wallet?: WalletResolvers<ContextType>;
};
