import { NuxtAuthHandler } from '#auth'
import GithubProvider from 'next-auth/providers/github'
import Google from 'next-auth/providers/google'
import LinkedIn from 'next-auth/providers/linkedin'

const runtimeConfig = useRuntimeConfig()

export default NuxtAuthHandler({
    pages: {
        signIn: '/login'
    },
    providers: [
        // @ts-expect-error
        GithubProvider.default({
            clientId: runtimeConfig.public.oauthGithubClientId,
            clientSecret: runtimeConfig.oauthGithubClientSecretId,
        }),
        // @ts-expect-error
        Google.default({
            clientId: runtimeConfig.public.oauthGoogleClientId,
            clientSecret: runtimeConfig.oauthGoogleClientSecretId,
        }),
        // @ts-expect-error
        LinkedIn.default({
            clientId: runtimeConfig.public.oauthLinkedinClientId,
            clientSecret: runtimeConfig.oauthLinkedinClientSecretId,
        })
    ],
    secret: runtimeConfig.authSecret,
})
