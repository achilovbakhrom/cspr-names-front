export type CurrentUserResponse = {
  kind: string
  users: Array<{
    localId: string
    email: string
    passwordHash: string
    emailVerified: boolean
    passwordUpdatedAt: number
    providerUserInfo: Array<{
      providerId: string
      federatedId: string
      email: string
      rawId: string
    }>
    validateSince: string
    lastLoginAt: string
    createdAt: string
    lastRefreshAt: string
  }>
}
